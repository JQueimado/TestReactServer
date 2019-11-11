const userRouter = require("express").Router();
let User = require("../models/user.model");

userRouter.route("/").get((request, response) => {
  User.find((err, users) =>
    err ? console.log("Users could not be found") : response.json(users)
  );
});

userRouter.route("/add").post((request, response) => {
  let new_User = new User(request.body);
  new_User
    .save()
    .then(user => response.status(200).json({ user: "user added sucsesfuly" }))
    .catch(err => response.status(404).send("user could not be added"));
});

userRouter.route("/:id").get((request, response) => {
  let id = request.params.id;
  User.findById(id, (err, user) => {
    err
      ? response.status(404).send("User with id: ${id} not found")
      : response.json(user);
  });
});

module.exports = userRouter;
