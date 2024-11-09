const express = require('express');
const Event = require('../models/event');
const router = express.Router();

//POST new event
router.post('/postEvent', async (req, res) => {
    console.log(req.body);
    const { title, startTime, endTime, location, spotsAvailable, attendees, image, description, host, tags } = req.body;

    if (!title || !startTime || !endTime || !spotsAvailable || !description || !image || !image.url || !tags) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const newEvent = new Event({
            title,
            startTime,
            endTime,
            location,
            spotsAvailable,
            attendees,
            image,
            description,
            host,
            tags
        });

        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create event' });
    }
});

//GET to get single event

//GET to get all events

//PATCH when user adds themselves to event-only attendees affected

//PATCH when user removes themselves from event-only attendees affected

//PUT when editing events-replaces all resources with new copy

//DELETE event



module.exports = router;