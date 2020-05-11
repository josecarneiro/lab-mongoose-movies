///celebrities GET route
const express = require('express');

const Celebrities = require('./../models/celebrity');

const celebritiesRouter = express.Router();

//get a list of all celebrities
celebritiesRouter.get('/', (req, res, next) => {
  //res.render('celebrities'); //get celebs from Celebrity model
  Celebrities.find()
    .then((celebrities) => {
      console.log(`this is the find celebrities result`);
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

//adding new celebrities
celebritiesRouter.get('/create', (req, res) => {
  console.log('Celebritiy-create page');
  res.render('celebrities/create');
});

celebritiesRouter.post('/create', (req, res, next) => {
  console.log('endpoint create celebrity');
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;

  return Celebrity.create({
    name,
    occupation,
    catchPhrase,
  })
    .then((celebrities) => {
      res.redirect('/');
    })
    .catch((error) => {
      res.render('celebrities/create');
    });
});

//delete an exisiting celeb
celebritiesRouter.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  console.log(request.params);
  Celebrities.findOneAndRemove({ _id: id })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

//get a specific celeb
celebritiesRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;
  //console.log(request.params);
  Celebrities.findOne({ _id: id })
    .then((id) => {
      console.log(id);
      res.render('celebrities/show', { id });
    })
    .catch((error) => {
      next(error);
    });
});

//edit an exisiting celeb

module.exports = celebritiesRouter;
