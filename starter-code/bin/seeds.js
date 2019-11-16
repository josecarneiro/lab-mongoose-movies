const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');
const Movie = require('../models/Movie');
const MONGODB_URI = 'mongodb://localhost/starter-code';

/* const vgHeroes = [
  {
    name: 'Super Mario',
    occupation: 'Saviour of Mushroom Kingdom',
    catchPhrase: `It's a-me Mario`
  },
  {
    name: 'Sonic',
    occupation: 'Hero',
    catchPhrase: 'Gotta go fast'
  },
  {
    name: 'Pikatchu',
    occupation: 'Electrifier',
    catchPhrase: 'Pika'
  },
]; */

const movies = [
  {
    title: 'Super Mario Bros.',
    genre: 'Adventure',
    plot: 'Two Brooklyn plumbers, Mario and Luigi, must travel to another dimension to rescue a princess from the evil dictator King Koopa and stop him from taking over the world.'
  },
  {
    title: 'Sonic the Hedgehog',
    genre: 'Action',
    plot: 'A cop in the rural town of Green Hills will help Sonic escape from the government who is looking to capture him.'
  },
  {
    title: 'Pokémon Detective Pikachu',
    genre: 'Comedy',
    plot: 'In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.'
  }
];

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to Mongo!');
    Movie.create(  
      movies
    )
  })
  .then(() => {
    console.log('array inserted')
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });