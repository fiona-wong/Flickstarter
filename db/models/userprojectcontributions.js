const db = require('../');

const UserProjectContribution = db.Model.extend({
  tableName: 'user_project_contributions',
  project: function() {
    return this.belongsTo('Project', 'project_id');
  },
  profile: function() {
    this.belongsTo('Profile', 'user_id');
  }
});

module.exports = db.model('UserProjectContribution', UserProjectContribution);
