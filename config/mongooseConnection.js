const mongoose = require("mongoose");
const config = require("config");
mongoose
  .connect(`${config.get("MONGODB_URI")}/ecomapp`)
  .then(() => {})
  .catch((err) => {});

module.exports = mongoose.connection;
