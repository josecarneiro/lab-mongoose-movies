const mongoose = require ('mongoose');
const Movies = require ('./../models/movies');

const databaseURI = 'mongodb://localhost/starter-code'

let initMovies = [
    {
    title: "movie1",
    genre: "genre1",
    plot: "plot1"
    },
    {
    title: "movie2",
    genre: "genre2",
    plot: "plot2"
    },
    {
    title: "movie3",
    genre: "genre3",
    plot: "plot3"
    }
]

mongoose.connect(databaseURI,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        Movies.create(initMovies)
    .catch(error => {
        console.error('MongoDB error' + error)})
    .finally(()=>{
        mongoose.connection.close();
    })
});
