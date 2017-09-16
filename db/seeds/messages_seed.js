const models = require('../models');


exports.seed = function (knex, Promise) {
  return models.Message.where({ sender_id: 1, project_id: 1, receiver_id: 2 }).fetch()
    .then((sender_id) => {
      if (sender_id) {
        throw sender_id;
      }
      return models.Message.forge({
        text: 'hello world',
        viewed: false
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create message');
      throw err;
    })
    .catch(() => {
      console.log('WARNING: message already exists.');
    });
};
