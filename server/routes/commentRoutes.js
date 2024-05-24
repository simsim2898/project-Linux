const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.post('/add-comment', commentController.addComment);
// 다른 댓글 관련 라우트 추가

module.exports = router;
