const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// Handle GET request for website root
router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then(celebrities => {
    console.log(celebrities);
    res.render("celebrities/index", { celebrities });
  });
});

module.exports = router;
