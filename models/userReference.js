const mongoose = require('mongoose');

const userReferenceSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  passcode: String,
});

const Item = mongoose.model('Item', userReferenceSchema);

module.exports = Item;