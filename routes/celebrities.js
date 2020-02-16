const express = require('express');
const Celebrity = require('../models/celebrity');

const router = new express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/create', (req, res) => {
  res.render('celebrities/create');
});

router.post('/create', (req, res) => {
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.create(data)
    .then(celebrity => {
      console.log(celebrity);
      celebrity.save();
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log(error);
      res.render('celebrities/create');
    });
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(id, data, { runValidators: true })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
