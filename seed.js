const data = [
  // {
  //   name: 'John Blue',
  //   occupation: 'Runner',
  //   catchPhrase: 'You have to run or i will catch you'
  // },
  // {
  //   name: 'Richiano Ronaldo',
  //   occupation: 'Football Player',
  //   catchPhrase: 'One way or another i will score'
  // },
  // {
  //   name: 'Rita Catita',
  //   occupation: 'Model',
  //   catchPhrase: "When I smile the flashes won't stop"
  // }

  {
    title: 'The Fifth Element',
    genre: 'Action',
    plot:
      'In 1914, aliens known as Mondoshawans arrive at an ancient Egyptian temple to collect, for safekeeping from World War I, the only weapon capable of defeating a great evil that appears every 5,000 years. The weapon consists of four stones, containing the essences of the four classical elements, and a sarcophagus containing a Fifth Element in the form of a human, which combines the power of the other four into a divine light capable of defeating the evil. The Mondoshawans promise their human contact, a priest from a secret order, they will come back with the weapon in time to stop the great evil when it returns.'
  },
  {
    title: 'Atlantics',
    genre: 'Documentary',
    plot:
      "A Senegalese romance, a story of construction workers turned migrants and a paranormal revenge tale; Mati Diop's genre-busting Atlantics won the Grand Prix at Cannes last year. Netflix showed its impeccable taste in international films by picking it up. The first time feature director takes her time as she follows seventeen year-old Ada, who is in love with Soulemaine – one of the workers at sea – but obliged to marry another man and Issa, a police officer who gets mixed up in the lives of Ada and the women left behind in Dakar. Diop uses genre tropes and traditional folklore to get under the skin of families, corruption and class in urban Senegal."
  },
  {
    title: 'American Son',
    genre: 'Documentary',
    plot:
      "A Senegalese romance, a story of construction workers turned migrants and a paranormal revenge tale; Mati Diop's genre-busting Atlantics won the Grand Prix at Cannes last year. Netflix showed its impeccable taste in international films by picking it up. The first time feature director takes her time as she follows seventeen year-old Ada, who is in love with Soulemaine – one of the workers at sea – but obliged to marry another man and Issa, a police officer who gets mixed up in the lives of Ada and the women left behind in Dakar. Diop uses genre tropes and traditional folklore to get under the skin of families, corruption and class in urban Senegal."
  }
];

// You'll use this script to add s
// Remember, before performing any operations you need to connecome initial data to your databaset to the database,
// and disconnect when you're done

// You should be running this script once with `node seed.js` to add the records you need to the database,
// not continuously, as we'll do with our express server

const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const Movie = require('./models/movie');

mongoose
  .connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecting to MongoDB');
    return Movie.insertMany(data);
  })
  .then(() => {
    console.log('Data created sucessfuly');
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
