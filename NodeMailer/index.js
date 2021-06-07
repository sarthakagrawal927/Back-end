const express = require("express");
const app = express();
require("./config/db")();

const User = require("./models/user");

app.get("/", (req, res) => {
  require("./mailer");
  res.send("hello");
});
app.post("/register/:emailId", async (req, res) => {
  try {
    let user = new User({
      emailId: req.params.emailId,
    });

    await user.save();
    res.send(user);
  } catch (e) {
    res.send(e.message);
  }
});

app.listen(5000, () => console.log("Server started at LocalHost 5000"));
