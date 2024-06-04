-- users 테이블 초기 데이터 삽입
INSERT INTO users (username, password, email) VALUES
('user1', 'password1', 'user1@example.com'),
('user2', 'password2', 'user2@example.com');

-- posts 테이블 초기 데이터 삽입
INSERT INTO posts (user_id, title, content) VALUES
(1, 'Title 1', 'Content 1'),
(2, 'Title 2', 'Content 2');

-- comments 테이블 초기 데이터 삽입
INSERT INTO comments (post_id, user_id, content) VALUES
(1, 1, 'Comment 1 for Post 1'),
(2, 2, 'Comment 1 for Post 2');
