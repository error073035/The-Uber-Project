const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controls/user.controller');

router.post('/register', [
  body('fullname.firstname').notEmpty().withMessage('First name is required'),
  body('fullname.lastname').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
  userController.registerUser
);

router.post('/login', [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').notEmpty().withMessage('Password is required'),
],
  userController.loginUser
);



module.exports = router;