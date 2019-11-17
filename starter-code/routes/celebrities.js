// requires explicit import for each route
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

// @GET   /celebrities
// @desc  Get celebrities from DB
// @acess public
// router.get('/', (req, res) => {
router.get('/celebrities', (req, res) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index', { celebrities });
    console.log(celebrities);
    // res.json(celebritiesFromDB)
  })
  .catch(err => {
    console.log(err);
    // next(err);
  })
});


router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render('celebrities/show', { celebrity });
    console.log(celebrity);
  })
  .catch(err => console.log(err));
});


module.exports = router;