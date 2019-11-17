const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");
const mongoose = require("mongoose");
const databaseURI = "mongodb://localhost/Celebrities";

/* const seedCelebrity = [
  {
    name: "Arnold Schwarzenegger",
    occupation: "Actor",
    catchPhrase: "I'll be back"
  },
  {
    name: "Kobe Bryant",
    occupation: "Professional Basketball Player",
    catchPhrase: "Let's play ball"
  },
  {
    name: "Zack de la Rocha",
    occupation: "Musician",
    catchPhrase: "Killing in the name of"
  }
]; */
const seedMovie = [
  {
    title: "Titanic",
    genre: "Drama",
    plot: "Iceberg"
  },
  {
    title: "Lion King",
    genre: "Animation",
    plot: "A lion that it's a king"
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    plot: "Gump, Forrest Gump"
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
    app.listen(3000);
  })
  .catch(error => {
    console.log("There was an error connecting to MongoDB", error);
  });

Movie.create(seedMovie)
  .then(() => {
    console.log("Success");
  })
  .catch(error => {
    console.log(error);
  });
