  
const mongoose = require('mongoose');

const databaseURI = 'mongodb://localhost/starter-code';
const Celebrity  = require('../models/celebrities')


celebrityarr =  [
    {
        name: "Jack Johnson",
        occupation: "musician",
        catchPhrase: "play, eat, surf, repeat"
    },

    {
        name: "Cristiano",
        occupation: "football player",
        catchPhrase: "Simmmm!",
    },

    {
        name: "Roan Atkinson",
        occupation: "comediant, writter",
        catchPhrase: "I'm waving!"
    }


]


mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongoose connection established.');
    Celebrity.create(celebrityarr)})
          .then((celebrities) => {
            console.log('youre three celebs were added');
          })
          .catch(err => {
            console.log("the celebs were already added", err)
          });
    
    //app.listen(3000);
   /*  const server = app.listen(process.env.PORT, () => {
      console.log(`Listening on http://localhost:${process.env.PORT}`); */
    

  



