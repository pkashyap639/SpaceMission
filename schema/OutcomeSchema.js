const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OutcomeSchema = new Schema({
  missionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mission", // Refers to the parent Mission
    required: true,
  },
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

const Outcome = mongoose.model("Outcome", OutcomeSchema);
module.exports = Outcome;
