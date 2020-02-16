const express = require('express');

//Connect to celebrity
const Celebrity = require('../../models/celebrity');
const router = new express.Router();

// Handle GET request for website root
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrity => {
      const data = { celebrity };
      res.render('./celebrity/index', data);
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

router.get('/create', (req, res, next) => {
  res.render('./celebrity/create');
});

router.post('/create', (req, res, next) => {
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase:req.body.catchPhrase
  };

  Celebrity.create(data)
    .then(celebrity => {

      const data = { celebrity };

      res.redirect('/celebrities/'+ celebrity._id);
    })
    .catch(error => {
      next(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Celebrity.findByIdAndDelete(id)
    .then(celebrity => {
      console.log('Delete celebrity', id);
      res.redirect(`/`);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;

  Celebrity.findById(id)
    .then(celebrity => {
      const data = { celebrity };
      res.render('./celebrity/edit', data);
    })
    .catch(error => {
      console.log(error);
      next();
    });

});

router.post('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase:req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(id, data, { runValidators: true })
    .then(() => {
      res.redirect(`/celebrities/${id}`);
    })
    .catch(error => {
      next(error);
    });
});





// Handle GET request for website root
router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  Celebrity.findById(id)
    .then(celebrity => {
      const data = { celebrity };
      res.render('./celebrity/show', data);
    })
    .catch(error => {
      console.log(error);
      next();
    });
});


module.exports = router;
