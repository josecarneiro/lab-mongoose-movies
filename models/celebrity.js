const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model('lab-mongoose-movies', celebritySchema);

module.exports = Celebrity;
