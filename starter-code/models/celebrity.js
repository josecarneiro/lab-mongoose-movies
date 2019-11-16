const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String
    },
    catchPhrase: {
        type: String,
        maxlength: 140
    }
}, {
    timestamps: {
        createdAt: 'creationDate',
        updatedAt: 'updateDate'
    }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;