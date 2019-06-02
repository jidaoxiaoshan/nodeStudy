//引入MySQL 模块
let mysql = require('mysql')

//创建连接数据库

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'baixiu'
})

//连接数据库
connection.connect()

//执行数据操作
connection.query('SELECT * FROM students', function (err, data) {
    if (err) throw err
    console.log('查询结果：', data[0].name)
})

//断开数据库连接
connection.end()