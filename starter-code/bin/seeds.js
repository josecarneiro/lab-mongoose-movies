const databaseURI = 'mongodb://localhost/celeb-lab';
const mongoose = require('mongoose');



mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })




const seeds = [{
  name: "Tom Cruise",
  occupation: "actor",
  catchPhrase: "I love LRH."
}, {
  name: "Ben Affleck",
  occupation: "actor",
  catchPhrase: "I'm really smart."
}, {
  name: "Matt Damon",
  occupation: "actor",
  catchPhrase: "Matt Damon"
}];



const Celebrity = require('../models/celebrity.js');


console.log(Celebrity);


Celebrity.create(seeds).then(() => {
  console.log("DONE!");
}).catch((error) => {
  console.log("ERROR: " + error)
});