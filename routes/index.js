const express = require('express');
const router = express.Router();
const Celebrity = require('./../models/celebrity');
// Handle GET request for website root

router.get('/', (req, res, next) => {
  const title = 'celebrities';
  res.render('index', { title });
});

router.get('/celebrities/index', (req, res, next) => {
  Celebrity.find()
    .then(celeb => {
      console.log('found celebs', celeb);
      const data = { celeb };
      res.render('celebrities/index', data);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.get('/celebrities/create', (req, res, next) => {
  res.render('celebrities/create');
});

router.post('/celebrities/create', (req, res, next) => {
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.phraseCatch
  };

  Celebrity.create(data)
    .then(celebrity => {
      const id = celebrity._id;
      res.redirect(`/celebrities/${id}`);
    })
    .catch(error => {
      res.render('/celebrities/create');
    });
});

router.get('/celebrities/:id', (req, res, next) => {
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

router.post('/celebrities/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Celebrity.findByIdAndDelete(id)
    .then(celebrity => {
      console.log('Remove celeb', celebrity);
      res.redirect('/celebrities/index');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      const data = { celebrity };
      res.render('celebrities/edit', data);
    })
    .catch(error => {
      next(error);
    });
});
router.post('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.phraseCatch
  };
  Celebrity.findByIdAndUpdate(id, data, { runValidators: true })
    .then(() => {
      res.redirect(`/celebrities/${id}`);
    })
    .catch(error => {
      next(error);
    });
});

router.get('*', (req, res, next) => {
  res.send('There was an error');
});

module.exports = router;
