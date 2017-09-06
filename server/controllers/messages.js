const models = require('../../db/models');

module.exports.save = (req, res) => {
  models.Message.forge({
    project_id: req.body.projectId, 
    sender_id: req.body.senderId,
    receiver_id: req.body.receiverId,
    text: req.body.text,
    viewed: false
  })
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.view = (req, res) => {
  models.Message.where({ 
    receiver_id: req.params.receiverId
  }).fetch()
    .then(messages => {
      if (!messages) {
        throw messages;
      }
      return messages.save({viewed: true}, { method: 'update' });
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

module.exports.get = (req, res) => {
  models.Message.where({ 
    receiver_id: req.params.receiverId
  }).fetch()
    .then(messages => {
      if (!messages) {
        throw messages;
      }
      res.status(200).send(messages);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};
