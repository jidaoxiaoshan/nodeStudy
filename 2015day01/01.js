var express = require("express")
var bodyParser = require('body-parser')

var app = express()

app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())
app.use('', function(req,res,next) {
    console.log('ip===',req.ip);
    next()
})

app.post('/', function (req, res) {
    res.setHeader('content-type', 'text/plain')
    console.log('you post:', req.body);
    res.write('you post:')
    res.end(JSON.stringify(req.body))
})


app.listen(3000, function () {
    console.log('服务器3000you端口启动......');
})