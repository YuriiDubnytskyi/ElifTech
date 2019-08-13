// ServerPort.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const ServerPort = new Schema({
  name: String,
  ingredients: String,
  preparation: String,
  author: String
},{
    collection: 'servers'
});

module.exports = mongoose.model('ServerPort', ServerPort);