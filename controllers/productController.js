const Product = require('../model/Product');




module.exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }
}



module.exports.createProduct = async (req, res) => {
  const {
    product_name,
    product_detail,
    product_price,
    brand,
    category,
    countInStock

  } = req.body;
  try {

    await Product.create({
      product_name,
      product_detail,
      product_price,
      brand,
      category,
      countInStock,
      product_image: req.product_image
    });

    return res.status(200).json({
      status: 'success',
      message: `successfully created`
    });

  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }
}