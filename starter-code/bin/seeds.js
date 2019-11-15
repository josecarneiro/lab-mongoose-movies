const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost/celebritiesApp";

const Celebrity = require("../models/celebrity"); // access my models

const celebdata = [
  {
    name: "Samurai Jack",
    occupation: "time traveller",
    catchPhrase: "I will avenge my past!!"
  },
  {
    name: "Bart Simpson",
    occupation: "student",
    catchPhrase: "Eat my shorts!"
  },
  {
    name: "Ron Swanson",
    occupation: "Department Director",
    catchPhrase: "Any dog under fifty pounds is a cat and cats are useless"
  }
];

// connect to database
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// create initial celebs
Celebrity.create(celebdata)
  .then(data => {
    console.log("I created some celebs sucessfully--->", data);
  })
  .catch(error => {
    console.log("There was an error creating celebs --->", error);
  });
