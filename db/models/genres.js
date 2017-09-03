const db = require('../');

const Genre = db.Model.extend({
  tableName: 'genres'
});

module.exports = db.model('Genre', Genre);