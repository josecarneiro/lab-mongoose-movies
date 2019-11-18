const express = require('express')
const router = new express.Router()
// const mongoose = require('mongoose')
// const hsb = require ('hsb')
const Movies = require('./../models/movies');


router.get('/', (req,res,next) =>{
    Movies.find()
    .then((movies) =>{
        res.render('./movies/index',{movies})
    })
    .catch(error => {
        next(error);
    });
})

router.get('/create', (req,res,next) =>{
    res.render('./movies/create')
})

router.post('/create',(req,res,next) =>{
    // console.log('Aca llego eh!')
    Movies.create({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    })
    .then((movie) =>{
        console.log(movie)
        res.redirect('/movies')
    })
    .catch((error) =>{
        next(error);
    })
})

router.post('/delete/:id', (req,res,next) =>{
    const movieId = req.params.id
    Movies.findByIdAndDelete(movieId)
    .then((movie) =>{
        console.log('Movie has been deleted');
        console.log(movie);
        res.redirect('/movies')
    })
    .catch((error) =>{
        next(error);
    })
})

router.get('/edit/:id', (req,res,next) =>{
    const movieId = req.params.id
    // console.log('Aca estoy!')
    Movies.findById(movieId)
    .then((movie) =>{
        res.render('./movies/edit', {movie})
    })
    .catch((error) =>{
        next(error)
    })
})

router.post('/edit/:id', (req,res,next) =>{
    const movieId = req.params.id
    Movies.findByIdAndUpdate((movieId),{
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    })
    .then((movie) =>{
        console.log(movie)
        res.redirect(`/movies/${movieId}`)
    })
    .catch((error) =>{
        next(error)
    })
})



router.get('/:id', (req,res,next) =>{
    const movieId = req.params.id
    Movies.findById(movieId)
    .then((movie) =>{
        console.log(movie)
        res.render('./movies/show', {movie})
    })
    .catch((error)=>{
        next(error)
    })
})

module.exports = router;