const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true,
      enum: ['actor', 'singer', 'comedian', 'unknown']
    },
    catchPhrase: {
      type: String,
    }
  }
);

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;