// I'm going to use the seeds when I need to have documents in my database.

// Import the celebrity model
const Celebrity = require('../models/celebrity');
// call mongoose to use it.
const mongoose = require('mongoose');

// This is the URI of my connection 
// celebrity is a name that I gave to my database
const DATABASE_URI = 'mongodb://localhost:27017/celebrity';

// Mongoose is going to connect with my database
// I do this to connect
mongoose
  .connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })

  // Just to check if I successfully connected to mongo
  .then(() => {
    console.log('Connected to mongo! huhuuuu')
  })
  .catch((error) => {
    console.log(error)
  })

  // iteration of my lab <3
  let celebrities = [
    {
        name: "Steven Gerrard",
        occupation: "Coach",
        catchPhrase: "Get in reds",
    },
    {
        name: "Chris Martin",
        occupation: "Singer",
        catchPhrase: "Yeah!",
    },
    {
        name: "Lionel Messi",
        occupation: "Football Player",
        catchPhrase: "Visca Barça",
    },
]

// Creating a method to create my celebrities in my database
Celebrity.create(celebrities)

  .then(() => {
    console.log('Seeds working');
  })
  .catch(error => {
    console.log('There was an error connecting to MongoDB');
  });