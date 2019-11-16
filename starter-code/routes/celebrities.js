const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/celebrity');


// Handle GET request for website root
router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

// Handle GET request for website root
router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            console.log(celebrity);
            res.render('celebrities/show', {
                celebrity
            });
        })
        .catch(error => {
            next(error);
        });
});

// Handle POST request for website root
router.post('/', (req, res, next) => {
    Celebrity.create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        .then(celebrity => {
            res.render('celebrities/show', {
                celebrity
            });
        })
        .catch(error => {
            next(error);
        });
});

// Handle GET request for website root
router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            res.render('celebrities/index', {
                celebrities
            });
        })
        .catch(error => {
            next(error);
        });
});

module.exports = router;