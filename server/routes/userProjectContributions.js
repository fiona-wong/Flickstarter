'use strict';
const express = require('express');
const router = express.Router();
const UserProjectContributionController = require('../controllers').UserProjectContributions;
const ProfileController = require('../controllers').Profiles;


router.route('/newContribution')
  .post(UserProjectContributionController.newContribution)
  .put(ProfileController.updateTotalContributions);

router.route('/projectContributions')
  .get(UserProjectContributionController.getProjectContributions);

router.route('/userContributions')
  .get(UserProjectContributionController.getUserContributions);

router.route('/userProjectContributions')
  .get(UserProjectContributionController.getUserProjectContributions);

module.exports = router;
