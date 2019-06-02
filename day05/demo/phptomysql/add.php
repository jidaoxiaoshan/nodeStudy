<?PHP

function add_user(){
	//验证表单非空
	if(empty($_POST['id'])){
		$GLOBALS['error_message'] ='请输入编号';
		return;
		}
	if(empty($_POST['name'])){
		$GLOBALS['error_message'] ='请输入姓名';
		return;
		}
	if(empty($_POST['age'])){
		$GLOBALS['error_message'] ='请输入年龄';
		return;
		}
	if(empty($_POST['sex'])){
		$GLOBALS['error_message'] ='请选择性别';
		return;
		}
	if(empty($_POST['class'])){
		$GLOBALS['error_message'] ='请输入班级';
		return;
		}
	if(empty($_POST['parent_name'])){
		$GLOBALS['error_message'] ='请输入家长姓名';
		return;
		}
	if(empty($_POST['tel'])){
		$GLOBALS['error_message'] ='请输入联系电话';
		return;
		}
	
	//获取到表单传递过来的值
	$id=$_POST['id'];
	$name=$_POST['name'];
	$age=$_POST['age'];
	$sex=$_POST['sex'];
	$class=$_POST['class'];
	$parent_name=$_POST['parent_name'];
	$tel=$_POST['tel'];
	
	
	//添加到新数据当中
		echo "123";
	$conn=mysqli_connect('localhost','root','123456','baixiu');
	
	if(!$conn){
		$GLOBALS['error_message'] ='连接数据库失败';
		return;
		}
		
	$query= mysqli_query($conn,"insert into students values('{$id}','{$name}','{$age}','{$sex}','{$class}','{$parent_name}','{$tel}')");
		
	if(!$query){
		$GLOBALS['error_message'] ='查询数据失败';
		return;
		}	
	echo "123";
	$affrcted=mysqli_affected_rows($conn);
	var_dump($affrcted);
	if($affrcted!==1){
		$GLOBALS['error_message'] ='添加数据失败';
		return;
		}	
		
	//保存新数据
	
	header('Location: mysqltest2.php');

	}
	
if($_SERVER['REQUEST_METHOD']==='POST'){
	add_user();	
	}

?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>
<a href="mysqltest2.php">返回</a>
<form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" enctype="multipart/form-data" autocomplete="off">
 <table>
 <caption>添加学生信息</caption>
 	<?php if(isset($error_message)): ?>
    <tr>
    	<td>错误:</td>
        <td><?PHP echo $error_message ?></td>
    </tr>
    <?php endif ?>
 	<tr>
    	<td><label for="id">编号:</label></td>
        <td><input type="text" name="id" id="id"></td>
    </tr>
    <tr>
    	<td><label for="name">姓名:</label></td>
        <td><input type="text" name="name" id="name"></td>
    </tr>
    <tr>
    	<td><label for="age">年龄:</label></td>
        <td><input type="text" name="age" id="age"></td>
    </tr>
    <tr>
    	<td><label for="sex">性别:</label></td>
        <td>
        <select id="sex" name="sex">
        	<option value="1">男</option>
            <option value="0">女</option>
        </select>
        </td>
    </tr>
    <tr>
    	<td><label for="class">班级:</label></td>
        <td><input type="text" name="class" id="class"></td>
    </tr>
    <tr>
    	<td><label for="parent_name">家长姓名:</label></td>
        <td><input type="text" name="parent_name" id="parent_name"></td>
    </tr>
    <tr>
    	<td><label for="tel">联系电话:</label></td>
        <td><input type="text" name="tel" id="tel"></td>
    </tr>
    <tr>
    	<td></td>
        <td><input type="submit"></td>
    </tr>
 </table>
</form>
</body>
</html>