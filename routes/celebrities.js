const express = require('express');
const router = express.Router();

const Celebrities = require('./../models/celebrity');

// Handle GET request for website root

router.get('/', (req, res, next) => {
  Celebrities.find()
    .then(celebrities => {
      res.render('celebrities', { celebrities });
    })
    .catch(() => {
      next();
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  Celebrities.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(() => {
      next();
    });
});

module.exports = router;
