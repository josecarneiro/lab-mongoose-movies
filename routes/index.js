const express = require('express');
const Celebrity = require('./../models/celebrity');
const router = express.Router();

// Handle GET request for website root
router.get('/', (req, res, next) => {
  const title = 'Celebrities';
  res.render('index', { title });
});

router.get('/celebrities/index', (req, res, next) => {
  Celebrity.find()
    .then(celebs => {
      res.render('celebrities/index', { celebs });
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
    occupation: [req.body.ocuppation],
    catchPhrase: req.body.catchphrase
  };

  const newCelebrity = new Celebrity(data);
  console.log(newCelebrity);
  newCelebrity
    .save()
    .then(celebrity => {
      const id = celebrity._id;
      res.redirect(`/celebrities/${id}`);
    })
    .catch(error => {
      res.redirect('/celebrities/create');
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Celebrity.findByIdAndRemove(id)
    .then(celebrity => {
      console.log('Delete celebrity', id);
      res.redirect(`/celebrities/index`);
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
    occupation: req.body.occu,
    catchPhrase: req.body.phrase
  };
  Celebrity.findByIdAndUpdate(id, data, { runValidators: true })
    .then(() => {
      res.redirect(`/celebrities/${id}`);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.get('*', (req, res, next) => {
  console.log(error);
  res.send(error);
});

module.exports = router;
