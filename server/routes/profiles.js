'use strict';
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profiles');

// router.route('/')
//   .get(ProfileController.getAll);
//   // .post(ProfileController.create)
//
//

router.get('/:id', ProfileController.getOne);
//   .put(ProfileController.update);
//   // .delete(ProfileController.deleteOne)
router.get('/', ProfileController.getOwn);

module.exports = router;
