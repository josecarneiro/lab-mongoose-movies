const express = require('express');
const router = express.Router();
const Movie = require('./../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('./movies/index', { movies });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/create', (req, res, next) => {
  res.render('movies/create');
});

router.post('/create', (req, res, next) => {
  const data = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movie.create(data)
    .then(movie => {
      const id = movie._id;
      res.redirect('/');
    })
    .catch(error => {
      res.render('movies/create');
    });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Movie.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;

  Movie.findById(id)
    .then(movie => {
      res.render('movies/edit', { movie });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const data = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movie.findByIdAndUpdate(id, data)
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then(movie => {
      res.render('movies/show', { movie });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
