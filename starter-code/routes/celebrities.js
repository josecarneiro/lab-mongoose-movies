const express = require("express");
const router = new express.Router();

const Celebrity = require("../models/celebrity");

// Handle GET request for website root
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
      //console.log(celebrities);
    })
    .catch(error => {
      console.log("There was an error finding the celebrities", error);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(data => {
      res.redirect("/celebrities");
      console.log("Celebrity was created", data);
    })
    .catch(error => {
      console.log("There was an error creating the celebrity", error);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  const celebrityID = req.params.id;
  Celebrity.findByIdAndRemove(celebrityID)
    .then(data => {
      res.redirect("/celebrities");
      console.log("Celebrity was deleted", data);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  const celebrityID = req.params.id;
  Celebrity.findById(celebrityID)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
      console.log("Celebrity was Edited", celebrity);
    })
    .catch(error => {
      next(error);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const celebrityID = req.params.id;
  Celebrity.findByIdAndUpdate(celebrityID, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(celebrity => {
      res.redirect("/celebrities");
      console.log("Celebrity was Edited", celebrity);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  const celebrityID = req.params.id;
  Celebrity.findById(celebrityID)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
      //console.log(celebrity);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
