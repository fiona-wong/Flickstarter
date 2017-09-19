const models = require('../models');

exports.seed = function (knex, Promise) {
  return knex('roles').insert([
    {position: 'Actor'},
    {position: 'Cinematographer'},
    {position: 'Composer'},
    {position: 'Designer'},
    {position: 'Director'},
    {position: 'Editor'},
    {position: 'Producer'},
    {position: 'Screenwriter'}])
};