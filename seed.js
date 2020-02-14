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

let arr = [
  {
    name: 'Ashley Graham',
    occupation: 'model',
    catchPhrase: 'Love yourself'
  },
  {
    name: 'Ellen DeGeneres',
    occupation: 'comedian and show host',
    catchPhrase: 'Be kind to one another'
  },
  {
    name: 'Melinda Gates',
    occupation: 'philanthropist',
    catchPhrase: `Let's change the world`
  }
];

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .then(() => {
    return Celebrity.insertMany(arr);
  })
  .then(() => {
    console.log("Celebrity model's created");
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('Disconnected to MongoDB');
  })
  .catch(error => {
    console.log(error);
  });
