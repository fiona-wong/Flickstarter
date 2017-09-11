const models = require('../models');

exports.seed = function (knex, Promise) {

  return models.Genre.where({ genre: 'Documentary' }).fetch()
    .then((genre) => {
      if (genre) {
        throw genre;
      }
      return models.Genre.forge({
        genre: 'documentary'
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create genre');
      throw err;
    })
    .catch(() => {
      console.log('WARNING: genre already exists.');
    });
};
