const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
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

//PATCH 'hosting' when user creates a new event 
router.patch('/addHosting', async (req, res) => {
    const { userId, eventId } = req.body;

    if (!userId || !eventId) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.hosting.push(eventId);
        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update hosting events' });
    }
});

//GET user by ID
router.get('/byID/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
});

//POST 'passcode' to get hash and compare to password entry for login
router.post('/passcode', async (req, res) => {
    const { email, passcode } = req.body;

    if (!email || !passcode) {
        return res.status(400).json({ error: 'Email and passcode are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(passcode, user.passcode);
        if (isMatch) {
            res.status(200).json({ message: 'Passcode matches', userId: user._id });
        } else {
            res.status(400).json({ error: 'Invalid passcode' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to compare passcode' });
    }
});

//PATCH 'following' when following someone
router.patch('/follow', async (req, res) => {
    const { userId, followId } = req.body;

    if (!userId || !followId) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (!user.following.includes(followId)) {
            user.following.push(followId);
            const updatedUser = await user.save();
            res.status(200).json(updatedUser);
        } else {
            res.status(200).json(user); // Return the user object without error if already following
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to follow user' });
    }
});

//PATCH 'following' when unfollowing someone
router.patch('/unfollow', async (req, res) => {
    const { userId, unfollowId } = req.body;

    if (!userId || !unfollowId) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const index = user.following.indexOf(unfollowId);
        if (index > -1) {
            user.following.splice(index, 1);
            const updatedUser = await user.save();
            res.status(200).json(updatedUser);
        } else {
            res.status(200).json(user); // Return the user object without error if not following
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to unfollow user' });
    }
});

//PATCH update user by ID
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, passcode } = req.body;

    if (!firstName && !lastName && !email && !passcode) {
        return res.status(400).json({ error: 'No fields to update' });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (email) user.email = email;
        if (passcode) user.passcode = passcode;

        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

//DELETE user by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

module.exports = router;