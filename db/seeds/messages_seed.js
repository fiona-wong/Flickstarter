const models = require('../models');

exports.seed = function (knex, Promise) {

  return knex('messages').insert([
    {sender_id: 1, project_id: 2, receiver_id: 3, text: 'Hello! I am really interested in the actor role in your project, please check out my portfolio', viewed: true},
    {sender_id: 3, project_id: 2, receiver_id: 1, text: 'Hello! Sure I will check it out after this meeting', viewed: false}]);
};
