const mongoose = require('mongoose');

const setupDB = () => {
  mongoose
    .connect('mongodb+srv://Balu:7E8LK8P99Lp4P0Gg@cluster0.hagxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    //.connect('mongodb://localhost:27017/ticket-master')
    .then(() => {
      console.log('connected to db');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = setupDB;

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// const CONNECTION_URI =
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/ticket-master';
// mongoose
//   .connect(CONNECTION_URI, { useNewUrlParser: true })
//   .then(() => {
//     console.log('succesfully connected to db');
//   })
//   .catch(() => {
//     console.log('error connecting to db');
//   });

// module.exports = mongoose;
