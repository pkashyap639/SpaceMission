const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OutcomeSchema = new Schema({
  outcomeType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  outcomeStatus: {
    type: String,
    enum: ["success", "failure", "in-progress"],
    default: "in-progress",
  },
});

module.exports = OutcomeSchema;
