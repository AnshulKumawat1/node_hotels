const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db=mongoose.connect('mongodb://localhost:27017/hotels')
  .then(() => console.log("mongoconnected"))
  .catch((err) => console.log("mongoerror", err));

  module.exports=db;