const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  missionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mission", // Refers to the parent Mission
    required: true,
  },
  resourceType: {
    type: String,
    required: true,
  },
  allocatedAmount: {
    type: Number,
    required: true,
  },
  usedAmount: {
    type: Number,
    default: 0,
  },
});

const Resource = mongoose.model("Resource", ResourceSchema);
module.exports = Resource;
