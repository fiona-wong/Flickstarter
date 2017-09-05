const db = require('../');

const Project = db.Model.extend({
  tableName: 'projects',
  profile: function() {
    return this.belongsTo('Profile');
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
    return this.hasMany('UserProjectContribution');
  },
  openRoles: function() {
    return this.hasMany('Role');
  }
});

module.exports = db.model('Project', Project);