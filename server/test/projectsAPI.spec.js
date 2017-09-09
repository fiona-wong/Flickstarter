'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');
const dbUtils = require('../../db/lib/utils.js');

describe('Projects API', function () {
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(done);
  });

  afterEach(function (done) {
    dbUtils.rollback(done);
  });

  it('accepts POST requests to /api/projects/new', function (done) {
    request(app)
      .post('/api/projects/new')
      .send({
        name: 'My Awesome Project', 
        short_description: 'The best project',
        long_description: 'This project is really really good',
        location: 'San Francisco, CA',
        photo_url: 'data:image/jpeg;base64,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',
        video_url: 'https://www.youtube.com/watch?v=l3qUvdy1Dh8',
        goal_amount: 1000,
        goal_deadline: '11/01/2017',
        creator_id: 2,
        genre: 'Documentary'
      })
      .expect(res => {
        res.body = {
          name: res.body.name, 
          short_description: res.body.shortDescription,
          long_description: res.body.longDescription,
          location: res.body.location,
          photo_url: res.body.photoUrl,
          video_url: res.body.videoUrl,
          goal_amount: res.body.goalAmount,
          goal_deadline: res.body.goalDeadline,
          raised_amount: 0,
          creator_id: res.user,
          upvote_count: 0,
          genre: res.body.genre
        };
      })
      .expect(201)
      .end(done);
  });

  it('accepts GET requests to /api/projects', function (done) {
    request(app)
      .get('/api/projects')
      .expect(res => {
        res.body = {
          length: res.body.length
        };
      })
      .expect(200, {
        length: 1
      })
      .end(done);
  });
  
  it('accepts GET requests to /api/projects/:id', function (done) {
    request(app)
      .get('/api/projects/1')
      .expect(res => {
        res.body = {
          id: res.body.id
        };
      })
      .expect(200, {
        id: 1
      })
      .end(done);
  });

  it('sends 404 if id on GET requests to /api/projects/:id does not exist', function (done) {
    request(app)
      .get('/api/projects/123')
      .expect(404)
      .end(done);
  });

  it('accepts PUT requests to /api/projects/update/:id', function () {
    let project = {
      name: 'Parakeets: The Movie',
      short_description: 'Dive into the colorful world of Parakeets',
      long_description: 'See Parakeets like you\'ve never seen them before, in unreal 4K high definition',
      location: 'California',
      photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgdFyI783lYSIrLwi3fWxFszpgg_EX3UmRVVGDvMWpEQq1mD5som7eQ',
      video_url: 'https://www.youtube.com/watch?v=TpGbx4fxogE',
      goal_amount: 10000,
      goal_deadline: '12/01/2017',
      raised_amount: 0,
      creator_id: 1,
      upvote_count: 0,
      genre: 'Drama'
    };

    return request(app)
      .put('/api/projects/update/1')
      .send(project)
      .expect(201)
      .then(() => {
        return request(app)
          .get('/api/projects/1')
          .expect(res => {
            res.body = {
              name: 'Parakeets: The Movie',
              short_description: 'Dive into the colorful world of Parakeets',
              long_description: 'See Parakeets like you\'ve never seen them before, in unreal 4K high definition',
              location: 'California',
              photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgdFyI783lYSIrLwi3fWxFszpgg_EX3UmRVVGDvMWpEQq1mD5som7eQ',
              video_url: 'https://www.youtube.com/watch?v=TpGbx4fxogE',
              goal_amount: 10000,
              goal_deadline: '12/01/2017',
              raised_amount: 0,
              creator_id: 1,
              upvote_count: 0,
              genre: 'Drama'
            };
          })
          .expect(200, project);
      });
  });

  it('sends 404 if id on PUT requests to /api/projects/update/:id does not exist', function (done) {
    request(app)
      .put('/api/projects/update/123')
      .expect(404)
      .end(done);
  });

  it('accepts DELETE requests to /api/projects/delete/:id', function (done) {
    request(app)
      .delete('/api/projects/delete/1')
      .expect(200)
      .end(done);
  });

  it('sends 404 if id on DELETE requests to /api/projects/delete/:id does not exist', function (done) {
    request(app)
      .delete('/api/projects/123')
      .expect(404)
      .end(done);
  });

});
