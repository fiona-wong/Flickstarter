const db = require('../');

const Youtube = db.Model.extend({
  tableName: 'youtubes',
  profile: function() {
    return this.belongsToMany('Profile');
  }
});

module.exports = db.model('Youtube', Youtube);
