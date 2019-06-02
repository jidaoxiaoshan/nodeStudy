//引入核心模块
const express = require('express')
//引入第三方模块
const bodyParser = require('body-parser')
//引入自定义模块
const router = require('./router')
//创建express服务器
const app = express()

//开放public文件夹
app.use('/public/', express.static('./public/'))
// 开放 node_modules 文件夹
app.use('/node_modules/', express.static('./node_modules/'))

//配置模板引擎
app.engine('html', require('express-art-template'))

//配置body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(router)
// router(app)

//设置express服务器监听端口
app.listen(3000, function () {
    console.log('express 服务器启动')
})
