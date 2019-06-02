<?php
//解决exit()输出的中文字符为乱码的方法
header("Content-type: text/html; charset=UTF8");



//能通过PHP代码执行一个SQL语句得到查询结果

//mysql的函数是扩展的函数,必须先配置文件,扩展MySQL的函数,才能使用

//1.建立与数据库服务器之间的链接
//如果需要在调用函数时忽略错误或者警告可以在函数名之前添加 @
$arr = mysqli_connect('127.0.0.1','root','123456','baixiu');

//防止数据出现乱码的代码
mysqli_set_charset($arr,'utf8');
//另一种方法
//mysqli_query('set names utf8;');


if(!$arr){
	exit('<h1>连接数据库失败!</h1>');
	}

//基于刚刚创建的连接对象执行一次查询操作
//得到的是一个查询对象,这个查询对象可以用来再在一行一行拿数据
$query=mysqli_query($arr,'select * from testlist;');

if(!$query){
	exit('<h1>查询失败!</h1>');
	}

//取数据,执行以下代码一次,取一行数据,所以可以通过循环的方法取得所有行的数据
$row=mysqli_fetch_assoc($query);
//遍历结果,获取数据
while($row){
	var_dump($row);
	echo '<br>';
	$row=mysqli_fetch_assoc($query);

	}

//获取完数据,释放数据
 mysqli_free_result($query);

//关闭连接
mysqli_close($arr);

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>

<body>
<a href="index.html">主页</a>
<a href=".\mysqltest1.php">mysqltest1</a>
<a href=".\mysqltest2.php">mysqltest2</a>
<!--为了便于维护,我们将表单提交给当前的页面-->
<form action="<?php
//由于文件重命名会导致代码修改,鲁棒性不强,所以此处动态添加页面的地址
echo $_SERVER['PHP_SELF'];?>" method="post">
<table>
    <tr>
        <td>用户名:</td>
        <td><input type="text" name="usename"></td>
    </tr>
    <tr>
        <td>密码:</td>
        <td><input type="text" name="password"></td>
    </tr>
    <tr>
        <td></td>
        <td><button>登录</button></td>
    </tr>
</table>
</form>
</body>
</html>