const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    location: {
        type: String, 
        required: false
    },
    spotsAvailable: {
        type: Number,
        required: true
    },
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    image: {
        url: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            required: false
        }
    },
    description: {
        type: String,
        required: true
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: [{
        type: Number,
        required: true
    }]
});



const Event = mongoose.model('Event', eventSchema);

module.exports = Event;