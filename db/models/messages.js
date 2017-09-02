const db = require('../');

const Message = db.Model.extend({
  tableName: 'messages',
  project: function() {
    return this.belongsTo('Project');
  },
  sender: function() {
    this.belongsTo('Profile');
  },
  receiver: function() {
    this.belongsTo('Profile');
  }
});

module.exports = db.model('Message', Message);