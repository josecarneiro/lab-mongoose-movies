const express = require('express');
const router = new express.Router();
const Movie = require("../models/movie");


router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies/index", { movies });
    })
    .catch(error => {
      next(error);
      res.render("index");
    });
});
router.get('/new', (req, res, next) => {
  res.render('movies/new')
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
      res.render('movies/details', { movie });
    })
    .catch(error => {
      next(error);
    });
});


router.post('/:id/delete', (req, res, next) => {  
  Movie.findByIdAndDelete(req.params.id)
  .then(()=> {
    res.redirect('/movies')
  })
  .catch(error => {
    console.log('Error deleting Movie', error)
    .next();  
  })
})

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie=> {
  res.render('movies/edit', {movie})
  })
  .catch(error => {
    console.log('Error Movie', error)
    .next();  
  })
});

router.post("/:id", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log("Error trying to edit movie", error);
    });
});






router.post('/', (req, res, next) => {
  
  let newMovie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  });
  newMovie
  .save()
  .then(() => {
    res.redirect(`movies/`)
    
  })
  .catch(error => {
    console.log('Error creating new movie', error)
    res.render('movies/new');
  })
});





module.exports = router;