const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      const data = { celebrities };
      res.render('index', data);
    })
    .catch(error => {
      console.log(error);
      res.send('Error');
    });
});