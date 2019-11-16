const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  occupation: {
    type: String,
    required: true
  },

  catchPhrase: {
    type: String,
    required: true
  }
});

const Celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = Celebrity;