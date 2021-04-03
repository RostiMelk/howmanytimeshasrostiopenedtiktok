const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({path: __dirname + '/../.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const countRouter = require('./routes/count');

app.use('/count', countRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

    // Set static folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
}

app.listen(port, () => {
    console.log(`Ready to count on port: ${port}`);
})