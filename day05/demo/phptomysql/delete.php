<?php
//解决exit()输出的中文字符为乱码的方法
header("Content-type: text/html; charset=UTF8");

//接收要删除的数据ID
if(empty($_GET['id'])){
	exit('<h1>获取ID失败!</h1>');
	}
$id=$_GET['id'];

//1.建立连接
$arr = mysqli_connect('127.0.0.1','root','123456','baixiu');

if(!$arr){
	exit('<h1>连接数据库失败!</h1>');
	}
	//2.开始查询
$query=mysqli_query($arr,'delete from students where id='.$id.';');

if(!$query){
	exit('<h1>查询失败!</h1>');
	}

$affected_rows=mysqli_affected_rows($arr);

if($affected_rows<=0){
	exit('<h1>删除失败!</h1>');
	}

//跳转回列表页
header('Location: mysqltest2.php');


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