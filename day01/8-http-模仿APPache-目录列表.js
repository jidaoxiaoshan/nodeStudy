//1.使用require 方法加载 http 核心模块
var http = require('http');
var fs = require('fs');
//2.使用http.createServer()方法创建一个web服务器

var server = http.createServer();
var wwwDir = 'F:/webstudy/server/www';
//3.注册request请求事件
server.on('request', function (request, response) {
    // console.log('收到请求，请求路径：' + request.url);
    var url = request.url;
    fs.readFile('./template.html', function (err, data) {
        if (err) {
            return response.end('404 Not Found.');
        }
        fs.readDir(wwwDir, function (err, files) {
            if (err) {
                return response.end('can not found www dir');
            }
            var content = '';
            files.forEach(function (item) {})
        });
        response.end(data);
    });
});
//4.绑定端口号，启动服务器
    server.listen(3000, function () {
        console.log("服务器启动成功，可以通过http://127.0.0.1:3000 访问");
    });
