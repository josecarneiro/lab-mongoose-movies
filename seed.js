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
const Movie = require('./models/movie');

const data = [
  /*   {
    name: 'Ed North',
    occupation: 'actor',
    catchPhrase: 'If you say so.'
  },
  {
    name: 'Dave Chap',
    occupation: 'comedian',
    catchPhrase: 'WHAT?!'
  },
  {
    name: 'Kung-Fu Kenny',
    occupation: 'singer',
    catchPhrase: 'Be humble.'
  } */
  {
    title: 'The Good, The Bad and the Ironhacker',
    genre: 'Action',
    plot:
      'A group of Ironhack students find themselves in a troublesome situation after a Lab goes wrong'
  },
  {
    title: 'Structural Anomaly',
    genre: 'Sci-fi',
    plot: 'The world suffers a power outage after a meteor falls and brings an unexpected visitor'
  },
  {
    title: 'Turning Turner',
    genre: 'Documentary',
    plot: 'A look at the life of the famous english painter J.W.Turner'
  }
];

mongoose
  .connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecting to MongoDB');
    //return Celebrity.create(data);
    return Movie.create(data);
  })
  .then(() => {
    console.log('List has been created');
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('Disconnected from MongoDB');
  })
  .catch(error => {
    console.log(error);
  });
