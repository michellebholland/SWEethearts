const express = require('express');
const router = express.Router();
const chatController = require('../Controllers/chatController.js')

// For a given user, find all chat particpants + ids
// For a given user, find all chat particpants
// router.get('/history/:username', (req, res) => {
//   res.status(200).json(res.locals.messageRooms);
// });

router.get('/:username', chatController.getMessageRooms, (req, res) => {
  res.status(200).json(res.locals.messageRooms);
});

module.exports = router;
