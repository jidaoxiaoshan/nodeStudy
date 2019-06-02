/*
* 数据处理
* */
let fs = require('fs')
let dbPath = './db.json'

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

exports.findAll = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

exports.add = function (student, callback) {
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

exports.updateById = function (student, callback) {
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

exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students
        let deleteId = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })
        students.splice(deleteId, 1)
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