const mongose = require("mongoose");
const Schema = mongose.Schema;

let Discussion_Topic = new Schema({
  publisher: { type: Schema.Types.ObjectId, ref: "User" },
  discussion: { type: Schema.Types.ObjectId, ref: "Discussion" },
  topic: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongose.model("Discussion_Topic", Discussion_Topic);
