const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {type: String},
  date: {type : Date, default: Date.now },
  location: {type: String, required: false},
  spotsAvailable: {type: Number, min: 1},
  spotsFilled: {type: Number, max: spotsAvailable},

  tags : {type: [Number],
    validate: {
      validator: function (v) {
        return v.length <= 7;  // Custom validation to ensure the array length is 7 or less
      },
      message: 'You can only have a maximum of 7 tags.'
    }
  },

  host: userReference,
});



const Event = mongoose.model('Event', eventSchema);

module.exports = Event;