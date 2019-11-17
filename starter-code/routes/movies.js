const express = require('express');
const router = express.Router();
const Movie = require('./../models/movie');

router.get('/movies', (req, res, next) => {

    Movie.find()
        .then((movies) => {
            res.render('movies', {
                movie: movies,
            });
        })
        .catch((err) => {
            console.log('Couldnt connect to movies database');
            next(err);
        });

});

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
});

router.post('/movies/new', (req, res, next) => {
    Movie.create({
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot
        })
        .then(() => {
            console.log('movie added!')
            res.redirect('/movies')
        })
        .catch((err) => {
            console.log('Not possible to add movie');
            next(err);
        });
});

router.post('/movies/:movie_id/delete', (req, res, next) => {
    const movieId = req.params.movie_id;
    Movie.findByIdAndDelete(movieId)
        .then(() => {
            console.log('The movie was deleted');
            res.redirect('/movies');
        })
        .catch((err) => {
            console.log('Couldnt delete movie');
            next(err);
        });
});

router.get('/movies/:movie_id/edit', (req, res, next) => {
    const movieId = req.params.movie_id;
    Movie.findById(movieId)
        .then((movie) => {
            console.log("Was able to access movie edition");
            res.render('movies/edit', {
                movie
            });
        })
        .catch((err) => {
            console.log('COULDNT ACCESS MOVIE TO EDIT IT');
            next(err);
        });
});

router.post('/movies/:movie_id/edit', (req, res, next) => {
    const movieId = req.params.movie_id;
    Movie.findByIdAndUpdate(movieId, {
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot
        })
        .then(() => {
            console.log('the movie was edited')
            res.redirect('/movies');
        })
        .catch((err) => {
            console.log('It was not possible to edit the movie');
            next(err);
        });
});

router.get('/movies/:movie_id', (req, res, next) => {
    const movieId = req.params.movie_id;
    console.log(movieId);
    Movie.findById(movieId)
        .then((movie) => {
            console.log('Connected to movie details');
            res.render('movies/details', {
                movie: movie,
            });
        })
        .catch((err) => {
            console.log('Couldnt connect the movie details');
            next(err);
        });

});


module.exports = router;