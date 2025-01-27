const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  price: Number,
  discount: Number,
  image: db,
  bg_Color: String,
  panel_Color: String,
  textColor: String,
});

module.exports = mongoose.model("admin", adminSchema);
