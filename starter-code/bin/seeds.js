// Mongoose.database.drop();
const Celebrity = require("../Models/celebritydata");
const mongoose = require("mongoose");
const databaseURI = "mongodb://localhost/starter-code";
Celebrity.create([{
      name: "Spongebob Squarepants",
      occupation: "Fry Cook",
      catchPhrase: "I'm ready!"
    },
    {
      name: "Sandy Cheeks",
      occupation: "Underwater Scientist",
      catchPhrase: "Howdy Fellas!"
    },
    {
      name: "Patrick Star",
      occupation: "Bottom Feeder",
      catchPhrase: "I'm hungry!"
    }
  ])

  .then(Celebrity => {
    console.log("Created celebrities");
  })

  .catch(err => {
    console.error("Error creating celebrities", err);
  });

mongoose.connect(databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});