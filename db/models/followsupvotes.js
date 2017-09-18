const db = require('../');

const FollowUpvote = db.Model.extend({
  tableName: 'follows_upvotes',
  project: function() {
    return this.belongsTo('Project');
  },
  profile: function() {
    return this.belongsTo('Profile', 'user_id');
  }
});

module.exports = db.model('FollowUpvote', FollowUpvote);