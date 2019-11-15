const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/celebDb';

let mainCeleb = require('./../models/celebrity');

let arrOfCelebs = [
  {
    name: 'Tina Turned',
    occupation: 'Skid Row Pimp',
    catchPhrase: 'Thats what they said'
  },
  {
    name: 'Alfred Thickcock',
    occupation: 'Adult Film director',
    catchPhrase: 'oh yeah oh yeah o yeah'
  },
  {
    name: 'Tom Cruise Ship',
    occupation: 'Sailor',
    catchPhrase: 'Choo Choo Chooooo'
  }
];

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongoose');
    return mainCeleb.create(arrOfCelebs);
  })
  .then(data => {
    console.log(`some celebs were aadded and these are them : ${data}`);
  })
  .catch(err => {
    console.log(`there was an error: ${err}`);
  });
