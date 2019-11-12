const mongose = require("mongoose");
const Schema = mongose.Schema;

let User = new Schema({
  user_name: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongose.model("User", User);
