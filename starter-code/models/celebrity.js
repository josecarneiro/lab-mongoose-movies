const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
    name: {
        type: String
    },
    occupation:{
        type: String
    },
    cathPhrase: {
        type: String
    }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;