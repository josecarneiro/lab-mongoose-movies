const express = require('express');
const router = express.Router();
const Celebrity = require('./../models/celebrity');
const Movie = require('./../models/movie');

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

//Celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.get('/celebrities/create', (req, res, next) => {
  return res.render('celebrities/create');
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      return res.render('celebrities/edit', celebrity);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      return res.render('celebrities/show', celebrity);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});
//Movies
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.get('/movies/create', (req, res, next) => {
  return res.render('movies/create');
});

router.get('/movies/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then(movie => {
      return res.render('movies/edit', movie);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.get('/movies/:id', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then(movie => {
      return res.render('movies/show', movie);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

// Handle POST request for website root
//celebrities
router.post('/celebrities/create', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrityCreated => res.render('celebrities/show', celebrityCreated))
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => Celebrity.find())
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase }, { runValidators: true })
    .then(celebrity => {
      Celebrity.findById(celebrity._id).then(celebrity =>
        res.render('celebrities/show', celebrity)
      );
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

//POST requests for Movies
router.post('/movies/create', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(movieCreated => res.render('movies/show', movieCreated))
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => Movie.find())
    .then(movies => res.render('movies/index', { movies }))
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.post('/movies/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(id, { title, genre, plot }, { runValidators: true })
    .then(movie => {
      Movie.findById(movie._id).then(movie => res.render('movies/show', movie));
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
