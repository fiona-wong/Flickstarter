'use strict';
const express = require('express');
const router = express.Router();
const YoutubeController = require('../controllers').Youtubes;

router.route('/addVideo')
  .post(YoutubeController.addVideo);

router.route('/removeVideo')
  .delete(YoutubeController.removeVideo);

router.route('/getUserVideos')
  .get(YoutubeController.getUserVideos);

module.exports = router;
