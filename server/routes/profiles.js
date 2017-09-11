'use strict';
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profiles');

// router.route('/')
//   .get(ProfileController.getAll);
//   // .post(ProfileController.create)
//
//
// router.route('/:id')
//   .get(ProfileController.getOne)
//   .put(ProfileController.update);
//   // .delete(ProfileController.deleteOne)
router.get('/myprofile', ProfileController.getOwn);
router.get('/youtube', ProfileController.getYoutube);

module.exports = router;
