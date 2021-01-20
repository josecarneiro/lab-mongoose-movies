const express = require('express');
const router = new express.Router();
const Celebrity = require('../models/celebrity');

 // FIND CELEBRITIES

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities: celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrities) => {
      res.render('celebrities/show', { celebrities: celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

//CREATE CELEBRITY GET AND POST METHOD

router.get('/celebrities/create', (req, res) => {
  res.render('celebrities/create');
});

router.post('/celebrities', (req, res, next) => {
  const data = req.body;

  Celebrity.create({
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  })
    .then((celebrities) => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

// DELETE CELEBRITIES

router.post('/celebrities/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then((celebrities) => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

// EDIT CELEBRITIES

router.get('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrities) => {
      res.render('celebrities/edit', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  Celebrity.findByIdAndUpdate(id, {
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  })
    .then((celebrities) => {
      res.redirect(`/celebrities/${celebrity._id}`);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
