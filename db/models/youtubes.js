const db = require('../');

const Youtube = db.Model.extend({
  tableName: 'youtubes',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Youtube', Youtube);