
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person = require('./models/person');
const MenuItem = require('./models/MenuItem');
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const mongodbURL = process.env.MONGODB_URL;
const passport = require('./auth');

const db = require('./db');
// mongoose.connect('mongodb://localhost:27017/hotels')
//   .then(() => console.log("mongoconnected"))
//   .catch((err) => console.log("mongoerror", err));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(passport.initialize()); // Initialize passport
const localAuthmiddleware = passport.authenticate('local', { session: false });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

const menuRoutes = require('./routes/menuRoutes');
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(PORT, () => {
  console.log("working server");
});
