const express = require('express');
const router = new express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(data => {
    const celebs = data;
    console.log(celebs)
    res.render('./celebrities/index', {celebs});   
  })
  .catch(error => {
    console.error('Error rendering all celebrities', error);
    next();
  });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(data => {
    const celeb = data;
    //console.log(celeb)
    res.render('./celebrities/about', {celeb});  
  })
  .catch(error => {
    console.error('Error rendering chosen celebrity', error);
    next();
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  //console.log(req.body)
  new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  .save()  
  .then(() => {
    //console.log('new celebrity inserted');
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log('Error creating new celebrity', error)
    res.render('celebrities/new');
  })
});  

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log('Unable to delete celebrity', error);
    next();
  })
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((data) => {
    const celeb = data;
    //console.log(celeb)
    res.render('celebrities/edit', {celeb});
  })
  .catch(err => {
    console.log('Unable to edit celebrity', err);
    next();
  });
})

router.post('/:id', (req, res, next) => { 
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(err => {
    console.log('Unable to edit this celebrity', err);
    next();
  })
});

module.exports = router;