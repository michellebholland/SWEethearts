const MessageRoom = require('./Models/chatModel.js');

MessageRoom.create(
  {
    users: ['erin', 'michelle'],
    messages: [
      {
        sender: 'michelle',
        text: 'hi',
      },
      {
        sender: 'erin',
        text: 'hey',
      },
    ],
  },
  (err, data) => {
    if (err) {
      console.log('Invalid messageRoom creation');
    }
  },
);

MessageRoom.create(
  {
    users: ['amanda', 'michelle'],
    messages: [
      {
        sender: 'michelle',
        text: 'yo',
      },
      {
        sender: 'amanda',
        text: 'what is UP',
      },
    ],
  },
  (err, data) => {
    if (err) {
      console.log('Invalid messageRoom creation');
    }
  },
);
