const mongoose = require('mongoose');
const databaseURI = 'mongodb://localhost/starter-code';

//Import Schema Models
const Celebrities = require('./../models/celebrity');


let initCeleb = [
   {name: "Pablo Lescano",
    occupation: "Singer",
    catchPhrase: "ATR cumbia, perro, cajeteala piola"
    },
    {name: "Leandro Romagnoli",
    occupation: "Football Player",
    catchPhrase: "Aguante San Lorenzo!"
    },
    {name: "Mirko",
    occupation: "Instagramer",
    catchPhrase: "Dadadada"
    }
];


mongoose
  .connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    Celebrities.create(initCeleb)
  .catch(err => {
    console.error('Error connecting to mongo', err);
  })
  .finally(()=>{
    mongoose.connection.close();
  })
});

