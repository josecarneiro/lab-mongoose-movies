// You'll use this script to add some initial data to your database
// Remember, before performing any operations you need to connect to the database,
// and disconnect when you're done

// You should be running this script once with `node seed.js` to add the records you need to the database,
// not continuously, as we'll do with our express server
const dotenv = require('dotenv');

dotenv.config();

//Add data
const data = require('./data');

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const Celebrity = require('./models/celebrity');

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connecting to MongoDB');
    return Celebrity.insertMany(data);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('Disconnecte to MongoDB');
  })
  .catch(error => {
    console.log(error);
  });