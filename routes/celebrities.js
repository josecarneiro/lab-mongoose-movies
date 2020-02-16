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

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Celebrities.findByIdAndDelete(id)
    .then(() => {
      res.redirect(`/celebrities`);
      console.log('celebrity deleted');
    })
    .catch(() => {
      next();
    });
});

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;

  Celebrities.findById(id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(() => {
      next();
    });
});

router.post('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrities.findByIdAndUpdate(id, data)
    .then(() => {
      res.redirect(`/celebrities`);
      console.log('celebrity updated');
    })
    .catch(() => {
      next();
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

  Celebrities.create(data)
    .then(celebrity => {
      const id = celebrity._id;
      res.redirect(`/celebrities`);
      console.log('creating celebrity');
    })
    .catch(() => {
      res.render('celebrities/create');
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
