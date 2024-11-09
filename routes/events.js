const express = require('express');
const Event = require('../models/event');
const router = express.Router();

//POST new event


//GET to get single event
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!user) {
            res.status(404).send({ message: 'Event not found with id ' + req.params.id })
        }
        res.send(event);
    } catch (err){
        res.status(500).send({ message: "Server error: can't get all events" })
    }
});

//GET to get all events by most recent
router.get('/recent', async (req, res) => {
    try {
        const events = await Event.find().sort({ startTime: -1 });
        res.send(events);
     } catch (err){
        res.status(500).send({ message: "Server error: can't get all events" })
     }
});

//GET by most recent AND following
router.get('/following', async (req, res) => {
    try {
        const targetUsers  = req.User.following;
        const events = await Event.find({host: { $in: targetUsers}}).sort({ startTime: -1 });
        res.send(events);
     } catch (err){
        res.status(500).send({ message: "Server error: can't get all events" })
     }
});

//GET by recommended (optional)
/*
router.get('/recommended', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
     } catch (err){
        res.status(500).json({ message: "Server error: can't get all events" })
     }
});
*/

//PATCH when user adds themselves to event-only attendees affected

//PATCH when user removes themselves from event-only attendees affected

//PUT when editing events-replaces all resources with new copy

//DELETE event



module.exports = router;