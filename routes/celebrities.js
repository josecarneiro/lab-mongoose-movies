const express = require('express');
const Celebrity = require('./../models/celebrity');

const router = new express.Router();

router.get('/celebrities', (req, res) => {
  Celebrities.find()
    .then(celebrities => {
      const data = { celebrities };
      res.render('../views/celebrities/index', data);
    })
    .catch(error => {
      console.log(error);
      res.send('Error');
    });
});

module.exports = router;
