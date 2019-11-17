

let celebsSeed = [
  {
    name: "Bugs Bunny",
    occupation: "bunny",
    catchPhrase: "Duck season!"
  },
  {
    name: "Daffy Duck",
    occupation: "duck",
    catchPhrase: "You're despicable."
  },
  {
    name: "Elmer Fudd",
    occupation: "hunter",
    catchPhrase: "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!"
  }
];

let moviesSeed = [
  {
    title: "Space Jam",
    genre: "Animation",
    plot: "In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan."
  },
  {
    title: "Superior Duck",
    genre: "Animation",
    plot: 'Daffy is supposedly a super hero and tries to show off his "super powers".'
  },
  {
    title: "Marvin the Martian in the Third Dimension",
    genre: "Animation",
    plot: "While scanning the universe for signs of hostility, Marvin hears something that sounds like a threat from Earth. Daffy's preparation for his movie role as a dreaded Martian fighter causes the confusion, which results in intergalactic mayhem of comic proportions."
  }
];



//const Schema = mongoose.Schema;
const mongoose = require("mongoose");

// Import celebrity model
const celebrity = require("../models/celebrity");
const movies = require("../models/movie")

const MONGODB_URI = "mongodb://localhost/celebApp";

// Connection to the database "recipeApp"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } ).then(document => {
  console.log("Connected to Mongo!");

 /*  celebrity.create(celebsSeed).then(document => {
    for (let i = 0; i < document.length; i++) {
      console.log(document[i].name);
    }
  }).catch(err => {
    console.error("Error creating DB", err);
  });
});
 */

movies.create(moviesSeed)
.then(document => {
  for (let i = 0; i < document.length; i++) {
    console.log(document[i].name);
  }
}).catch(err => {
  console.error("Error creating DB", err);
});
});