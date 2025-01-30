const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  discount: Number,
  image: String,
  bgColor: String,
  panelColor: String,
  textColor: String,
});

module.exports = mongoose.model("product", productSchema);
