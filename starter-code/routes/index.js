const express = require('express');
const router = express.Router();

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});


module.exports = router;