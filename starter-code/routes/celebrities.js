const express = require('express');

const router = new express.Router();

const Celebrity = require('./../models/celebrity');


router.get('/index', (req, res, next) => {

    Celebrity.find()
        .then(celebrities => {
            res.render('celebrities/index', {
                celebrities: celebrities
            });
        })
        .catch(err => {
            next(err);
            console.log('there was an error connecting the celebreties to the page');
        });
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
    Celebrity.create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        .then(() => {
            console.log("A new celebrity was added to the database");
            res.redirect('/index');
        })
        .catch((err) => {
            console.log("COULDNT ADD CELEBRITY TO LIST!", err);
            next(err);
        });
});


router.post('/celebrities/:celebrity_id/delete', (req, res, next) => {
    const celebrityId = req.params.celebrity_id;
    Celebrity.findByIdAndDelete(celebrityId)
        .then(() => {
            console.log('THE CELEBRITY WAS DELETED');
            res.redirect('/index');
        })
        .catch((err) => {
            console.log('COULDNT DELETE CELEBRITY', err);
            next(err);
        })
});



router.get('/celebrities/:celebrity_id', (req, res, next) => {
    console.log(req.params.celebrity_id);
    Celebrity.findById(req.params.celebrity_id)
        .then(celebrity => {
            console.log(celebrity);
            res.render('celebrities', {
                celebrity
            })
        })
        .catch(err => {
            console.log('Couldnt load the celebrity with that id', err)
        });
});




module.exports = router;