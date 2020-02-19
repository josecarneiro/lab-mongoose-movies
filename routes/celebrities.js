const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/celebrity');

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Celebrity.findByIdAndDelete(id)
    .then(() => {
      console.log('deleted');
      res.redirect(`/celebrities`);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrity => {
      const data = { celebrity };
      res.render('celebrities', data);
    })
    .catch(error => {
      console.log(error);
      res.send('Error');
    });
});

router.post('/create', (req, res, next) => {
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.create(data)
    .then(() => {
      res.redirect(`/celebrities`);
    })
    .catch(() => {
      res.render('celebrities/create');
    });
});

router.get('/create', (req, res, next) => {
  res.render('celebrities/create');
});

router.get('/:id/edit', (req, res, next) => {
  let _id = req.params.id;
  Celebrity.findById(_id)
    .then(id => {
      console.log(id);
      res.render('celebrities/edit', { id });
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
      res.redirect(`/celebrities`);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(id => {
      console.log(id);

      res.render('celebrities/show', { id });
    })
    .catch(error => {
      next();
      console.log(error);
      res.send('Error');
    });
});

module.exports = router;
