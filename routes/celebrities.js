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

//adding new celebrities
celebritiesRouter.get('/create', (req, res) => {
  console.log('Celebritiy-create page');
  res.render('celebrities/create');
});

celebritiesRouter.post('/', (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;

  return Celebrity.create({
    name,
    occupation,
    catchPhrase,
  });
});

//delete an exisiting celeb
//edit an exisiting celeb

module.exports = celebritiesRouter;
