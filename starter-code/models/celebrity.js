const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
name: String,
occupation: {
    type: String,
    required:true,
},
catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;

