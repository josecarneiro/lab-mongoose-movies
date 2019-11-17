const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// Handle GET request for website root
router.get("/", (req, res, next) => {
  Celebrity.find((err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/index", {
      celebrities
    });
  });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/", (req, res, next) => {
  const celebrity = new Celebrity(req.body);

  celebrity
    .save()
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      res.redirect("/celebrities/new");
    });
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/show", {
      celebrity
    });
  });
});

module.exports = router;