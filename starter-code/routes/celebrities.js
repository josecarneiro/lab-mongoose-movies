const Celebrity = require("../models/celebrity");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(listOfCelebs => {
      const data = { list: listOfCelebs };
      res.render("celebrities/index", data);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(listOfCelebs => {
      console.log(listOfCelebs);
       //const data = { list: listOfCelebs };
      res.render("celebrities/show", { listOfCelebs });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
  });

  router.post('/create', (req, res, next) => {
    Celebrities.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
     //   .then( document => {
    //       res.save( ??)
    //   });
      .then(document => {
        res.redirect('/celebrities/index');
      })
   
    .catch(error => {
        res.render('celebrities/new');
        res.send('Try again');
      });
  })


  router.get('/celebrities/:id/delete', (req, res, next) => {
    const celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId)
  .then(listOfCelebs => {
    console.log(listOfCelebs);
     //const data = { list: listOfCelebs };
    res.render("celebrities/");
  })
  .catch(error => {
    next(error);
  });
});

router.get('/celebrities/:id/edit', (req,res,next) => {
    const celebId = req.params.id
    Post.findByIdAndUpdate(celebId, {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
      })
    .then (listOfCelebs => {
        res.render("celebrities/edit", {listOfCelebs});
    })
    .catch(error => {
        next(error);
      });
    

});
  
  
  

module.exports = router;
