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

let celebArr = [
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

let moviesArr = [
  {
    title: 'American Beauty Star',
    genre: 'Reality show',
    plot:
      'Twelve contestants who belong to different aspects of the fashion industry compete in a series of tasks hoping to outdo one another.'
  },
  {
    title: 'Finding Nemo',
    genre: 'Adventure',
    plot:
      'After his son gets abducted in the Great Barrier Reef and is despatched to Sydney, a meek clownfish embarks on a journey to bring him home.'
  },
  {
    title: `Inside Bill's Brain`,
    genre: 'Documentary',
    plot:
      'This three-part docuseries explores the mind and motivations of the celebrated tech visionary, business leader and philanthropist.'
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
    // return Celebrity.insertMany(celebArr);
    return Movie.insertMany(moviesArr);
  })
  .then(() => {
    // console.log("Celebrity model created");
    console.log('Movie model created');
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
