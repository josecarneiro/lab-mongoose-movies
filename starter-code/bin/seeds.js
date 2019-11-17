const mongoose = require("mongoose");

const databaseURI = "mongodb://localhost/starter-code";

mongoose.connect(databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Celebrity = require("../models/celebrity");

const celebrity = [
  {
    name: "Demi Lovato",
    occupation: "singer",
    catchPhrase: "tell me you love me"
  },
  {
    name: "Jameela Jamil",
    occupation: "actor",
    catchPhrase: "look at all the fucks I give"
  },

  {
    name: "Zac Effron",
    occupation: "actor",
    catchPhrase: "we are breaking free"
  }
];

Celebrity.create(celebrity)
  .then(() => {
    console.log("One celebrity has been added to your database");
  })
  .catch(error => {
    console.log("Your celebrity got lost");
  });
