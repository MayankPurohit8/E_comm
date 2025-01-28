const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const cookieParser = require("cookie-parser");
module.exports = async (req, res, next) => {
  if (req.cookie.token == "") {
    req.flash("error", "you need to be logged in");
    return res.redirect("/");
  }
  try {
    let decoded = jwt.verify(req.cookie.token, process.env.JWT_KEY);
    let user = await userModel
      .findOne({ email: decoded.email })
      .select("-password");
    req.user = user;
    next();
  } catch (err) {
    console.log("Something went wrong");
    res.redirect("/");
  }
};
