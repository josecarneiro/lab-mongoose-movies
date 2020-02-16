const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const celebritySchema = new Schema({
  name: {
    type: String
  },
  occupation: {
    type: Array
  },
  catchPhrase: {
    type: String
  }
});

const celebrity = mongoose.model('celebrities', celebritySchema);

module.exports = celebrity;
