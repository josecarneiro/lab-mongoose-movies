const mongoose = require('mongoose');

//importing the celebrities model
const Celebrity = require('../models/celebrity');

const MONGODB_URI = 'mongodb://localhost/movieCelebrities';

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Mongo!');
  })

    Celebrity.create([{
        name: 'Halle Berry',
        occupation: 'actress',
        cathPhrase: 'cath me if you can!'
  },
    {
        name: 'Denzel Washinton',
        occupation: 'actor',
        cathPhrase: 'whats my name babe!'
    },   
        {
        name: 'Rambo',
        occupation: 'actor',
        cathPhrase: 'See you later!'
        }])

        .then(() => {
            console.log('Celebrities was successfully created!');
          })
        
          .catch(err => {
            console.error('Something when wrong', err)
          })

          .finally(() => {
            mongoose.connection.close()
          })