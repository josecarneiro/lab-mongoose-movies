// You'll use this script to add some initial data to your database
// Remember, before performing any operations you need to connect to the database,
// and disconnect when you're done

// You should be running this script once with `node seed.js` to add the records you need to the database,
// not continuously, as we'll do with our express server
const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const Celebrity = require('./models/celebrity');

var data = [
  { name: 'Joao', occupation: 'Director', catchPhrase: 'You are the Weakest Link! Goodbye!' },
  { name: 'Pedro', occupation: 'Pilot', catchPhrase: 'I dont believe it!' },
  { name: 'Stephanie', occupation: 'Artist', catchPhrase: 'Cheap as chips' }
];

mongoose
  .connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecting with MongoDB');
    return Celebrity.create(data);
  })
  .then(() => {
    console.log('List created');
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('Disconnecte MongoDB');
  })
  .catch(error => {
    console.log(error);
  });
