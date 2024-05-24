const User = require('../models/User');

const authController = {
    register: (req, res) => {
        const newUser = req.body;
        User.create(newUser, (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(201).json({ message: 'User registered successfully!' });
            }
        });
    },
    // 로그인 메서드 추가
};

module.exports = authController;
