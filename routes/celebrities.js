const express = require('express');
const router = new express.Router();

const Celebrities = require('./../models/celebrity');

router.get('/', (req, res, next) => {
	Celebrities.find()
		.then(celebs => {
			res.render('./celebrities/index', { celebs });
		})
		.catch(error => {
			next(error);
		});
});

router.get('/create', (req, res, next) => {
	res.render('./celebrities/create');
});

router.post('/create', (req, res, next) => {
	Celebrities.create({
		name: req.body.name,
		occupation: req.body.occupation,
		catchPhrase: req.body.catchphrase
	})
		.then(newCeleb => {
			console.log(newCeleb);
			res.redirect('/celebrities');
		})
		.catch(error => {
			next(error);
		});
});

router.post('/delete/:id', (req, res, next) => {
	delCeleb = req.params.id;
	Celebrities.findByIdAndDelete(delCeleb)
		.then(celeb => {
			console.log(celeb);
			res.redirect('/celebrities');
		})
		.catch(error => {
			next(error);
		});
});

router.get('/:id/edit', (req, res, next) => {
	edCeleb = req.params.id;
	Celebrities.findById(edCeleb).then(celeb => {
		console.log(celeb);
		res.render('./celebrities/edit', { celeb });
	});
});

router.post('/:id/edit', (req, res, next) => {
	edCeleb = req.params.id;
	Celebrities.findByIdAndUpdate(edCeleb, {
		name: req.body.name,
		occupation: req.body.occupation,
		catchPhrase: req.body.catchphrase
	})
		.then(celeb => {
			console.log(celeb);
			res.redirect(`/celebrities/${edCeleb}`);
		})
		.catch(error => {
			next(error);
		});
});

router.get('/:id', (req, res, next) => {
	celebId = req.params.id;
	Celebrities.findById(celebId)
		.then(celebrity => {
			console.log(celebrity);
			res.render('./celebrities/show', { celebrity });
		})
		.catch(error => {
			next(error);
		});
});

module.exports = router;
