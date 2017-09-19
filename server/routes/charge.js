'use strict';
const express = require('express');
const router = express.Router();
const charge = require('../controllers/charge.js');

router.route('/')
  .get((req, res) => {
    return res.status(200).send('GET not configured');
  })
  .post(charge.process);

module.exports = router;
