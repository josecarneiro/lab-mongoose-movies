const express = require("express");

const router = new express.Router();

const Celebrity = require("./../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log("this is the problem:" + celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      console.log("this is the problem:" + celebrity);
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      next(error);
    });
});

// router.get("/celebrities/new", (req, res, next) => {
//   consolue.log('here is the mistake, but it tries to render the page')
//   res.render("celebrities/index");
// });

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new")
});

// router.post("/celebrities/new"), (req, res, next) => {
//   const {name, occupation, catchPhrase} = req.body;
//   const newCelebrity = new Celebrity({name, occupation, catchPhrase})
//   newCelebrity.save()
//   .then((celebrity) => {
//     res.redirect('/celebrities/index');
//   })
//   .catch((error) => {
//     console.log(error);
//     res.render('celebrities/new')
//   })
// }

module.exports = router;
