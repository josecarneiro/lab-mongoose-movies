const mongoose = require('mongoose');
const Celebrity = require('./../models/movie');
const MONGODB_URI = "mongodb://localhost/Celebrity";


const moviesArray = [{
        title: 'Race against time',
        genre: 'Adventure',
        plot: 'Need to find time to do whatever'
    },
    {
        title: 'Beautiful day',
        genre: 'Drama',
        plot: 'I need sun'
    },
    {
        title: 'Lone in the air',
        genre: 'Romance',
        plot: 'They find true love'
    }
];



mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to Mongo!');
        Celebrity.create(moviesArray[0])
            .then(celebrity => {
                console.log('I created a new folder in database');
            })
            .catch(err => {
                console.log('Couldnt create the database due to an error  ', err);
            });
    })
    .then(() => {
        Celebrity.insertMany(moviesArray)
            .then((celebrities) => {
                console.log('The movies were succesfully added.')
            })
            .catch((err) => {
                console.log('Couldnt add the movies array with an error  ', )
            });
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    });