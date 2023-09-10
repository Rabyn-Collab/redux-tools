const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const checkUser = require('../middleware/authCheck');


router.get('/', productController.getAllProduct);


router.post('/api/create-product', checkUser.adminCheck, productController.createProduct);





module.exports = router;

