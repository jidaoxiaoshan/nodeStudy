var http = require('http')
var fs = require('fs')
var template = require('art-template')
var server = http.createServer()
var wwwDir = 'F:/webstudy/server/www'
server.on('request', function (req, res) {
    var url = req.url
    fs.readFile('./template.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found！')
        }
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not find www dir！')
            }
            htmlStr = template.render(data.toString(), {
                files: files
            })
            res.end(htmlStr)
        })
    })
})

server.listen(3000, function () {
    console.log('启动成功！')
})

