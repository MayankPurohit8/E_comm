const express = require("express");
const router = express.Router();
const { registeruser, loginuser } = require("../controllers/authController");
router.get("/", function (req, res) {
  res.send("hello user");
});

router.post("/register", registeruser);

router.post("/login", loginuser);

router.get("/shop", function (req, res) {
  res.render("shop");
});

module.exports = router;
