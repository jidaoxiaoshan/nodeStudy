<?PHP

//获取到需要修改项的id
if(empty($_GET['id'])){
	exit('<h1>请传入正确参数</h1>');
	}
$id = $_GET['id'];

//===========================================================
//建立数据连接

$conn=mysqli_connect('localhost','root','123456','baixiu');
	
	if(!$conn){
		$GLOBALS['error_message'] ='连接数据库失败';
		return;
		}
		
		//因为id是唯一的,所以添加 limit 1 ;可以只找到一个id就停止查询
	$query= mysqli_query($conn,"select * from students where id = {$id} limit 1;");
		
	if(!$query){
		$GLOBALS['error_message'] ='查询数据失败';
		return;
		}	
		
	$user = mysqli_fetch_assoc($query);	
	
	if(!$user){
		exit ('<hi>找不到要编辑的数据</h1>');
		}


//===========================================================


//修改信息


function edit_user(){
	global $user;
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
	$user['id']=$_POST['id'];
	$user['name']=$_POST['name'];
	$user['age']=$_POST['age'];
	$user['sex']=$_POST['sex'];
	$user['class']=$_POST['class'];
	$user['parent_name']=$_POST['parent_name'];
	$user['tel']=$_POST['tel'];
	
	var_dump($user);
	//修改数据,并覆盖原来的数据
		
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
	edit_user();	
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
<form action="<?php echo $_SERVER['PHP_SELF'].'?id='.$id ?>" method="post" enctype="multipart/form-data" autocomplete="off">
 <table>
 <caption>编辑"<?PHP echo $user['name'] ?>"信息</caption>
 	<?php if(isset($error_message)): ?>
    <tr>
    	<td>错误:</td>
        <td><?PHP echo $error_message ?></td>
    </tr>
    <?php endif ?>
 	<tr>
    	<td><label for="id">编号:</label></td>
        <td><input type="text" name="id" id="id" value="<?PHP echo $user['id'] ?>"></td>
    </tr>
    <tr>
    	<td><label for="name">姓名:</label></td>
        <td><input type="text" name="name" id="name" value="<?PHP echo $user['name'] ?>"></td>
    </tr>
    <tr>
    	<td><label for="age">年龄:</label></td>
        <td><input type="text" name="age" id="age" value="<?PHP echo $user['age'] ?>"></td>
    </tr>
    <tr>
    	<td><label for="sex">性别:</label></td>
        <td>
        <select id="sex" name="sex">
        	<option value="1"<?php echo $user['sex']==="1"? "selected" : "" ?>>男</option>
            <option value="0"<?php echo $user['sex']==="0"? "selected" : "" ?>>女</option>
        </select>
        </td>
    </tr>
    <tr>
    	<td><label for="class">班级:</label></td>
        <td><input type="text" name="class" id="class" value="<?PHP echo $user['class'] ?>"></td>
    </tr>
    <tr>
    	<td><label for="parent_name">家长姓名:</label></td>
        <td><input type="text" name="parent_name" id="parent_name" value="<?PHP echo $user['parent_name'] ?>"></td>
    </tr>
    <tr>
    	<td><label for="tel">联系电话:</label></td>
        <td><input type="text" name="tel" id="tel" value="<?PHP echo $user['tel'] ?>"></td>
    </tr>
    <tr>
    	<td></td>
        <td><input type="submit"></td>
    </tr>
 </table>
</form>
</body>
</html>