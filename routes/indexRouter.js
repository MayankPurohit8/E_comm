const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isloggedin");

router.get("/", function (req, res) {
  let error = req.flash("something went wrong");
  res.render("index", { error });
});

router.get("/shop", function (req, res) {
  res.render("shop");
});

module.exports = router;
