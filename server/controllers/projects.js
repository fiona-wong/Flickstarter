const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Project.fetchAll({withRelated: ['profile']})
    .then(projects => {
      if (!projects) {
        throw projects;
      }
      projects = projects.toJSON();
      res.status(200).send(projects);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.getOne = (req, res) => {
  models.Project.where({id: req.params.id}).fetch()
    .then(project => {
      if (!project) {
        throw project;
      }
      res.status(200).send(project);
    })
    .error(err => {
      res.status(500).send(err);
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
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.update = (req, res) => {
  console.log(req.body);
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

module.exports.upvote = (req, res) => {
  models.Project.where({id: req.body.id}).fetch()
    .then(project => {
      if (!project) {
        throw project;
      }
      project.query().increment('upvote_count', 1);
    })
    .then(() => {
      res.sendStatus(201, project.upvote_count);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.decrementVoteCount = (req, res) => {
  models.Project.where({id: req.body.id}).fetch()
    .then(project => {
      if (!project) {
        throw project;
      }
      project.query().increment('upvote_count', -1);
    })
    .then(() => {
      res.sendStatus(201, project.upvote_count);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};
