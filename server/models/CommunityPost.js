const db = require('../config/db');

const CommunityPost = {
    create: (postData, callback) => {
        const { postId, userId, content, title, createdAt } = postData;
        const query = 'INSERT INTO community_posts (post_id, user_id, content, title, created_at) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [postId, userId, content, title, createdAt], callback);
    },
    // 다른 게시글 관련 메서드들
};

module.exports = CommunityPost;
