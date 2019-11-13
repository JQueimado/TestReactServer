const express = require("express");
const mongose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongose.connection;

connection.once("open", () => {
  console.log("Connected to Atlas");
});

//Routes
const userRoutes = require("./routes/user.route");
app.use("/user", userRoutes);

const discussionRoutes = require("./routes/discussions.route");
app.use("/discussions", discussionRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
