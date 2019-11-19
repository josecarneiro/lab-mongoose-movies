const express = require('express');

const router = new express.Router();

const Celebrity = require('./../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
        console.log("this is the problem:" + celebrities)
      res.render('celebrities/index', { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/celebrities/:celebrityId', (req, res, next) => {
    const celebrityId = req.params.celebrityId;
    console.log("here is the problem:", celebrityId);
    Celebrity.findById(celebrityId)
      .then(celebrity => {
          console.log("this is the problem:" + celebrity)
        res.render('celebrities/show', { celebrity });
      })
      .catch(error => {
        next(error);
      });
  });

module.exports=router;

