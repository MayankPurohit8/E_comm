const express = require("express");
const router = express.Router();
const adminModel = require("../models/adminModel");
router.get("/", function (req, res) {
  res.send("hello admin");
});

if (process.env.Node_ENV == "development") {
  router.get("/create", async function (req, res) {
    let owners = await adminModel.find();
    if (owners.length > 0) {
      return res.send(
        "You do not have a permission to create more than one admin"
      );
    } else {
      let admin = await adminModel.create({
        name: "Mayank Purohit",
        email: "mayank@gmail.com",
        password: "12345",
        contact: 88653,
      });
      res.send(admin);
    }
  });
}
module.exports = router;
