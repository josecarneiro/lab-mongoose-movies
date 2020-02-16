const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movie => {
      res.render('movie', { movie });
    })
    .catch(error => {
      console.log(error);
      res.send('Error');
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then(data => {
      console.log(data);
      res.render('/movie/smovie', { data });
    })
    .catch(error => {
      console.log(error);
      res.send('Error');
    });
});

module.exports = router;
