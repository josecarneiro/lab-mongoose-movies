const express = require('express')
const router = new express.Router()

const Movies = require('./../models/movie');


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

router.post('/create', (req,res,next) =>{
    Movies.create({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    })
    .then((newMovie)=>{
        console.log(newMovie);
        res.redirect('/movies')
    })
    .catch((error) =>{
        next(error);
    })
})

router.post('/delete/:id', (req,res,next) =>{
    const delMovie = req.params.id;
    Movies.findByIdAndDelete(delMovie)
    .then((movie) =>{
        console.log(movie);
        res.redirect('/movies')
    })
    .catch(error => {
        next(error);
      })
});


router.get('/:id/edit', (req,res,next) =>{
    const edMovie= req.params.id;
    Movies.findById(edMovie)
    .then((movie) =>{
        console.log(movie)
        res.render('./movies/edit', {movie})
    })
})

router.post('/:id/edit', (req,res,next) =>{
    const edMovie = req.params.id;
    Movies.findByIdAndUpdate(edMovie,{
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    })
    .then((movie) =>{
        console.log(movie)
        res.redirect(`/movies`)
    })
    .catch((error)=>{
        next(error);
    })
})


router.get('/:id', (req,res,next) =>{
    movieId = req.params.id
    Movies.findById(movieId)
    .then((movie)=>{
        console.log(movie)
        res.render('./movies/show',{ movie })
    })
    .catch((error)=>{
        next(error);
    })

})

module.exports = router;