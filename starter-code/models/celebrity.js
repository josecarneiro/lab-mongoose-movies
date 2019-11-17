const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const celebrity = mongoose.model("Celebrities", celebritySchema);

module.exports = celebrity;
