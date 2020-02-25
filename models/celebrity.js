const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: String,
  occupation: {
    type: String,
    default: 'unknown'
  },
  catchPhrase: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [
      {
        type: Number,
        min: -180,
        max: 180
      }
    ]
  }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
