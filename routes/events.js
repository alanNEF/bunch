const express = require('express');
const Event = require('../model/event');
const router = express.Router();

//POST new event
router.post

//GET to get single event
router.get('/:id', async (req, res) => {
    try {
        res.json(req.params.id);
     } catch (err){
        res.status(500).json({ message: err.message })
     }
})

//GET to get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find()
        res.json(subscribers);
     } catch (err){
        res.status(500).json({ message: err.message })
     }
})

//PATCH when user adds themselves to event-only attendees affected

//PATCH when user removes themselves from event-only attendees affected

//PUT when editing events-replaces all resources with new copy

//DELETE event



module.exports = router;