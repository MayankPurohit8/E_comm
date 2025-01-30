const productModel = require("../models/productModel");
module.exports.createProduct = async (req, res) => {
  try {
    let { name, price, discount, image, bgColor, panelColor, textColor } =
      req.body;
    if (
      !name ||
      !image ||
      !price ||
      !discount ||
      !bgColor ||
      !panelColor ||
      !textColor
    ) {
      console.log("insufficient entries");
      return res.status(400).redirect("/admin/createproduct");
    }
    if ((await productModel.findOne({ name: name })) != null) {
      console.log("product with same name is already created");
      return res.status(400).redirect("/admin/createproduct");
    }
    let product = await productModel.create({
      name,
      price,
      discount,
      image,
      bgColor,
      panelColor,
      textColor,
    });

    console.log(req.file);
    return res.redirect("/admin/createproduct");
  } catch (err) {}
  console.log(req.body);
};
