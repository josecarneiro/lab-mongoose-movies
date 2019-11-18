const express = require('express');

const router = express.Router();

const Celebrity = require('./../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:celebId', (req, res, next) => {

  const celebId = req.params.celebId;
  Celebrity.findById(celebId)
  .then(celebritiesId => {
      res.render('celebrities/show', { celebritiesId });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/new', (req, res, next) => {
  res.render('new/create');
});

router.post('/new', (req, res, next) => {
  Post.create({
    text: req.body.text
  })
    .then(Celebrity => {
      res.redirect(`/new/${Celebrity._id}`);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;