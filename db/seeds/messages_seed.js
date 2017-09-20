const models = require('../models');


exports.seed = function (knex, Promise) {
  return knex('messages').insert([
    // {project_id: 10, sender_id: 1, receiver_id: 10, text: 'Hello I like your idea, can I audition for it? message1', subject: 'Open role for x movie', viewed: false},
    // {project_id: 10, sender_id: 1, receiver_id: 10, text: 'Hello I like your idea, can I audition for it? message2', subject: 'Open role for x movie', viewed: false},
    // {project_id: 10, sender_id: 2, receiver_id: 10, text: 'Hello I like your idea, can I audition for it? message1', subject: 'Open role for x movie', viewed: false},
    // {project_id: 11, sender_id: 2, receiver_id: 10, text: 'Hello I like your idea, can I audition for it? message2', subject: 'Open role for x movie', viewed: false},
    // {project_id: 11, sender_id: 2, receiver_id: 10, text: 'Hello I like your idea, can I audition for it? message3', subject: 'Open role for x movie', viewed: false},
    // {project_id: 11, sender_id: 4, receiver_id: 10, text: 'Hello I like your idea, can I audition for it? message1', subject: 'Open role for x movie', viewed: false},
    // {project_id: 11, sender_id: 3, receiver_id: 10, text: 'Hello I like your idea, can I audition for it? message1', subject: 'Open role for x movie', viewed: false}
  ]);
};
