const express = require('express');
const router = express.Router();
const Celebrity = require('./../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      const data = { celebrities };
      res.render('./celebrities/index', data);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/create', (req, res, next) => {
  res.render('celebrities/create');
});

router.post('/create', (req, res, next) => {
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.create(data)
    .then(celebrity => {
      const id = celebrity._id;
      res.redirect('/');
    })
    .catch(error => {
      res.render('celebrities/create');
    });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;

  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(id, data)
    .then(() => {
      res.redirect('/');
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

module.exports = router;
