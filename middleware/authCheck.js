const jwt = require('jsonwebtoken');





module.exports.adminCheck = (req, res, next) => {


  try {
    const token = req.headers.authorization;
    if (token) {
      const decode = jwt.decode(token, 'jsonToken');

      console.log(decode);
      switch (decode?.isAdmin) {


        case true:
          return next();



        default:

          return res.status(401).json({
            status: 'error',
            message: `not authorised`
          });

      }




    } else {
      return res.status(401).json({
        status: 'error',
        message: `not authorised`
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `THis is middleware`
    });
  }

}