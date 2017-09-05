'use strict';
const express = require('express');
const router = express.Router();
const UserProjectContributionController = require('../controllers').UserProjectContributions;

router.route('/newContribution')
  .post(UserProjectContributionController.newContribution);

router.route('/projectContributions')
  .get(UserProjectContributionController.getProjectContributions);

router.route('/userContributions')
  .get(UserProjectContributionController.getUserContributions);

router.route('/userProjectContributions')
  .get(UserProjectContributionController.getUserProjectContributions);

module.exports = router;
