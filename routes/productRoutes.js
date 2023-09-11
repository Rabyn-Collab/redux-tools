const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const checkUser = require('../middleware/authCheck');
const checkFile = require('../middleware/filecheck');

router.get('/', productController.getAllProduct);


router.post('/api/create-product', checkUser.adminCheck,
  checkFile.fileCheck, productController.createProduct);





module.exports = router;

