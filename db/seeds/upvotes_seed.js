const models = require('../models');

exports.seed = function (knex, Promise) {

  return models.FollowUpvote.where({ user_id: 1, project_id: 1 }).fetch()
    .then((user_id) => {
      if (user_id) {
        throw user_id;
      }
      return models.FollowUpvote.forge({
        type: 'upvote'
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create upvote');
      throw err;
    })
    .catch(() => {
      console.log('WARNING: upvote already exists.');
    });
};