const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

// mongoose.connection.db.dropDatabase('celebrity');
const DATABASE_URI = 'mongodb://localhost:27017/celebrity';

const seed = [
  {name: "Winona Ryder",
  occupation: "Actress",
  catchPhrase: "Something something"
  },
  {name: "Keanu Reaves",
  occupation: "Actor",
  catchPhrase: "Something something"
  },
  {name: "Tom Hiddleston",
  occupation: "Actor",
  catchPhrase: "Something something"
  }
];


mongoose
  .connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000);
  })
  .catch(error => {
    console.log('There was an error connecting to MongoDB' + error);
  });
  
  
  Celebrity.create(seed)
    .then(() => {
      console.log('Seed successful');
    })
    .catch(error => {
      console.log('there was an error seeding the database');
    });

  