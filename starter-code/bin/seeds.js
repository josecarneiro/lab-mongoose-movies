require('dotenv').config();

const mongoose = require('mongoose');
//const app = require('./app');

const databaseURI = 'mongodb://localhost/celebridades';

const Celebrity = require('../Models/Celebrity');

const dataCelebs = [

    {
        "name": "Tom Cruise",

        "occupation": "Actor",

        "catchPhrase": "bla bla"

    },

    {
        "name": "Beyoncé",

        "occupation": "Singer",

        "catchPhrase": "la la la"

    },

    {
        "name": "Zlatan",

        "occupation": "Football Player",

        "catchPhrase": "Go Watch Baseball"
    }

];


mongoose
    .connect(databaseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000);
    })
Celebrity.create(dataCelebs)
    .then(() => {
        console.log("Success");
    })
    .catch(error => {
        console.log(error);
    });