const db = require('../');

const Role = db.Model.extend({
  tableName: 'roles',
  user: function() {
    return this.belongsToMany('Profile');
  }
});

module.exports = db.model('Role', Role);
