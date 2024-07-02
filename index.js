
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person=require('./models/person');
const MenuItem=require('./models/MenuItem');
// mongoose.connect('mongodb://localhost:27017/hotels')
//   .then(() => console.log("mongoconnected"))
//   .catch((err) => console.log("mongoerror", err));
const db=require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());




// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});




 
const menuRoutes=require('./routes/menuRoutes');
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(4000, () => {
  console.log("working server");
});
