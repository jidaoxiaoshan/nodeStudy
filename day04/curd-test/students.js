/*
* 数据操作模块
* 只处理数据，不关心业务
* */

const fs = require('fs')

let dbPath = './db.json'

//根据id获取单个数据
exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students
        let stu = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null, stu)
    })
}
//获取所有数据
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}
//添加数据
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)

        let fileData = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
//更新数据
exports.update = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students
        student.id = parseInt(student.id)
        let stu = students.find(function (item) {
            return item.id === student.id
        })
        for (let key in student) {
            stu[key] = student[key]
        }

        let fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
//删除数据
exports.delete = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students
        let stuId = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })
        students.splice(stuId, 1)
        let filePath = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, filePath, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
