const mongoose = require('mongoose');
const Celebrity = require('./../models/celebrity');
const MONGODB_URI = "mongodb://localhost/Celebrity";


const celebrityArray = [{
        name: 'Angel Pinto',
        occupation: 'Dancer',
        catchPhrase: 'I am the best latin dancer'
    },
    {
        name: 'Maria String',
        occupation: 'Actress',
        catchPhrase: 'One day I will live in Holliwood'
    },
    {
        name: 'Pedro Santos',
        occupation: 'Musician',
        catchPhrase: 'Give me a song, and I will sing to you'
    }
];



mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to Mongo!');
        Celebrity.create(celebrityArray[0])
            .then(celebrity => {
                console.log('I created a new database with');
            })
            .catch(err => {
                console.log('Couldnt create the database due to an error  ', err);
            });
    })
    .then(() => {
        Celebrity.insertMany(celebrityArray)
            .then((celebrities) => {
                console.log('The celebrities were succesfully added.')
            })
            .catch((err) => {
                console.log('Couldnt add the celebrity array with an error  ',)
            });
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    });