<?php
//案例操作数据库,形成一个表格显示在网页上

//解决exit()输出的中文字符为乱码
header("Content-type: text/html; charset=UTF8");

//1.建立连接
$conn=mysqli_connect('localhost','root','123456','baixiu');

if(!$conn){
	exit('<h1>连接数据库失败!</h1>');
	}

//2.开始查询
$query=mysqli_query($conn,'select * from students');

if(!$query){
	exit('<h1>查询数据失败!</h1>');
	}

//3.遍历结果


//4.释放数据,断开连接


?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>

<body>
<a href="index.html">主页</a>
<table>
<caption>小学生信息表</caption>
<thead>
	<tr><td><a href="add.php">添加</a></td></tr>
	<tr>
    	<th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>班级</th>
        <th>家长姓名</th>
        <th>联系电话</th>
         <th>删除</th>
          <th>编辑</th>
    </tr>
</thead>
<tbody>
	<?php while($item=mysqli_fetch_assoc($query)): ?>
    	<tr>
    		<td><?php echo $item['id']; ?></td>
            <td><?php echo $item['name']; ?></td>
            <td><?php echo $item['age']; ?></td>
            <td><?php echo $item['sex']==0?'女':'男'; ?></td>
            <td><?php echo $item['class']; ?></td>
            <td><?php echo $item['parent_name']; ?></td>
            <td><?php echo $item['tel']; ?></td>
        	<td><a href="delete.php?id=<?php echo $item['id']; ?>">删除</a></td>
            <td><a href="edit.php?id=<?php echo $item['id']; ?>">编辑</a></td>
    	</tr>
    <?php endwhile ?>
</tbody>
</table>
</body>
</html>