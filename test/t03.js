//引入express包
const express = require('express')
const bodyParser = require('body-parser')
//初始化APP
const app = express()
//开放public文件夹
app.use('/data', express.static('data'))
app.use('/public', express.static('public'))
//配置express的模板文件，第一个参数为可打开的文件的后缀名
app.engine('html', require('express-art-template'))

//配置body-parser模板
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

let comments = [
    {
        name: '非共和国',
        content: '分公司看到回复科技收到货',
        dateTime: '2018/11/25'
    },
    {
        name: '防守打法',
        content: '很反感话费隔行',
        dateTime: '2018/11/25'
    },
    {
        name: '很反感',
        content: '黄金分割鸡飞狗叫',
        dateTime: '2018/11/25'
    },
    {
        name: '水电费',
        content: '鸡同鸭讲添加',
        dateTime: '2018/11/25'
    },
    {
        name: '好好干',
        content: '个电饭锅电饭锅的父',
        dateTime: '2018/11/25'
    },
    {
        name: '感到反感',
        content: '个电饭锅电饭锅电饭锅的覆盖',
        dateTime: '2018/11/25'
    },
    {
        name: '阿输入法是',
        content: '刚发的黑寡妇黄金甲覆盖 ',
        dateTime: '2018/11/25'
    },
    {
        name: '非共和国',
        content: '分公司看到回复科技收到货',
        dateTime: '2018/11/25'
    },
    {
        name: '非共和国',
        content: '分公司看到回复科技收到货',
        dateTime: '2018/11/25'
    },
    {
        name: '非共和国',
        content: '分公司看到回复科技收到货',
        dateTime: '2018/11/25'
    }
]
//发送get请求
app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    })
})

app.get('/post', function (req, res) {
    res.render('post.html')
})

app.post('/post', function (req, res) {
    let content = req.body
    content.dateTime = '2018/11/30 22:31'
    comments.unshift(content)
    res.redirect('/')
})

/*app.get('/pinglun', function (req, res) {
    let content = req.query
    content.dateTime = '2018/11/30 22:31'
    comments.unshift(content)
    res.statusCode = 302
    res.redirect('/')
})*/
//设置服务器监听端口
app.listen(3000, function () {
    console.log('express服务器启动')
})