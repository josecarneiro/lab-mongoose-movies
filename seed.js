require('dotenv').config();

// const data = require('./data');
const mongoose = require('mongoose');
const Mongodb_URI = process.env.MONGODB_URI;
const Celebrity = require('./models/Celebrity.model');
const Movie = require('./models/Movie.model');

mongoose
  .connect(Mongodb_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to DB');
    const celebData = [
      {
        name: 'Wakko Animaniacs',
        occupation: 'cartoon',
        catchPhrase: 'Hello Nurse!'
      },
      {
        name: 'Johnny Bravo',
        occupation: 'actor',
        catchPhrase: 'Hey, Baby!'
      },
      {
        name: 'Beyoncé',
        occupation: 'singer',
        catchPhrase: 'All the single ladies!'
      }
    ];
    return Celebrity.create(celebData);
  })
  .then(celebrities => {
    console.log('BD populated with success. Here are the celebrities just created: ' + celebrities);
    return Movie.create([
      {
        title: 'Alice in Wonderland',
        genre: 'Fantasy',
        plot: 'Little girl runs after a white rabit'
      },
      {
        title: 'Pirats of Caribbean',
        genre: 'Fiction',
        plot: 'Pirate and his adventures'
      },
      {
        title: 'Elizabeth II',
        genre: 'Documentary',
        plot: 'The queen that ruled the most up until now'
      }
    ]);
  })
  .then(movies => {
    console.log('BD populated with success. Here are the movies just created: ' + movies);
    return mongoose.disconnect();
  })
  .catch(error => {
    console.log(error);
  });

// You'll use this script to add some initial data to your database
// Remember, before performing any operations you need to connect to the database,
// and disconnect when you're done

// You should be running this script once with `node seed.js` to add the records you need to the database,
// not continuously, as we'll do with our express server
