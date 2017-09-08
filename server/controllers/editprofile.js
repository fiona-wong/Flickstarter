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
  req.body['userrole[]'].map(role => {
    model.Role.where({position: role}).fetch()
      .then(data => {
        model.UserRole.where({user_id: req.user.id, role_id: data.id}).fetch()
          .then(result => {
            if (result === null) {
              return model.UserRole.forge().save({user_id: req.user.id, role_id: data.id}, {method: 'insert'});
            } 
          });
      })
      .then(() => {
        res.status(200).end(); 
      })
      .catch(() => {
        res.status(500).end();
      });
  });
};

