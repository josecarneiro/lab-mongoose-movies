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

const celebrityData = [
  {
    name: 'Manuel Rocha',
    occupation: 'Ironhack Bootcamp',
    catchPhrase: 'Snow, sea and bikes'
  },
  {
    name: 'Tom Cruise',
    occupation: 'aging',
    catchPhrase: "You see the dilemma don't you"
  },
  {
    name: 'Lana del Rey',
    occupation: 'Singer',
    catchPhrase: "I pretend I'm not hurt, I walk about the world like I'm having fun."
  }
];

const Movie = require('./models/movie.js');

const movieData = [
  {
    title: 'Fight Club',
    genre: 'Drama',
    plot:
      'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.'
  },
  {
    title: 'Shutter Island',
    genre: 'Mystery',
    plot:
      'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.'
  },
  {
    title: 'Top Gun',
    genre: 'Action',
    plot:
      'The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills.'
  }
];

mongoose
  .connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecting to MongoDB');
    return Celebrity.insertMany(celebrityData);
  })
  .then(() => {
    return Movie.insertMany(movieData);
  })
  .then(() => {
    console.log('Connecting to MongoDB');
    return Celebrity.insertMany(celebrityData);
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
