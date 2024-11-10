const express = require('express');
const Event = require('../models/event');
const User = require('../models/user');
const router = express.Router();

//POST new event
router.post('/postEvent', async (req, res) => {
    console.log(req.body);
    const { title, startTime, endTime, location, spotsAvailable, attendees, image, description, host, tags } = req.body;

    if (!title || !startTime || !endTime || !spotsAvailable || !description || !image || !image.url || !tags) {
        return res.status(400).json({ 
            error: 'Required fields are missing', 
            body: req.body 
        });
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
    const { userId, eventId } = req.body;

    // Check for missing fields
    if (!userId || !eventId) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        // Find the event by eventId
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        // Add user to event's attendees if not already added
        if (!event.attendees.includes(userId)) {
            event.attendees.push(userId);
            await event.save();
        }

        // Find the user by userId
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Add event to user's attending array if not already added
        if (!user.attending.includes(eventId)) {
            user.attending.push(eventId);
            await user.save();
        }

        res.status(200).json({ event, user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add attendee' });
    }
});

//PATCH when user removes themselves from event-only attendees affected
router.patch('/removeAttendee', async (req, res) => {
    const { userId, eventId } = req.body;

    if (!userId || !eventId) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        const index = event.attendees.indexOf(userId);
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
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        const attendees = event.attendees;
        await User.updateMany(
            { _id: { $in: attendees } },
            { $pull: { attending: req.params.id } }
        );
        await User.findByIdAndUpdate(event.host, { $pull: { hosting: req.params.id } });
        
        await Event.findByIdAndDelete(req.params.id);
        
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete event' });
    }
    // Remove this event id from the attending list of all users who were attendees

    res.status(200).json({ message: 'Event deleted successfully and attendees updated' });
});



module.exports = router;