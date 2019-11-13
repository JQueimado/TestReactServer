const mongose = require("mongoose");
const Schema = mongose.Schema;

let Discussion = new Schema({
  publisher: { type: Schema.Types.ObjectId, ref: "User" },
  Name: {
    type: String,
    trim: true,
    required: true
  },
  Description: { type: String, trim: true }
});

module.exports = mongose.model("Discussion", Discussion);
