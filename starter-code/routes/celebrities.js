const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');

router.get('/celebrities/:id', (req, res, next) => {
  let celebUrl = req.params.id;
  console.log(req.params)
  // let oneCeleb = Celebrity.findById(celebUrl);
  // console.log(oneCeleb);
   res.render("/celebrities/show");
  
});

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


module.exports = router;