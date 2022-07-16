const mongoose = require("mongoose");
const detectionSchema = new mongoose.Schema({
  anomalyName: {
    type: String,
    required:true
  },
  anomalyDuration: {
    type: String,
    required:true
  },
  anomalyTime: {
    type: String,
    required:true
  },
  anomalyDay: {
    type: String,
    required:true
  },
});
const detectionModel = mongoose.model("Detection", detectionSchema);
console.log("Detection schema Model build");
module.exports = detectionModel;
