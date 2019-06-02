var mongoose = require('mongoose')
//连接 MongoDB 数据库
// mongoose.connect('mongodb://localhost/test', {useMongoClient: true})
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})

// mongoose.Promise = global.Promise

//创建一个模型
//就是设计数据库
//是动态的，非常灵活，只需要在代码中设计
//mongoose 这个包可以让设计编写非常简单
var Cat = mongoose.model('Cat', {name: String})

//实例化一个 Cat
var kitty = new Cat({name: 'Zildjian'})

//持久化保存 Kitty 实例
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('meow')
    }
})