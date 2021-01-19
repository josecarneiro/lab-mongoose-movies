const express = require('express');
const router = express.Router();
const Celebrity = require('./../models/celebrity');

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrity) => {
      res.render('celebrities/index', { celebrity: celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Celebrity.findById(id)
    .then((celebrity) => {
      console.log(celebrity);
      res.render('celebrities/show', { celebrity: celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
