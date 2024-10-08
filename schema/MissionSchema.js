const mongoose = require("mongoose");
const OutcomeSchema = require("./OutcomeSchema"); // Import OutcomeSchema
const ResourceSchema = require("./ResourceSchema"); // Import ResourceSchema
const Schema = mongoose.Schema;

const MissionSchema = new Schema({
  missionName: {
    type: String,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  missionStatus: {
    type: String,
    enum: ["planned", "in-progress", "completed", "failed"],
    default: "planned",
  },
  outcome: [OutcomeSchema],
  resources: [ResourceSchema],
});

const Mission = mongoose.model("Mission", MissionSchema);
module.exports = Mission;
