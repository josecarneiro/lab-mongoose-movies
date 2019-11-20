const express = require('express');
const router = express.Router();
const Celebrity = require("../Models/celebritydata");

// Handle GET request for website root

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log('dispayed celebrities')
      res.render('celebrities/index', {
        celebrities
      });
    })
    .catch(error => {
      console.log("could not find celebrities", error);
    });
});



router.get('/celebrities/:celebrityId', (req, res, next) => {
  console.log(req.params)
  const celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId)
    .then(celebrities => {
      console.log('dispayed celebrity', celebrities)
      res.render('celebrities/show', {
        celebrities
      });
    })
    .catch(error => {
      console.error("could not find celebrity", error);
      next(error);
    });
});

module.exports = router;