const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pcRouter = require('./pc/pcRouter');

const app = express();

app.use(bodyParser.json());
app.use('/api/pc', pcRouter);

const port = 8080;

mongoose.connect('mongodb://localhost:27017/pc-store', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log("Server is up on port " + port))
  })
  .catch(err => console.log("Failed to connect", err));