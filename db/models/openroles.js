const db = require('../');

const OpenRole = db.Model.extend({
  tableName: 'open_roles',
  project: function() {
    return this.belongsTo('Project');
  },
  openRole: function() {
    this.belongsTo('Role');
  }
});

module.exports = db.model('OpenRole', OpenRole);