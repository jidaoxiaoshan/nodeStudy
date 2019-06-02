//引入模块
let mongoose = require('mongoose')

let Schema = mongoose.Schema

//连接数据库
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})

//设计文档结构
let userSchema = new Schema({
    username: {
        type: String,
        required: true //表示 username 必须有，不可省略
    },
    password: {
        type: String,
        required: true //表示 password 必须有，不可省略
    },
    email: {
        type: String
    }
})

//将文档结构发布为模型
let User = mongoose.model('User', userSchema)

/*//实例化对象
let admin = new User({
    username: 'zss',
    password: '123456',
    email: 'admin@admin.com'
})

//=============增=================
admin.save(function (err, ret) {
    if (err) {
        console.log('保存失败！')
    }else {
        console.log('保存成功！！！')
        console.log(ret)
    }
})*/

//========================================================

//===============查===============
//查询所有
/*User.find(function (err, ret) {
    if (err) {
        console.log(err)
    } else {
        console.log(ret)
    }
})*/

//查询指定数据，返回一个数组，无论查到几个对象
/*User.find({
    username: 'zss'
}, function (err, ret) {
    if (err) {
        console.log(err)
    } else {
        console.log(ret)
    }
})*/

//只找指定的一个数据，返回一个对象
/*User.findOne({
    username: 'zss'
}, function (err, ret) {
    if (err) {
        console.log(err)
    } else {
        console.log(ret)
    }
})*/

//================================================

//===========删除数据=================
//删除所有符合条件的数据
/*User.remove({
    username: 'zss'
},function (err, ret) {
    if (err) {
        console.log(err)
    } else {
        console.log(ret)
    }
})*/

//================================================

//===========更新数据=================
//
/*User.findByIdAndUpdate('5c0518720de39c38287928e1',{
    username: 'css'
},function (err, ret) {
    if (err) {
        console.log('更新失败')
    } else {
        console.log('更新成功')
    }
})*/
