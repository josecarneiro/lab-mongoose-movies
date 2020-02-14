const express = require('express');
const Celebrity = require('./../models/celebrities');

const router = new express.Router();

router.get('/celebrities', (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      const data = { celebrities };
      res.render('celebrities', data);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

//Iteration 3 Id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrities => {
      if (!celebrities) {
        next(new Error('NOT_FOUND'));
      } else {
        const data = { celebrities };
        res.render('celebrities/show', data);
      }
    })
    .catch(error => {
      next(error);
    });
});

//Iteration 4 Create
router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res, next) => {
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.create(data)
    .then(celebrities => {
      const id = celebrities._id;
      res.redirect(`/celebrities/${id}`);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
