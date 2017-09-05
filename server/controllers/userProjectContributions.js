const models = require('../../db/models');

module.exports.newContribution = (req, res) => {
  models.UserProjectContribution.forge({ 
    project_id: req.body.projectId, 
    user_id: req.body.userId,
    contribution: req.body.contribution
  })
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.getProjectContributions = (req, res) => {
  models.UserProjectContribution.where({project_id: req.params.projectId}).fetch()
    .then(contributions => {
      if (!contributions) {
        throw contributions;
      }
      res.status(200).send(contributions);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.getUserContributions = (req, res) => {
  models.UserProjectContribution.where({user_id: req.params.userId}).fetch()
    .then(contributions => {
      if (!contributions) {
        throw contributions;
      }
      res.status(200).send(contributions);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.getUserProjectContributions = (req, res) => {
  models.UserProjectContribution.where({
    user_id: req.params.userId,
    project_id: req.params.projectId
  }).fetch()
    .then(contributions => {
      if (!contributions) {
        throw contributions;
      }
      res.status(200).send(contributions);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};
