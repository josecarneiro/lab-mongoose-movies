const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  plot: {
    type: String
  }
});

const Movie = mongoose.model('Movie', movie);
module.exports = Movie;
