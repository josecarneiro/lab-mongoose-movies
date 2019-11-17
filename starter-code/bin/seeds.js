require("dotenv").config();

const mongoose = require("mongoose");

const databaseURI = "mongodb://localhost/starter-code";
const Celebrity = require("../models/celebrity");

const dataCeleb = [{
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Bla bla bla"
  },
  {
    name: "Beyoncé",
    occupation: "Singer",
    catchPhrase: "La la la"
  },
  {
    name: "Daffy Duck",
    occupation: "Comedian",
    catchPhrase: "He he he"
  }
];

mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
    return Celebrity.create(dataCeleb);
  })
  .then(() => {
    console.log("Success");
  })
  .catch(error => {
    console.log(error);
  });