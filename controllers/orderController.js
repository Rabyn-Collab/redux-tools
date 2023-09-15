const Order = require('../model/Order');


module.exports.getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }
}



module.exports.getOrderByUser = async (req, res) => {
  try {
    const orders = await Order.findById({ user: req.userId });
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }
}
module.exports.addOrder = async (req, res) => {
  const {

  } = req.body;
  try {
    await Order.create({

    });
    return res.status(200).json({
      status: 'success',
      message: 'successfully created'
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }
}







