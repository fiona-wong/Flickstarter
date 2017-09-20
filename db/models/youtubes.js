const db = require('../');

const Youtube = db.Model.extend({
  tableName: 'youtubes',
  profile: function() {
    return this.belongsTo('Profile', 'user_id');
  }
});

module.exports = db.model('Youtube', Youtube);
