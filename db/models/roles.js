const db = require('../');

const Role = db.Model.extend({
  tableName: 'roles'
});

module.exports = db.model('Role', Role);
