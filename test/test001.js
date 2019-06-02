var http = require('http')
var fs = require('fs')
var server = http.createServer()
var wwwDir = 'F:/webstudy/server/www/'
server.on('request', function (req, res) {
    res.setHeader('content-type', 'text/html; charset=utf-8')
    var url = req.url
    if (url === '/') {
        fs.readFile(wwwDir+'index.html', function (err, data) {
            if (err) {
                return res.end('获取文件失败')
            }
            res.end(data)
        })
    } else if (url === '/template') {
        fs.readFile(wwwDir+'template.html', function (err, data) {
            if (err) {
                return res.end('获取文件失败')
            }
            res.end(data)
        })
    } else {
        res.end('404 Not Found...')
    }
    console.log(url)
})
server.listen(5000, function () {
    console.log('启动成功')
})