const mongoose = require('mongoose');
const celebritySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    catchPhrase: {
        type: String,
        required: true
    }
  },
  {
    timestamps: {
      createdAt: 'creationDate',
      updatedAt: 'updateDate'
    }
  }
);

const Celebrity = mongoose.model('Celebrities', celebritySchema);

module.exports = Celebrity;