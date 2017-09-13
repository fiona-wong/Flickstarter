'use strict';
const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers').Projects;
const middleware = require('../middleware');

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

module.exports = router;
