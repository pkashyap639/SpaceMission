const mongoose = require("mongoose");
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
});
const Mission = mongoose.model("Mission", MissionSchema);
module.exports = Mission;
