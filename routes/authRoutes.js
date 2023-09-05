const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validator = require('express-joi-validation').createValidator({});
const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(20).required(),
});



router.post('/api/userLogin', validator.body(loginSchema), authController.userLogin);
router.post('/api/userSignUp', authController.userRegister);
//router.post('/api/user/:id', authController.userLogin);

module.exports = router;

