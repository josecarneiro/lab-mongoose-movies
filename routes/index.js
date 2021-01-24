const express = require('express');
const router = express.Router();
const Celebrity = require('./../models/celebrity');

// Handle GET request for website root
router.get('/celebrities/create', (req, res, next) => {
  res.render('celebrities/create');
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

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  console.log(id);
  Celebrity.findByIdAndUpdate(id, {
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPharse
  })
    .then((celebrity) => {
      console.log(celebrity);
      res.redirect(`/celebrities/${id}`);
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

router.post('/celebrities', (req, res, next) => {
  console.log(req.body);
  const data = req.body;
  Celebrity.create({
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPharse
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity) =>
      res.render('celebrities/edit', { celebrity: celebrity })
    )
    .catch((error) => next(error));
});

module.exports = router;
