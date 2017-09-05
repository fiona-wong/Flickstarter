const models = require('../models');

exports.seed = function (knex, Promise) {

  return models.Role.where({ position: 'actor' }).fetch()
    .then((role) => {
      if (role) {
        throw role;
      }
      return models.Role.forge({
        position: 'actor'
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create role');
      throw err;
    })
    .catch(() => {
      console.log('WARNING: role already exists.');
    });
};