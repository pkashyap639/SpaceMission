const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
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

module.exports = ResourceSchema;
