const express = require('express');
const router = new express.Router();

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;
