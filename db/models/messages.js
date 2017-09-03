const db = require('../');

const Message = db.Model.extend({
  tableName: 'messages',
  project: function() {
    return this.belongsTo('Project');
  },
  sender: function() {
    return this.belongsTo('Profile');
  },
  receiver: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Message', Message);