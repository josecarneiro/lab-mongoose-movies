
const dotenv = require('dotenv');

dotenv.config();



const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

//Import Schema Models
const Celebrities = require('./models/celebrity');


let initCeleb = [
    {name: "Sylvester Stallone",
     occupation: "Actor",
     catchPhrase: "Adrian!!!!"
     },
     {name: "Bruce Willis",
     occupation: "Actor",
     catchPhrase: "Yippee-Ki-Yay, mothertrucker!"
     },
     {name: "arnold schwarzenegger",
     occupation: "Actor",
     catchPhrase: "Hasta la vista baby!"
     }
 ];

mongoose
  .connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecting to MongoDB');
    console.log(initCeleb)
    return Celebrities.insertMany(initCeleb);
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