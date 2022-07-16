var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var notifierSchema = new Schema({
    name: {
        type: String,
        required:true
      },    
    email: {
        type: String,
        required:true
      },
      password: {
        type: String,
        required:true
      },
      age: {
        type: String,
        required:true
      },
      gender: {
        type: String,
        required:true
      },
      phone: {
        type: String,
        required:true
      },
      cnfrmPassword: {
        type: String,
        required:true
      },

});
console.log("Notifier schema Model build");
module.exports = mongoose.model('Notifier', notifierSchema);

