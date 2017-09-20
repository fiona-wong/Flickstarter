const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  let projectData = {}
  models.Project.fetchAll({withRelated: ['profile', 'contributions']})
    .then(projects => {
      projectData.projects = projects;
      return models.FollowUpvote.where({user_id: req.user.id}).fetchAll();
    })
    .then(upvotes => {
      let upvoteStorage = {};
      upvotes.forEach(upvote => {
        upvoteStorage[upvote.attributes.project_id] = upvote.attributes.project_id;
      });
      projectData.userUpvotes = upvoteStorage;
      res.status(200).send(projectData);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.getOne = (req, res) => {
  let projectData = {};
  models.Project.where({id: req.params.id}).fetch({withRelated: ['profile', 'contributions']})
    .then(project => {
      if (!project) {
        throw project;
      }
      projectData.project = project;
      return models.UserProjectContribution.where({user_id: req.user.id, project_id: project.id}).fetch();
    })
      .then(contribution => {
        if (contribution) {
          projectData.userContribution = contribution;
        }
        return models.OpenRole.where({project_id: projectData.project.id}).fetchAll();
      })
        .then(roles => {
          projectData.openRoles = [];
          if (roles.length > 0) {
            roles.forEach(role => {
              return models.Role.where({id: role.attributes.open_role}).fetch()
              .then(role => {
                projectData.openRoles.push(role.attributes.position);
                if (projectData.openRoles.length === roles.length) {
                  res.status(200).send(projectData);
                }
              });
            });
          } else {
            res.status(200).send(projectData);
          }
        })
    .error(err => {
      res.status(503).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.create = (req, res) => {
  models.Project.forge({
    name: req.body.name,
    short_description: req.body.shortDescription,
    long_description: req.body.longDescription,
    location: req.body.location,
    photo_url: req.body.photoUrl,
    video_url: req.body.videoUrl,
    goal_amount: req.body.goalAmount,
    goal_deadline: req.body.goalDeadline,
    raised_amount: 0,
    creator_id: req.user.id,
    upvote_count: 0,
    genre: req.body.genre
  }).save()
    .then((project) => {
      if (req.body['projectRoles[]'] && typeof req.body['projectRoles[]'] === 'string') {
        models.Role.where({position: req.body['projectRoles[]']}).fetch()
          .then(role => {
            models.OpenRole.forge({
              project_id: project.id,
              open_role: role.id
            }).save();
          });
        return project;
      } else if (req.body['projectRoles[]']) {
        req.body['projectRoles[]'].forEach(role => {
          models.Role.where({position: role}).fetch()
            .then(result => {
              models.OpenRole.forge({
                project_id: project.id,
                open_role: result.id
              }).save();
            });
        });
        return project;
      } else {
        res.status(201).send(project);
      }
    })
    .then(project => {
      res.status(201).send(project);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.update = (req, res) => {
  models.Project.where({id: req.params.id}).save(req.body, {method: 'update'})
    .then(() => {
      res.sendStatus(200).send('project has been updated');
    })
    .error(err => {
      res.status(500).send(err);
    });
};

module.exports.deleteOne = (req, res) => {
  models.Project.where({id: req.params.id}).fetch()
    .then(project => {
      if (!project) {
        throw project;
      }
      return project.destroy();
    })
    .then(() => {
      res.sendStatus(200);
    })
    .error(err => {
      res.status(503).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

