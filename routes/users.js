const express = require('express');
const User = require('../models/user');
const router = express.Router();

//POST new user
router.post('/postUser', async (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, passcode } = req.body;

    if (!firstName || !lastName || !email || !passcode) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const newUser = new User({
            firstName,
            lastName,
            email,
            passcode
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

//PATCH 'attending' when user adds themselves as event attendee

//PATCH 'hosting' when user creates a new event

//GET 'username' to display username on profile

//GET 'passcode' to get hash and compare to password entry for login

//PATCH 'following' when following someone

//PATCH 'following' when unfollowing someone

//UPDATE user information??? unnecessary

//DELETE user?
module.exports = router;