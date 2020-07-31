const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'chat',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log('MONGOOSE failed to connect', err));

const { Schema } = mongoose;

// define message room schema
const messageRoomSchema = new Schema({
  users: [{ type: String, required: true }],
  // messages: ? separate schema to store each message object? 
  messages: [{
    sender: {type: String, required: true},
    text: { 
      type: String,
      max: 2000
    },
  }]
});

const MessageRoom = mongoose.model('messageRoom', messageRoomSchema);

module.exports = MessageRoom;
