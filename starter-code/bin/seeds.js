const celebritySeeds = [{
        name: "Mongooseline Jolie",
        occupation: "Actress",
        catchPhrase: "Don't let that mongoose get away!"
    },
    {
        name: "Mongoose Pit",
        occupation: "Actor",
        catchPhrase: "Just when i thought i was out they mongoosed me back in..."
    },
    {
        name: "Mongoosé",
        occupation: "Singer",
        catchPhrase: "To the left! To the left! Everything you own in a mongoose to the left..."
    }
];

const Celebrity = require('./../models/celebrity');

require('dotenv').config();

const mongoose = require('mongoose');
const databaseURI = 'mongodb://localhost/celebrities';

mongoose
    .connect(databaseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Mongoose connection established.');
        return Celebrity.insertMany(celebritySeeds);
    })
    .then((celebrities) => {
        console.log('Celebrity seeds planted!');
        mongoose.connection.close();
    })
    .catch(error => {
        console.error('Error connecting to mongo', error);
    });