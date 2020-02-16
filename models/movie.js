const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
  reviews: [
    {
      user: String,
      comments: String
    }
  ]
});

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;
