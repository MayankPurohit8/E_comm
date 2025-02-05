const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contact: Number,
  products: [],
  picture: String,
});

module.exports = mongoose.model("admin", adminSchema);
