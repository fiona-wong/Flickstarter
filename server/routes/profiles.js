'use strict';
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profiles');

// router.route('/')
//   .get(ProfileController.getAll);
//   // .post(ProfileController.create)
//
//

router.get(':id/u', ProfileController.getOne);
//   .put(ProfileController.update);
//   // .delete(ProfileController.deleteOne)
router.get('/u', ProfileController.getOwn);

module.exports = router;
