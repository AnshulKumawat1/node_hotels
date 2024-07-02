const mongoose = require('mongoose');
const express = require('express');
const app = express();
require("dotenv").config();
const mongoURL=process.env.MONGODB_URL;
// const db=mongoose.connect('mongodb://localhost:27017/hotels')
//   .then(() => console.log("mongoconnected"))
//   .catch((err) => console.log("mongoerror", err));
  const db=mongoose.connect(mongoURL)
  .then(() => console.log("mongoconnected"))
  .catch((err) => console.log("mongoerror", err));

  module.exports=db;