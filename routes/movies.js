const express = require('express');
const Movie = require('../models/movie');

const router = new express.Router();

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', { movies });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/create', (req, res) => {
  res.render('movies/create');
});

router.post('/create', (req, res) => {
  const data = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movie.create(data)
    .then(movie => {
      movie.save();
      res.redirect('/movies');
    })
    .catch(error => {
      console.log(error);
      res.render('movies/create');
    });
});

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/edit', { movie });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movie.findByIdAndUpdate(id, data, { runValidators: true })
    .then(() => {
      res.redirect('/movies');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', { movie });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
