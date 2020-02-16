const express = require('express');
const router = express.Router();

const Movies = require('./../models/movie');

router.get('/', (req, res, next) => {
  Movies.find()
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(() => {
      next();
    });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Movies.findByIdAndDelete(id)
    .then(() => {
      res.redirect(`/movies`);
      console.log('movie deleted');
    })
    .catch(() => {
      next();
    });
});

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;

  Movies.findById(id)
    .then(movie => {
      res.render('movies/edit', { movie });
    })
    .catch(() => {
      next();
    });
});

router.post('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const data = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movies.findByIdAndUpdate(id, data)
    .then(() => {
      res.redirect(`/movies`);
      console.log('movie updated');
    })
    .catch(() => {
      next();
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

  Movies.create(data)
    .then(movie => {
      const id = movie._id;
      res.redirect(`/movies`);
      console.log('creating movie');
    })
    .catch(() => {
      res.render('movie/create');
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  Movies.findById(id)
    .then(movie => {
      res.render('movies/single', { movie });
    })
    .catch(() => {
      next();
    });
});

module.exports = router;
