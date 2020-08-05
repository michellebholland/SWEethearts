const MessageRoom = require('../Models/chatModel.js')

const chatController = {};

chatController.getMessageRooms = (req, res, next) => {
  console.log(req.params)
  const { username } = req.params;
  // find all message rooms for current user
  MessageRoom.find({users: username}, (err, found) => {
    // const { users, _id } = found;
    if (err) return next({log: 'Error finding message rooms in DB'});
    res.locals.messageRooms = found.map(({users, _id}) => ({users, _id}))
    return next();
  })
};

module.exports = chatController;