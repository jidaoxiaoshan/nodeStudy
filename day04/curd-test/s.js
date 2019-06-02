//引入mongoose 模块
let mongoose = require('mongoose')
//创建数据库
mongoose.connect('mongodb://localhost/test',({useNewUrlParser: true}))

//构建数据结构
let Schema = mongoose.Schema

let studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender:{
        type: Number,
        enum: [0,1],
        default: 0
    },
    age:{
        type: Number
    },
    hobbies: {
        type: String
    }
})
//导出数据库
module.exports = mongoose.model('Student', studentSchema)
