let express = require('express')
let bodyParser = require('body-parser')
let router = require('./router001')

let app = express()

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(router)

app.listen(3000, function () {
    console.log('启动。。。。。。')
})