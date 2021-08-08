const mongoose = require('mongoose');

const setupDB = () => {
  mongoose
    .connect('mongodb+srv://cluster0.hagxy.mongodb.net/myFirstDatabase')
    //.connect('mongodb://localhost:27017/ticket-master')
    .then(() => {
      console.log('connected to db');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = setupDB;
