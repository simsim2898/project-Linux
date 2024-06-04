<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
</head>
<body>
    <h2>회원가입</h2>
    <form action="process_register.php" method="post">
        <label for="username">사용자 이름:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">비밀번호:</label><br>
        <input type="password" id="password" name="password" required><br>
        <label for="email">이메일:</label><br>
        <input type="email" id="email" name="email" required><br>
        <input type="submit" value="가입">
    </form>
</body>
</html>
