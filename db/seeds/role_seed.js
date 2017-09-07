const models = require('../models');

exports.seed = function (knex, Promise) {
  return knex('roles').insert([
    {position: 'Producer'},
    {position: 'Director'},
    {position: 'Screenwriter'},
    {position: 'Designer'},
    {position: 'Cinematographer'},
    {position: 'Editor'},
    {position: 'Actor'}]);
};