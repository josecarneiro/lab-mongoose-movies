const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// Handle GET request for website root
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      next(error);
      console.log(error);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity);
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      next(error);
      console.log(error);
    });
});

/* router.post("/celebrities", (req, res, next) => {
  new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .save()
    .then(() => {
      res.redirect("celebrities/");
    })
    .catch(error => {
      console.log("Error creating new celebrity", error);
      res.render("celebrities/new");
    });
}); */
router.post("/celebrities", (req, res, next) => {
  new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .save()
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      next(error);
      res.render("celebrities/new");
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      next(error);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then( details => {
      res.render("celebrities/edit" , { details });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  .then( () => {
    res.redirect("/celebrities");
  })
    .catch(error => {
      next(error);
    });
});

/* router.post("/:id", (req, res, next) => {
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
}); */

module.exports = router;
