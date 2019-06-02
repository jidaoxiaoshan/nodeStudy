//1.使用require 方法加载 http 核心模块
var http = require('http');
//2.使用http.createServer()方法创建一个web服务器
var server = http.createServer();
//3.注册request请求事件
server.on('request', function (request, response) {
    response.setHeader("Content-Type","text/plain;charset=utf-8");
    // console.log('收到请求，请求路径：' + request.url);
    var product = [
        {
            title: "苹果",
            price: 8888
        },
        {
            title: "菠萝",
            price: 6666
        },
        {
            title: "香蕉",
            price: 1999
        }
    ];
    if (request.url === '/') {
        response.write("首页");
        response.end();
    } else if (request.url === '/login') {
        response.write("登录");
        response.end();
    } else if (request.url === '/register') {
        response.write("注册");
        response.end();
    } else if (request.url === '/product') {
        response.end(JSON.stringify(product));
    } else {
        response.end('404 not found');
    }

});
//4.绑定端口号，启动服务器
server.listen(3000, function () {
    console.log("服务器启动成功，可以通过http://127.0.0.1:3000 访问")
});
