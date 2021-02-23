const express = require('express');
const router = new express.Router();

const Celebrity = require('../models/celebrity');

 // FIND CELEBRITIES

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

//CREATE CELEBRITY GET AND POST METHOD -> POST method has to come before the :id path

router.get('/create', (req, res) => {
  res.render('celebrities/create');
});

router.post('/', (req, res, next) => {
  const data = req.body;

  const celebrity = new Celebrity({
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  })
  celebrity
  .save()
  .then(celebrity => {
      res.redirect(`/celebrities/${celebrity._id}`);
    })
    .catch(error => {
      next(error);
    });
});

// Same way of writting that above
//   Celebrity.create({
//     name: data.name,
//     occupation: data.occupation,
//     catchPhrase: data.catchPhrase
//   })
//     .then((celebrity) => {
//       res.redirect('/');
//     })
//     .catch((error) => {
//       next(error);
//     });
// });


 // SHOW SINGLE CELEBRITY

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

// DELETE CELEBRITIES

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

// EDIT CELEBRITIES

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  Celebrity.findByIdAndUpdate(id, {
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  })
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
