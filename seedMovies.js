
const dotenv = require('dotenv');

dotenv.config();



const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

//Import Schema Models
const Movies = require('./models/movie');


let initMovie = [
    {title: "Rambo",
     genre: "Action",
     plot: "A guy in vietnam"
     },
     {title: "Die Hard",
     genre: "Action",
     plot: "A guy in a Building"
     },
     {title: "Terminator",
     genre: "Action",
     plot: "A guy from the future"
     },
    
 ];

mongoose
  .connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecting to MongoDB');
    console.log(initMovie)
    return Movies.insertMany(initMovie);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('Disconnecte to MongoDB');
  })
  .catch(error => {
    console.log(error);
  });