const express = require('express')
const bodyParser = require('body-parser')
const router = require('./r')

const app = express()

//开放共用文件夹
app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

//配置模板express-art-template  为了render
app.engine('html', require('express-art-template'))

//配置body-parser  为了post
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//调用router路由接口
app.use(router)

//设置监听端口3000，启动服务器
app.listen(3000, function () {
    console.log('启动！！！！！！！！！')
})