const mongose = require("mongoose");
const Schema = mongose.Schema;

let User = new Schema({
  user_name: { type: String }
});

module.exports = mongose.model("User", User);
