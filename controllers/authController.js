const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generatetoken } = require("../utils/generatetoken");

module.exports.registeruser = async (req, res) => {
  try {
    let { email, password, name } = req.body;
    if ((await userModel.findOne({ email: email })) != null) {
      res.send("user exists with the email");
    }
    bcrypt.genSalt(10, async function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) console.log(err);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            name,
          });
          let token = generatetoken(user);
          res.cookie("token", token);
          res.send("user created");
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.loginuser = async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if (user == null) res.send("user does not exits");
  else {
    bcrypt.compare(password, user.password, function (err, result) {
      if (!result) {
        res.redirect("/");
      }
    });
  }
};
