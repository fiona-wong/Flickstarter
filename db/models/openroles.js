const db = require('../');

const OpenRole = db.Model.extend({
  tableName: 'open_roles',
  project: function() {
    return this.belongsTo('Project', 'project_id');
  },
  role: function() {
    return this.belongsTo('OpenRole', 'open_role');
  }
});

module.exports = db.model('OpenRole', OpenRole);