const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
  phone: {
    type: String,
  },
});
const adminModel = mongoose.model("admin", adminSchema,"admin");
console.log("Admin schema Model build");
module.exports = adminModel;
