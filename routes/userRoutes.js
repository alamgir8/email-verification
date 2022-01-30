const express = require('express');
const router = express.Router();
const {
  verifyEmailAddress,
  registerUser,
  forgetPassword,
  resetPassword,
} = require('../controller/userController');
const {
  passwordVerificationLimit,
  emailVerificationLimit,
} = require('../config/others');

//verify email
router.post('/verify-email', emailVerificationLimit, verifyEmailAddress);

//register a user
router.post('/register/:token', registerUser);

//forget-password
router.put('/forget-password', passwordVerificationLimit, forgetPassword);

//reset-password
router.put('/reset-password', resetPassword);

module.exports = router;
