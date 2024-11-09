const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userReferenceSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  //Passcode is stored as a hash in database. 
  //The client side will convert it to a hash
  passcode: { type: String, required: true},
});

//Presaving hashing function
userReferenceSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.passcode = await bcrypt.hash(this.passcode, salt);
    next();
  } catch (error) {
    next(error);
  }
});


const User = mongoose.model('User', userReferenceSchema);

module.exports = User;