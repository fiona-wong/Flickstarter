const db = require('../');

const FollowUpvote = db.Model.extend({
  tableName: 'follows_upvotes',
  project: function() {
    return this.belongsTo('Project');
  },
  profile: function() {
    this.belongsTo('Profile');
  }
});

module.exports = db.model('FollowUpvote', FollowUpvote);