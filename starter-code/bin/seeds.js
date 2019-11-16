// Mongoose.database.drop(); 

const Celebrity = require('../models/celebritydata');
const mongoose = require('mongoose');
const databaseURI = 'mongodb://localhost/starter-code';


Celebrity.create(
    [{
        name: "Zen Daya",
        occupation: "Actress",
        catchPhrase: "I love you Jules"
      },

      {
        name: "Rebspen",
        occupation: "Adult Entertainer",
        catchPhrase: "I'm never drinking again"
      },

      {
        name: "Ric Ocasek",
        occupation: "Singer",
        catchPhrase: "Just what I needed"
      }
    ])
  .then(celebrity => {
    console.log("Created Celebrity");
  })
  .catch(err => {
    console.log("Error in creating Celebrity", err);
  })

mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })