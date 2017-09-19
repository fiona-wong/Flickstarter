const db = require('../');

const Role = db.Model.extend({
  tableName: 'roles',
  user: function() {
    return this.belongsToMany('Profile').through('UserRole');
  },
  project: function() {
    return this.belongsToMany('Project').through('OpenRole');
  }
});

module.exports = db.model('Role', Role);
