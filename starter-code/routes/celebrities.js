const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then(data => {
    console.log("DEU: ", data)
    res.render("celebrities/index", {
      data
    });
  }).catch((err) => {
    console.log("NAO DEU: ", err)
  });
});

router.get('/celebrities/:id', (req, res, next) => {
  let celebUrl = req.params.id;
  res.render('celebrities/show', celebUrl)
});


module.exports = router;