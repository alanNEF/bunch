const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  location: String,
  spotsAvailable: Number,
  spotsFilled: Number,
  tags : [Number],
  host: userReference,
});

const Item = mongoose.model('Item', eventSchema);

module.exports = Item;