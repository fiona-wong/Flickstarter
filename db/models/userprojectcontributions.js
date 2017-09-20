const db = require('../');

const UserProjectContribution = db.Model.extend({
  tableName: 'user_project_contributions',
  project: function() {
    return this.belongsTo('Project', 'project_id');
  },
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('UserProjectContribution', UserProjectContribution);