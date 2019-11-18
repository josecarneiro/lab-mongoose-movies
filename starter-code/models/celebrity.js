const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    occupation: {
      type: String
    },
    catchPhrase: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: "creationDate",
      updatedAt: "updateDate"
    }
  }
);

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
