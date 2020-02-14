const express = require('express');
const router = express.Router();
const Celebrity = require('./../models/celebrity');

router.get('/', (req, res, next) => {
  // console.log('I'm running');
  Celebrity.find()
    .then(celebrities => {
      const data = { celebrities };
      res.render('./celebrities/index', data);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      const data = { celebrity };
      res.render('celebrities/show', data);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/create', (req, res, next) => {
  res.render('celebrities/create', data);
});

module.exports = router;
