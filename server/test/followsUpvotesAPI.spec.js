'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');
const dbUtils = require('../../db/lib/utils.js');

xdescribe('FollowsUpvotes API', function () {
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(done);
  });

  afterEach(function (done) {
    dbUtils.rollback(done);
  });

  it('accepts POST requests to /api/followsUpvotes/upvote', function (done) {
    request(app)
      .post('/api/followsUpvotes/upvote')
      .send({
        project_id: 1,
        user_id: 2,
        type: 'upvote'
      })
      .expect(res => {
        res.body = {
          project_id: res.body.projectId,
          user_id: res.body.userId,
          type: 'upvote'
        };
      })
      .expect(201)
      .end(done);
  });

  // it('does not accept POST requests to /api/followsUpvotes/upvote if the user has already upvoted the project', function (done) {
  //   request(app)
  //     .post('/api/followsUpvotes/upvote')
  //     .send({
  //       project_id: 1,
  //       user_id: 1,
  //       type: 'upvote'
  //     })
  //     .expect(201)
  //     .then(() => {
  //       return request(app)
  //       .post('/api/followsUpvotes/upvote')
  //       .send({
  //         project_id: 1,
  //         user_id: 1,
  //         type: 'upvote'
  //       })
  //       .expect(500)    
  //     })
    
  //     .end(done);
  // });  

  // it('accepts POST requests to /api/followsUpvotes/follow', function (done) {
  //   request(app)
  //     .post('/api/followsUpvotes/follow')
  //     .send({
  //       project_id: 1,
  //       user_id: 1,
  //       type: 'follow'
  //     })
  //     .expect(res => {
  //       res.body = {
  //         project_id: res.body.projectId,
  //         user_id: res.body.userId,
  //         type: 'follow'
  //       };
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('accepts PUT requests to /api/followsUpvotes/upvote', function (done) {
  //   request(app)
  //     .put('/api/followsUpvotes/upvote')
  //     .send({
  //       project_id: 1
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('accepts PUT requests to /api/followsUpvotes/undoUpvote', function (done) {
  //   request(app)
  //     .put('/api/followsUpvotes/undoUpvote')
  //     .send({
  //       project_id: 1
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('accepts DELETE requests to /api/followsUpvotes/undoUpvote', function (done) {
  //   request(app)
  //     .delete('/api/followsUpvotes/undoUpvote')
  //     .send({
  //       project_id: 1,
  //       user_id: 2,
  //       type: 'upvote'
  //     })
  //     .expect(200)
  //     .end(done);
  // });

  // it('accepts GET requests to /api/followsUpvotes/getUserFollowsUpvotes', function (done) {
  //   request(app)
  //     .get('/api/followsUpvotes/getUserFollowsUpvotes')
  //     .send({
  //       user_id: 1
  //     })
  //     .expect(200)
  //     .end(done);
  // });

});
