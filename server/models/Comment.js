const db = require('../config/db');

const Comment = {
    create: (commentData, callback) => {
        const { commentId, postId, userId, content, createdAt } = commentData;
        const query = 'INSERT INTO comments (comment_id, post_id, user_id, content, created_at) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [commentId, postId, userId, content, createdAt], callback);
    },
    // 다른 댓글 관련 메서드들
};

module.exports = Comment;
