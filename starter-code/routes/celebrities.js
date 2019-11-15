const express = require('express');
const router = new express.Router();

const Celebrity = require("../Models/Celebrity")


router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            console.log(celebrities)
            res.render('celebrities/index', {
                celebrities
            })
        })
});

module.exports = router;