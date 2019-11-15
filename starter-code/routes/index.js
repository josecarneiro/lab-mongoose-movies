const express = require('express');
const router = express.Router();

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

// Link that goes to the celebrities route
router.get('/celebrities', (req, res, next) => {
  res.render('celebrities');
});

module.exports = router;
