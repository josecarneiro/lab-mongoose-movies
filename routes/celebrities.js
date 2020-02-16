const express = require('express');
const Celebrity = require('./../models/celebrity');

const router = new express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/create', (req, res) => {
  res.render('celebrities/create');
});
//Create an object with keys for name, occupation, and catchPhrase.
//Values for those keys should come from the form
//(req.body is the object that contains the values resulting from the form for).
//Create an instance of the Celebrity model with the object you made in the previous step.
//Call the save method to save the new celebrity to the database.
//If there is an error, render the celebrities/create view so the user can try again.
//If there is no error, redirect to the page with the list of celebrities.

router.post('/create', (req, res) => {
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.create(data)
    .then(celebrity => {
      console.log(celebrity);
      celebrity.save();
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log(error);
      res.render('celebrities/create');
    });
});

//Create the /celebrities/:id/delete POST route in your routes/celebrities.js file.
//In that route's handler:
//Use the Celebrity model's findByIdAndRemove static to delete the celebrity by its id.
//If there's an error, call the route's next function and return the error.
//If there is no error, redirect to the list of celebrities page.

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      next(error);
    });
});

//Call the Celebrity model’s findOne or findById static to retrieve a specific celebrity by their id.
//If there's an error, call the route's next function and return the error.
//If there isn't an error, render the celebrities/edit view.
//Pass the variable with the celebrity’s details into the view.

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

//Create an object with keys for each attribute of a celebrity (celebrity has 3 attributes)
//Values for those keys should come from the form submission (req.body).
//Call the Celebrity model’s update static and use the celebrity's id to specify which celebrity we are updating. Pass it the object with the new attributes as the second argument.
//If there is an error retrieving that celebrity, call the route's next function and return the error.
//If there is no error, redirect back to the list of celebrities.

router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(id, data, { runValidators: true })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity);
      res.render('celebrities/show', { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
