const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/celebDb'; // this will be the name of the database

let mainMovies = require('./../models/movies');

let arrOfMovies = [
  {
    name: 'The attack of the deadly octopussy',
    genre: 'Thriller, Horror, Erotic',
    plot: 'the octopussy attack and there aint enough dick'
  },
  {
    name: '007 and the brown eye',
    genre: 'Also porn',
    plot: 'oh yeah oh yeah o yeah'
  },
  {
    name: 'sharknado 19',
    genre: 'Sailor porn, thriller, action',
    plot: 'Choo Choo Chooooo'
  }
];

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongoose');
    return mainMovies.create(arrOfMovies);
  })
  .then(data => {
    console.log(`some movies were aadded and these are them : ${data}`);
  })
  .catch(err => {
    console.log(`there was an error: ${err}`);
  });
