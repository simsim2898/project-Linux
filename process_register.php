<?php
// 데이터베이스 연결 설정
$servername = "localhost";
$username = "root";
$password = "your_password";
$dbname = "your_database";

// POST로부터 사용자 정보 가져오기
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

// 데이터베이스 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 사용자 추가 쿼리 실행
$sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "회원가입이 완료되었습니다.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
