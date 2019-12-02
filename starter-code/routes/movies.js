const express = require('express');
const router = new express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    //console.log(movies)
    res.render('./movies/index', {movies});
  })
  .catch(err => {
    console.log('Unable to display all movies', err);
    next();
  });
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    //console.log(movie)
    res.render('./movies/about', {movie});
  })
  .catch(err => {
    console.log(`Unable to display the movie you're looking for`, err);
    next();
  });
});

router.get('/new', (req, res, next) => {
  res.render('./movies/new')
});

router.post('/', (req, res, next) => {
  new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
  .save()
  .then(() => {
    res.redirect('./movies');
  })
  .catch(err => {
    console.log('Error creating new movie', err);
    res.render('./movies/new')
  })
});

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/movies');
  })
  .catch(error => {
    console.log('Unable to delete movie', error);
    next();
  })
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((data) => {
    const movie = data;
    res.render('movies/edit', {movie});
  })
  .catch(err => {
    console.log('Unable to edit movie', err);
    next();
  });
});

router.post('/:id', (req, res, next) => { 
  Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
  .then(() => {
    res.redirect('/movies');
  })
  .catch(err => {
    console.log('Unable to edit this movie', err);
    next();
  })
});

module.exports = router;