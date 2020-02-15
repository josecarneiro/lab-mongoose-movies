const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');
//router.use(express.urlencoded());

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allCeleb => {
      res.render('./celebrities/index', { allCeleb });
      console.log(allCeleb);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/create', (req, res) => {
  res.render('./celebrities/create');
});

// path for the post method of CREATE
router.post('/', (req, res, next) => {
  const userInput = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  console.log(req.body.name);
  Celebrity.create(userInput)
    .then(() => {
      res.redirect(`/celebrities`);
    })
    .catch(() => {
      res.render('./celebrities/create');
    });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(thisCeleb => {
      if (!thisCeleb) {
        next();
      } else {
        res.render('./celebrities/show', { thisCeleb });
      }
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(thisCeleb => {
      if (!thisCeleb) {
        next();
      } else {
        res.render('./celebrities/edit', { thisCeleb });
      }
    })
    .catch(error => {
      next(error);
    });
});

// path for the post method of EDIT
router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  const userInput = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(id, userInput)
    .then(thisCeleb => {
      console.log(thisCeleb + ' was edited');
      res.redirect(`/celebrities`);
    })
    .catch(error => {
      next(error);
    });
});

// path for the post method of DELETE
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(thisCeleb => {
      console.log('The celeb was deleted');
      res.redirect(`/celebrities`);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
