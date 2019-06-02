<?php
//解决exit()输出的中文字符为乱码的方法
header("Content-type: text/html; charset=UTF8");

//增删改数据

//能通过PHP代码执行一个SQL语句得到查询结果

//mysql的函数是扩展的函数,必须先配置文件,扩展MySQL的函数,才能使用

//1.建立与数据库服务器之间的链接
//如果需要在调用函数时忽略错误或者警告可以在函数名之前添加 @
$arr = mysqli_connect('127.0.0.1','root','123456','baixiu');

if(!$arr){
	exit('<h1>连接数据库失败!</h1>');
	}

//基于刚刚创建的连接对象执行一次查询操作
//得到的是一个查询对象,这个查询对象可以用来再在一行一行拿数据
$query=mysqli_query($arr,'delete from students where id=1;');

if(!$query){
	exit('<h1>查询失败!</h1>');
	}

//如何获取受影响的行
$row=mysqli_affected_rows($arr);
var_dump($row);


?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>

<body>
<a href="index.html">主页</a>
</body>
</html>