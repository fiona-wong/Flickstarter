'use strict';
const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers').Projects;

router.route('/newProject')
  .post(ProjectController.create);


router.route('/save')
  .post(ProjectController.update);

router.route('/upvote')
  .post(ProjectController.upvote);

router.route('/view')
  .get(ProjectController.getOne);

router.route('/delete')
  .delete(ProjectController.deleteOne);

module.exports = router;
