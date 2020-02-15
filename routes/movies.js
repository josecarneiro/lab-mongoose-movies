const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
//router.use(express.urlencoded());

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      res.render('./movies/index', { allMovies });
      console.log(allMovies);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/create', (req, res) => {
  res.render('./movies/create');
});

// path for the post method of CREATE
router.post('/', (req, res, next) => {
  const userInput = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  console.log(req.body.title);
  Movie.create(userInput)
    .then(() => {
      res.redirect(`/movies`);
    })
    .catch(() => {
      res.render('./movies/create');
    });
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(thisMovie => {
      if (!thisMovie) {
        next();
      } else {
        res.render('./movies/show', { thisMovie });
      }
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(thisMovie => {
      if (!thisMovie) {
        next();
      } else {
        res.render('./movies/edit', { thisMovie });
      }
    })
    .catch(error => {
      next(error);
    });
});

// path for the post method of EDIT
router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  const userInput = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movie.findByIdAndUpdate(id, userInput)
    .then(thisMovie => {
      console.log(thisMovie + ' was edited');
      res.redirect(`/movies`);
    })
    .catch(error => {
      next(error);
    });
});

// path for the post method of DELETE
router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('The celeb was deleted');
      res.redirect(`/movies`);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
