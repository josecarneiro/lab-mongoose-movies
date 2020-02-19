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
router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Movie.findByIdAndDelete(id)
    .then(() => {
      console.log('deleted');
      res.redirect(`/movie`);
    })
    .catch(error => {
      next(error);
    });
});
router.get('/create', (req, res, next) => {
  res.render('movie/create');
});

router.post('/create', (req, res, next) => {
  const data = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movie.create(data)
    .then(() => {
      res.redirect(`/movie`);
    })
    .catch(() => {
      res.render('movie/create');
    });
});

router.get('/:id/edit', (req, res, next) => {
  let _id = req.params.id;
  Movie.findById(_id)
    .then(id => {
      console.log(id);
      res.render('movie/edit', { id });
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
      res.redirect(`/movie`);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then(data => {
      console.log(data);
      res.render('movie/show', { data });
    })
    .catch(error => {
      console.log(error);
      res.send('Error');
    });
});

module.exports = router;
