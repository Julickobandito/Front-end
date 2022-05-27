<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body{
        margin-left: 2%;}
    </style>
</head>
<body>
    <h1>Дані: </h1>
    <b>Ім'я: </b><?php echo $_GET['name']; ?> <br>
    <b>Факультет: </b><?php echo $_GET['faculty'];?> <br>
    <b>Дата народження: </b><?php echo $_GET['date'];?> <br>
    <b>Адреса: </b><?php  echo $_GET['address'];?> <br>
    <b>E-mail: </b><?php  echo $_GET['email'];?>

</body>
</html>