const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebritydata');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log("displayed Celebrities");
      res.render('celebrities/index', {
        celebrities
      });
    })
    .catch(error => {
      console.log("Error in displaying Celebrities", error);
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  console.log(req.params.id)
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celebrities => {
      console.log('displayed celebrity', celebrities)
      res.render('celebrities/show', {
        celebrities
      });
    })
    .catch(error => {
      console.log('Could not find celebrity', error);
      next(error);
    });
});

router.post('/create', (req, res, next) => {
  Celebrity.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(document => {
      res.redirect(`/celebrities/${document._id}`);
    })
    .catch(error => {
      next(error);
    });
});

router.post('/celebrities/:postId/delete', (req, res, next) => {
  const postId = req.params.postId;
  Celebrity.findByIdAndDelete(postId)
    .then(data => {
      console.log(data);
      res.redirect(`/celebrities`);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;