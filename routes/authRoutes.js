const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');



router.post('/api/userLogin', authController.userLogin);
router.post('/api/userSignUp', authController.userRegister);
//router.post('/api/user/:id', authController.userLogin);

module.exports = router;

