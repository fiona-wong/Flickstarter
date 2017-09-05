const models = require('../../db/models');

module.exports.upvote = (req, res) => {
  models.FollowUpvote.forge({
    project_id: req.body.projectId, 
    user_id: req.body.userId,
    type: 'upvote'
  })
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.undoUpvote = (req, res) => {
  models.FollowUpvote.where({
    project_id: req.body.projectId, 
    user_id: req.body.userId,
    type: 'upvote'
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


module.exports.follow = (req, res) => {
  models.FollowUpvote.forge({
    project_id: req.body.projectId, 
    user_id: req.body.userId,
    type: 'follow'
  })
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.unfollow = (req, res) => {
  models.FollowUpvote.where({
    project_id: req.body.projectId, 
    user_id: req.body.userId,
    type: 'follow'
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

module.exports.getProjectFollowsUpvotes = (req, res) => {
  models.FollowUpvote.where({
    project_id: req.body.projectId
  })
    .fetch()
    .then(followsUpvotes => {
      res.status(200).send(followsUpvotes);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.getUserFollowsUpvotes = (req, res) => {
  models.FollowUpvote.where({
    user_id: req.body.userId
  })
    .fetch()
    .then(followsUpvotes => {
      res.status(200).send(followsUpvotes);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};


module.exports.getProjectFollows = (req, res) => {
  models.FollowUpvote.where({
    project_id: req.body.projectId,
    type: 'follow'
  })
    .fetch()
    .then(follows => {
      res.status(200).send(follows);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.getUserFollows = (req, res) => {
  models.FollowUpvote.where({
    user_id: req.body.userId,
    type: 'follow'
  })
    .fetch()
    .then(follows => {
      res.status(200).send(follows);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.getProjectUpvotes = (req, res) => {
  models.FollowUpvote.where({
    project_id: req.body.projectId,
    type: 'upvote'
  })
    .fetch()
    .then(upvotes => {
      res.status(200).send(upvotes);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.getUserUpvotes = (req, res) => {
  models.FollowUpvote.where({
    user_id: req.body.userId,
    type: 'upvote'
  })
    .fetch()
    .then(upvotes => {
      res.status(200).send(upvotes);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

