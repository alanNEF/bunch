require('dotenv').config();

// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

const eventRouter = require('./routes/events');
app.use('/events', eventRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
