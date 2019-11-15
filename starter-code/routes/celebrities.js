// Help what we do with our routes
// To create routes I need the express. That's why I use it.
const express = require('express');
const router = express.Router();
// I called Celebrity because I need to use in my route.
const Celebrity = require('../models/celebrity');

// Handle GET request for website root
// 1 - The get is a method from express to get information from my database
// 2 - '/celebrities' is the endpoint in the url-page
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            console.log(celebrities);
            res.render('/celebrities/index', {
                celebrities
            });
        })
        .catch(error => {
            next(error);
        })
});

module.exports = router;