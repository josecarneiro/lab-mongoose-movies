// You'll use this script to add some initial data to your database
// Remember, before performing any operations you need to connect to the database,
// and disconnect when you're done

// You should be running this script once with `node seed.js` to add the records you need to the database,
// not continuously, as we'll do with our express server

const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const Celebrity = require('./models/celebrity');

//app.use(express.static('public'));

//app.use(express.urlencoded());

//const celibrityRouter = require('./routers/celebrity');

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    return Celebrity.create([
      {
        name: 'Simba',
        occupation: ['Sleep', 'Eat', 'Play', 'Poop'],
        catchPhrase: 'auuu auuu auuu'
      },
      {
        name: 'Benjamim',
        occupation: ['Sleep', 'Eat', 'Play', 'Poop', 'Silly'],
        catchPhrase: 'auuu auuu auuu'
      },
      {
        name: 'Bonifacio',
        occupation: ['Sleep', 'Eat', 'Play', 'Poop', 'Bath'],
        catchPhrase: 'miau miau miau'
      }
    ]);
  })
  .then(() => {
    console.log('Succeeded');
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
