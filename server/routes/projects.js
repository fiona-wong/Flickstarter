'use strict';
const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers').Projects;

router.route('/')
  .get(ProjectController.getAll);

router.route('/:id')
  .get(ProjectController.getOne);

router.route('/new')
  .post(ProjectController.create);

router.route('/update/:id')
  .put(ProjectController.update);

router.route('/delete/:id')
  .delete(ProjectController.deleteOne);

module.exports = router;
