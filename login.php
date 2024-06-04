<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
</head>
<body>
    <h2>로그인</h2>
    <form action="check_login.php" method="post">
        <label for="username">사용자 이름:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">비밀번호:</label><br>
        <input type="password" id="password" name="password" required><br>
        <input type="submit" value="로그인">
    </form>
    <p>아직 계정이 없으신가요? <a href="register.php">회원가입</a>하세요.</p>
</body>
</html>
