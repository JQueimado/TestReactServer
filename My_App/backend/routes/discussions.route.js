const discussionRouter = require("express").Router();
let Discussion = require("../models/discussion.model");

discussionRouter.route("/").get((request, response) => {
  Discussion.find((err, discussion) => {
    if (err) {
      console.log("No Discussions Avalable");
    } else {
      response.json(discussion);
    }
  });
});

discussionRouter.route("/create").post((request, response) => {
  let new_Discussion = new Discussion(request.body);
  new_Discussion
    .save()
    .then(discussion =>
      response.status(200).json({ discussion: "discussion added sucsesfuly" })
    )
    .catch(err => response.status(404).send("discussion could not be added"));
});

module.exports = discussionRouter;
