const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);

module.exports = Celebrity;

const data = {
  name: 'Jay Bravo',
  occupation: 'Stand up Comedian',
  catchPhrase: 'Do not panic!'
};

Celebrity.create({ data })
  .then(result => {
    console.log('Create new Celebrity.');
  })
  .catch(err => {
    console.log(err);
  });
