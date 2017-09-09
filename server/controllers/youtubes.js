const models = require('../../db/models');

module.exports.addVideo = (req, res) => {
  models.Youtube.forge({
    user_id: req.body.userId,
    link: req.body.link
  })
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.removeVideo = (req, res) => {
  models.Youtube.where({id: req.params.id}).fetch()
    .then(video => {
      if (!video) {
        throw video;
      }
      return video.destroy();
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


module.exports.getUserVideos = (req, res) => {
  models.Youtube.fetchAll()
    .then(videos => {
      res.status(200).send(videos);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};
