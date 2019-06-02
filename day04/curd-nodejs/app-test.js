//引入express模块
const express = require('express')
//引入body-parser第三方模板
const bodyParser = require('body-parser')
//引入 router 自定义模块
const router = require('./router')
//创建express服务器
let app = express()

//开放public 文件夹 和 node_modules 文件夹
app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

//配置express的模板引擎art-template
app.engine('html', require('express-art-template'))

//配置body-parser 模板引擎
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//调用router 自定义模块
app.use(router)

//设置服务器监听端口，并启动服务器
app.listen(3000, function () {
    console.log('.........')
})
