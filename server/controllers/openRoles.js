const models = require('../../db/models');

module.exports.add = (req, res) => {
  models.OpenRole.forge({
    project_id: req.body.projectId,
    open_role: req.body.roleId
  })
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.remove = (req, res) => {
  models.OpenRole.where({
    project_id: req.body.projectId,
    open_role: req.body.roleId
  })
    .fetch()
    .then(result => {
      if (!result) {
        throw result;
      }
      return result.destroy();
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

module.exports.getProjectRoles = (req, res) => {
  models.OpenRole.where({
    project_id: req.body.projectId
  }).fetch()
    .then(roles => {
      if (!roles) {
        throw roles;
      }
      res.status(200).send(roles);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};
