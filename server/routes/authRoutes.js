const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.register);
// 로그인 라우트 추가

module.exports = router;
