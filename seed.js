// You'll use this script to add some initial data to your database
// Remember, before performing any operations you need to connect to the database,
// and disconnect when you're done

// You should be running this script once with `node seed.js` to add the records you need to the database,
// not continuously, as we'll do with our express server
const dotenv = require('dotenv');

dotenv.config();

//const data = require('./data');

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const Celebrity = require('./models/celebrity');

//app.use(express.static('public'));

//app.use(express.urlencoded());

//const celebrityRouter = require('./routes/index');

//app.use('/celebrity', celebrityRouter);

mongoose
  .connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecting to MongoDB');
    return Celebrity.create([
      {
        name: 'Cristiano Ronaldo',
        occupation: 'look at himself in the mirror, play football',
        catchPhrase: 'Siiiiiiii!'
      },
      {
        name: 'Neymar',
        occupation: 'rolling around looking for fouls, play football',
        catchPhrase: 'Ahhhhhhh!'
      },
      {
        name: 'Mbappé',
        occupation: 'Speaking french, play football',
        catchPhrase: 'Bonjour, monsieur baguette'
      }
    ]);
  })
  .then(() => {
    console.log('seeded');
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('Disconnected to MongoDB');
  })
  .catch(error => {
    console.log(error);
  });
