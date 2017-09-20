const db = require('../');

const Project = db.Model.extend({
  tableName: 'projects',
  profile: function() {
    return this.belongsTo('Profile', 'creator_id');
  },
  genres: function() {
    return this.hasMany('Genre');
  },
  messages: function() {
    return this.hasMany('Message');
  },
  followsUpvotes: function() {
    return this.hasMany('FollowUpvote');
  },
  contributions: function() {
    return this.hasMany('UserProjectContribution', 'project_id');
  },
  openRoles: function() {
    return this.belongsTo('OpenRole', 'project_id');
  }
});

module.exports = db.model('Project', Project);
