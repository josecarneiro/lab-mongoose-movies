const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Celeb = require('./../models/celebrity');
const Movie = require('./../models/movies');
const hbs = require('hbs');
hbs.registerPartials(__dirname + './../views/partials');
// Handle GET request for website root

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celeb.find()
    .then(data => {
      console.log(`this is the data for celebs ${data}`);
      res.render('celebrities/index', { data });
    })
    .catch(err => {
      console.log(`theres been an error ${err}`);
      next();
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  let postId = req.params.id;
  Celeb.findById(postId)
    .then(data => res.render(`celebrities/edit`, { data }))
    .catch(err => {
      console.log(`theres been an error getting to the right page : ${err}`);
    });
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  let postId = req.params.id;
  Celeb.findByIdAndUpdate(postId, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(data => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(`theres been an error updating : ${err}`);
    });
});

router.post('/celebrities/create', (req, res, next) => {
  Celeb.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(data => {
      console.log(`maybe it was created: ${data}`);
      res.redirect('/');
    })
    .catch(err => {
      console.log(`theres been an error as - ${err}`);
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  let celebId = req.params.id;
  Celeb.findByIdAndDelete(celebId)
    .then(data => {
      console.log(`this was deleted: ${data}`);
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(`theres been an error deleting - ${err}`);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  let celebId = req.params.id;
  Celeb.findById(celebId)
    .then(data => {
      console.log(`loaded celeb by id and this is the data: ${data}`);
      res.render('celebrities/celebDeets', { data });
    })
    .catch(err => {
      console.log(`theres been an error ${err}`);
      next();
    });
});

// MOVIES FROM HERE

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(data => {
      console.log(`this is the data for movies  ${data}`);
      res.render('movies/index', { data });
    })
    .catch(err => {
      console.log(`theres been an error ${err}`);
      next();
    });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/movies/:id/edit', (req, res, next) => {
  let postId = req.params.id;
  Movie.findById(postId)
    .then(data => res.render(`movies/edit`, { data }))
    .catch(err => {
      console.log(`theres been an error getting to the right page : ${err}`);
    });
});

router.post('/movies/:id/edit', (req, res, next) => {
  let postId = req.params.id;
  Movie.findByIdAndUpdate(postId, {
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(data => {
      res.redirect('/movies');
    })
    .catch(err => {
      console.log(`theres been an error updating : ${err}`);
    });
});

router.post('/movies/create', (req, res, next) => {
  Movie.create({
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(data => {
      console.log(`maybe it was created: ${data}`);
      res.redirect('/');
    })
    .catch(err => {
      console.log(`theres been an error as - ${err}`);
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findByIdAndDelete(movieId)
    .then(data => {
      console.log(`this was deleted: ${data}`);
      res.redirect('/movies');
    })
    .catch(err => {
      console.log(`theres been an error deleting - ${err}`);
    });
});

router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
    .then(data => {
      console.log(`loaded Movie by id and this is the data: ${data}`);
      res.render('movies/movieDeets', { data });
    })
    .catch(err => {
      console.log(`theres been an error ${err}`);
      next();
    });
});

module.exports = router;
