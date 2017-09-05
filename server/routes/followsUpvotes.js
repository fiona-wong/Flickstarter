'use strict';
const express = require('express');
const router = express.Router();
const FollowsUpvotesController = require('../controllers').FollowsUpvotes;


router.route('/upvote')
  .post(FollowsUpvotesController.upvote);


router.route('/undoUpvote')
  .delete(FollowsUpvotesController.undoUpvote);


router.route('/follow')
  .post(FollowsUpvotesController.follow);


router.route('/unfollow')
  .delete(FollowsUpvotesController.unfollow);


router.route('/getProjectFollowsUpvotes')
  .get(FollowsUpvotesController.getProjectFollowsUpvotes);


router.route('/getUserFollowsUpvotes')
  .get(FollowsUpvotesController.getUserFollowsUpvotes);


router.route('/getProjectFollows')
  .get(FollowsUpvotesController.getProjectFollows);


router.route('/getUserFollows')
  .get(FollowsUpvotesController.getUserFollows);


router.route('/getProjectUpvotes')
  .get(FollowsUpvotesController.getProjectUpvotes);


router.route('/getUserUpvotes')
  .get(FollowsUpvotesController.getUserUpvotes);


module.exports = router;
