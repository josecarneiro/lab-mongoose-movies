// You'll use this script to add some initial data to your database
// Remember, before performing any operations you need to connect to the database,
// and disconnect when you're done

// You should be running this script once with `node seed.js` to add the records you need to the database,
// not continuously, as we'll do with our express server

const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const Celebrity = require('./models/celebrity');

const celebs = [
  {
    name: 'Jessica Alba',
    occupation: 'Actress',
    catchPhrase: 'Hi! Im a Jessica Alba and I am amazing'
  },
  {
    name: 'Cristiano Ronaldo',
    occupation: 'Football Player',
    catchPhrase: 'Penso quuueeeeee, sou O Melhor xugador du Muundee'
  },
  {
    name: 'Barack Obama',
    occupation: 'Politician',
    catchPhrase: 'Yes, Filipe, You can!'
  }
];

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    return Celebrity.insertMany(celebs);
  })
  .then(test => {
    console.log(test);
    mongoose.disconnect();
  })
  .catch(error => {
    console.log(error);
  });
