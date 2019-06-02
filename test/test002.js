//获取核心模块
var http = require('http')
var fs = require('fs')
//新建一个服务器
var server = http.createServer()
//定义站点根目录
var wwwDir = 'F:/webstudy/server/www'
//发送请求
server.on('request', function (req, res) {
    //设置网站的各类文件的显示方式
    res.setHeader('content-type', 'text/html;charset=utf-8')
    //获取当前路径
    var url = req.url
    var filePath = '/default.html'
    if (url !== '/') {
        filePath = url
    }
    fs.readFile(wwwDir + filePath, function (err, data) {
        if (err) {
            // console.log(wwwDir + filePath + '======='+ url + '=======' + data)
            return res.end('获取文件失败')
        }
        res.end(data)
    })
})
//为服务器设置一个端口并监听服务器是否启动成功
server.listen(3000, function () {
    console.log('服务器启动成功')
})