const Comment = require('../models/Comment');

const commentController = {
    addComment: (req, res) => {
        const newComment = req.body;
        Comment.create(newComment, (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(201).json({ message: 'Comment added successfully!' });
            }
        });
    },
    // 다른 댓글 관련 메서드들 추가
};

module.exports = commentController;
