const express = require('express');
const router = express.Router();
const Celebrity = require('./../models/celebrity');

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(error => {
      console.log(error);
      res.send('Error');
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
      res.send('Error');
    });
});

module.exports = router;
