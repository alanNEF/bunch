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
router.get('/byID/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            res.status(404).send({ message: 'Event not found with id ' + req.params.id })
        }
        res.send(event);
    } catch (err){
        console.log(err)
        res.status(500).send({ message: "Server error: can't get all events" })
    }
});

//GET to get all events by upcoming
router.get('/upcoming', async (req, res) => {
    try {
        const events = await Event.find().sort({ startTime: 1 });
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
router.patch('/addAttendee', async (req, res) => {
    const { user_id, event_id } = req.body;

    if (!user_id || !event_id) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const event = await Event.findById(event_id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        if (!event.attendees.includes(user_id)) {
            event.attendees.push(user_id);
            await event.save();
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add attendee' });
    }
});

//PATCH when user removes themselves from event-only attendees affected
router.patch('/removeAttendee', async (req, res) => {
    const { user_id, event_id } = req.body;

    if (!user_id || !event_id) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const event = await Event.findById(event_id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        const index = event.attendees.indexOf(user_id);
        if (index > -1) {
            event.attendees.splice(index, 1);
            await event.save();
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove attendee' });
    }
});

//PUT when editing events-replaces all resources with new copy
router.put('/update/:id', async (req, res) => {
    const { title, startTime, endTime, location, spotsAvailable, attendees, image, description, host, tags } = req.body;

    if (!title || !startTime || !endTime || !spotsAvailable || !description || !image || !image.url || !tags) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            {
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
            },
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update event' });
    }
});

//DELETE event
router.delete('/delete/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete event' });
    }
});



module.exports = router;