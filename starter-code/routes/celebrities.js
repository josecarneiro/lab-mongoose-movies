const express = require("express");
const router = new express.Router();

const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebs => {
      console.log(celebs);
      res.render("celebrities/index", { celebs });
    })
    .catch(error => {
      next(error);
      res.render("index");
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      //console.log('YOOOOOOO',celeb._id)
      res.render("celebrities/details", { celeb });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/", (req, res, next) => {
  new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .save()
    .then(() => {
      res.redirect(`celebrities/`);
    })
    .catch(error => {
      console.log("Error creating new celebrity", error);
      res.render("celebrities/new");
    });
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/edit", { celeb });
    })
    .catch(error => {
      console.log("Error celebrity", error).next();
    });
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log("Error deleting celebrity", error).next();
    });
});

router.post("/:id", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log("Error trying to edit", error);
    });
});

module.exports = router;
