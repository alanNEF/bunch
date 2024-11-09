const mongoose = require('mongoose');

const userReferenceSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  //Passcode is stored as a hash in database. 
  //The client side will convert it to a hash
  passcode: { type: String, required: true},
});

const User = mongoose.model('User', userReferenceSchema);

module.exports = User;