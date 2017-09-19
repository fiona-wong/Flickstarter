'use strict';
const express = require('express');
const router = express.Router();
const MessageController = require('../controllers').Messages;

// router.route('/saveMessage')
//   .post(MessageController.save);
//
// router.route('/messages')
//   .get(MessageController.get)
//   .post(MessageController.view);

router.route('/send')
  .post(MessageController.save);

router.route('/inbox')
  .get(MessageController.getMessages);

router.route('/get')
  .post(MessageController.getMessagesFromOne);

module.exports = router;
