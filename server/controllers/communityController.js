const CommunityPost = require('../models/CommunityPost');

const communityController = {
    createPost: (req, res) => {
        const newPost = req.body;
        CommunityPost.create(newPost, (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(201).json({ message: 'Post created successfully!' });
            }
        });
    },
    // 다른 게시글 관련 메서드들 추가
};

module.exports = communityController;
