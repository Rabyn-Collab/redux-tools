

const path = require('path');


module.exports.fileCheck = (req, res, next) => {

  if (req.files?.product_image) {

    const file = req.files.product_image;
    const validExts = ['.jpg', '.jpeg', '.png'];
    if (validExts.includes(path.extname(file.name))) {
      file.mv(`./uploads/${file.name}`, (err) => {
        if (err) {

        }
        req.product_image = `/uploads/${file.name}`;

        return next();
      });

    } else {
      return res.status(400).json({
        status: 'error',
        message: `please provide valid image`
      });
    }


  } else {
    return res.status(400).json({
      status: 'error',
      message: `please provide image`
    });
  }







}