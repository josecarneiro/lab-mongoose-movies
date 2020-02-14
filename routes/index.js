const express = require('express');
const router = express.Router();

const Celebrities = require('./../models/celebrity');

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
