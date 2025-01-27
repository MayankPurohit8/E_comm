const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.get("/", function (req, res) {
  res.send("hello user");
});

router.get("/register", async function (req, res) {
  try {
    let { email, password, name } = req.body;
    bcrypt.gensalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) console.log(err);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            name,
          });
          let token = jwt.sign({ email, id: user._id }, "");
          res.cookie("token", token);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
