const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Celeb = require('./../models/celebrity');
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

router.post('/create', (req, res, next) => {
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
      res.redirect('/');
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

module.exports = router;
