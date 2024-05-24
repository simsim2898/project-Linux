const express = require('express');
const communityController = require('../controllers/communityController');
const router = express.Router();

router.post('/create-post', communityController.createPost);
// 다른 게시글 관련 라우트 추가

module.exports = router;
