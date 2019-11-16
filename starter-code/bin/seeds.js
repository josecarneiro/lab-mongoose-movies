const Celebrity = require("../models/celebrity")
const mongoose = require('mongoose');
const DATABASE_URI = 'mongodb://localhost:27017/celebrityDatabase';

const seedThree = [
    {
        name: "jennifer aniston",
        occupation: "actor",
        catchPhrase: "jenny"
    },
    {
        name: "michael jordan",
        occupation: "basketball player",
        catchPhrase: "airjordan"
    },
    {
        name: "barack obama",
        occupation: "polotician",
        catchPhrase: "president"
    }
]

mongoose
  .connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000);
  })
  .catch(error => {
    console.log('There was an error connecting to MongoDB', error);
  });

Celebrity.create(seedThree)
.then(() => {
    console.log("seedTree created");
})
.catch(error => {
    console.log("there was an error creating the seedTree", error)
});