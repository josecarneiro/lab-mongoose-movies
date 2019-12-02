
const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrities');
 const Movie = require('../models/Movie'); 
const MONGODB_URI = 'mongodb://localhost/starter-code';


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
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongoose connection established.');
    Celebrity.create(celebrityarr)})
          .then(() => {
            console.log('youre three celebs were added');
          })
          .catch(err => {
            console.log("the celebs were already added", err)
          });
    


    //app.listen(3000);
   /*  const server = app.listen(process.env.PORT, () => {
      console.log(`Listening on http://localhost:${process.env.PORT}`); */
    

  

      const movies = [
        {
          title: 'Ronaldo the Movie',
          genre: 'Documentary',
          plot: ' since he is 13 he is the football sensation wherever he goes!'
        },
        {
          title: 'Man on the moon',
          genre: 'Comedy',
          plot: 'The incredible story of Andy Kaufman and all the controversy explained.'
        },
        {
          title: 'Bean',
          genre: 'Comedy',
          plot: 'Mr Bean, a lazy security guard, is sent to the United States to bring a valued painting to a museum in Los Angeles. '
        }
      ];
      
      mongoose
        .connect(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(() => {
          console.log('Connected to Mongo!');
          Movie.create(  
            movies
          )
        })
        .then(() => {
          console.log('array inserted')
        })
        .catch(err => {
          console.error('Error connecting to mongo', err);
        });
  