const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebrity = new Schema({
  name: { type: String },
  occupation: { type: String },
  catchPhrase: { type: String }
});

const Celebrity = mongoose.model('Celebrity', celebrity);

module.exports = Celebrity;
