const express = require('express');
const router = express.Router();

// Handle GET request for website root
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrity => {
      if (!celebrity) {
        next(new Error('NOT_FOUND'));
      } else {
        const celebrity = { celebrity };
        res.render('single', data);
      }
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
