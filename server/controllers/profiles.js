const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Profile.fetchAll()
    .then(profiles => {
      res.status(200).send(profiles);
    })
    .catch(err => {
    // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};

module.exports.getOne = (req, res) => {
  let fullProfile = {};
  models.Profile.where({id: req.params.id}).fetch({withRelated: ['roles']})
    .then((profile) => {
      profile = profile.toJSON();
      fullProfile.profile = profile;
      return models.Youtube.where({user_id: req.params.id}).fetchAll({columns: ['link']})
        .then(youtubes => {
          youtubes = youtubes.toJSON();
          fullProfile.youtubes = youtubes;
          return models.Project.where({creator_id: req.params.id}).fetchAll()
            .then(projects => {
              projects = projects.toJSON();
              fullProfile.projects = projects;
              return models.FollowUpvote.where({user_id: req.user.id}).fetchAll();
            })
            .then(upvotes => {
              let upvoteStorage = {};
              upvotes.forEach(upvote => {
                upvoteStorage[upvote.attributes.project_id] = upvote.attributes.project_id;
              });
              fullProfile.userUpvotes = upvoteStorage;
              res.status(200).send(fullProfile);
            });
        });
    })
    .catch(()=> {
      res.status(500).send('Could not retrieve data');
    });
};


module.exports.getOwn = (req, res, next) => {
  let fullProfile = {};
  models.Profile.where({id: req.user.id}).fetch({withRelated: ['roles', 'contributions']})
    .then((profile) => {
      profile = profile.toJSON();
      fullProfile.profile = profile;
      models.Youtube.where({user_id: req.user.id}).fetchAll({columns: ['link']})
        .then(youtubes => {
          youtubes = youtubes.toJSON();
          fullProfile.youtubes = youtubes;
          models.Project.where({creator_id: req.user.id}).fetchAll()
            .then(projects => {
              projects = projects.toJSON();
              fullProfile.projects = projects;
              return models.FollowUpvote.where({user_id: req.user.id}).fetchAll();
            })
            .then(upvotes => {
              let upvoteStorage = {};
              upvotes.forEach(upvote => {
                upvoteStorage[upvote.attributes.project_id] = upvote.attributes.project_id;
              });
              fullProfile.userUpvotes = upvoteStorage;
              res.status(200).send(fullProfile);
            });
        });
    })
    .catch(()=> {
      res.status(500).send('Could not retrieve data');
    });
};

module.exports.updateTotalContributions = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      profile.query().increment('upvote_count', req.body.contribution);
    })
    .then(() => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

// module.exports.deleteOne = (req, res) => {
//   models.Profile.where({ id: req.params.id }).fetch()
//     .then(profile => {
//       if (!profile) {
//         throw profile;
//       }
//       return profile.destroy();
//     })
//     .then(() => {
//       res.sendStatus(200);
//     })
//     .error(err => {
//       res.status(503).send(err);
//     })
//     .catch(() => {
//       res.sendStatus(404);
//     });
// };
