//1.使用require 方法加载 http 核心模块
var http = require('http');
//2.使用http.createServer()方法创建一个web服务器
var server = http.createServer();
//3.注册request请求事件
server.on('request', function () {
    console.log('收到氢气');
});
//4.绑定端口号，启动服务器
server.listen(3000,function () {
    console.log("服务器启动成功，可以通过http://127.0.0.1:3000 访问")
});
