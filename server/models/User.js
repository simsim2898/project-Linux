const db = require('../config/db');

const User = {
    create: (userData, callback) => {
        const { name, password, phone, nickname } = userData;
        const query = 'INSERT INTO users (name, password, phone, nickname) VALUES (?, ?, ?, ?)';
        db.query(query, [name, password, phone, nickname], callback);
    },
    // 다른 사용자 관련 메서드들
};

module.exports = User;
