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
      next(error);
    });
});

router.get('/celebrities/create', (req, res, next) => {
  return res.render('celebrities/create');
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      return res.render('celebrities/edit', celebrity);
    })
    .catch(error => {
      console.log(error);
      next(error);
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
      next(error);
    });
});

// Handle POST request for website root
router.post('/create', (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(celebrityCreated => res.render('celebrities/show', celebrityCreated))
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => Celebrity.find())
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.post('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    },
    { runValidators: true }
  )
    .then(celebrity => {
      Celebrity.findById(celebrity._id).then(celebrity =>
        res.render('celebrities/show', celebrity)
      );
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
