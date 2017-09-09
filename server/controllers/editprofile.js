const model = require('../../db/models');

module.exports.updateProfile = (req, res) => {
  console.log(req.body);
  model.Profile.where({id: req.user.id}).save(req.body, {method: 'update'})
    .then((data) => {
      res.status(200).send('profile has been updated');
    })
    .catch(() => {
      res.status(500);
    });
};

module.exports.roles = (req, res) => {
  model.Role.fetchAll()
    .then(results => {
      res.status(200).send(results);
    })
    .catch(() => {
      res.status(500);
    });
};

module.exports.updateUserRoles = (req, res) => {
  model.UserRole.where({user_id: req.user.id}).destroy()
    .then(() => {

      if (!Array.isArray(req.body['userrole[]'])) {
        if (JSON.stringify(req.body) === '{}') {
          return;
        }
        model.Role.where({position: req.body['userrole[]']}).fetch()
          .then(data => {
            model.UserRole.where({user_id: req.user.id, role_id: data.id}).fetch()
              .then(result => {
                if (result === null) {
                  return model.UserRole.forge().save({user_id: req.user.id, role_id: data.id}, {method: 'insert'});
                }
              });
          });
      } else {
        req.body['userrole[]'].map(role => {
          model.Role.where({position: role}).fetch()
            .then(data => {
              model.UserRole.where({user_id: req.user.id, role_id: data.id}).fetch()
                .then(result => {
                  if (result === null) {
                    return model.UserRole.forge().save({user_id: req.user.id, role_id: data.id}, {method: 'insert'});
                  }
                });
            });
        });
      }
    })
    .then(() => {
      res.status(200).end();
    })
    .catch(() => {
      res.status(500).end();
    });
};

module.exports.updateYoutube = (req, res) => {
  console.log(req.body);
  model.Youtube.where({user_id: req.user.id}).destroy()
    .then(() => {
      if (JSON.stringify(req.body) === '{}') {
        return;
      } else {
        if (!Array.isArray(req.body['youtube[]'])) {
          return model.Youtube.forge().save({user_id: req.user.id, link: req.body['youtube[]']}, {method: 'insert'});
        } else {
          req.body['youtube[]'].map(youtubeLink => {
            return model.Youtube.forge().save({user_id: req.user.id, link: youtubeLink}, {method: 'insert'});
          });
        }
      }
    })
    .then(() => {
      res.status(200).end();
    })
    .catch(() => {
      res.status(500).end();
    });
};
