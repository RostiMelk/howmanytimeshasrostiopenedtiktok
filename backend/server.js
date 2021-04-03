const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({ path: '../.env' });

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const countRouter = require('./routes/count');

app.use('/count', countRouter);

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Ready to count on port: ${port}`);
})