const express = require('express');
const Celebrity = require('../models/celebrity');
const celebritiesRouter = new express.Router();

celebritiesRouter.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

//CREATE CELEBRITY GET AND POST METHOD

celebritiesRouter.get('/create', (req, res) => {
  res.render('celebrities/create');
});

celebritiesRouter.post('/create', (req, res, next) => {
  const name = req.body.createname;
  const occupation = req.body.createoccupation;
  const phrase = req.body.createphrase;

  Celebrity.findOne({ name })
    .then((document) => {
      if (!document) {
        return Celebrity.create({
          name,
          occupation,
          catchPhrase: phrase
        });
      } else {
        const error = new Error("There's already a celebrity with that name.");
        return Promise.reject(error);
      }
    })
    .then((celebrity) => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

//------------ FIND CELEBRITIES

celebritiesRouter.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

//-----------EDIT

celebritiesRouter.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Celebrity.findById(id)

    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

celebritiesRouter.post('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const name = req.body.editname;
  const occupation = req.body.editoccupation;
  const catchPhrase = req.body.editphrase;

  const editObj = {
    name,
    occupation,
    catchPhrase
  };

  Celebrity.findByIdAndUpdate(id, editObj, { runValidators: true })
    .then(() => {
      res.redirect(`/celebrities`);
    })
    .catch((error) => {
      next(error);
    });
});
// ------------------ DELETE

celebritiesRouter.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)

    .then((celebrity) => {
      console.log('Celebrity removed');
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = celebritiesRouter;
