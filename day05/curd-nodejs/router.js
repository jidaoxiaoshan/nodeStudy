const express = require('express')

let router = express.Router()
let Student = require('./students')

router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '西瓜'
            ],
            students: students
        })
    })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
    new Student(req.body).save(function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    let id = req.query.id.replace(/"/g, '')
    Student.findById(id, function (err, student) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('edit.html', {
            student: student
        })
    })
})

router.post('/students/edit', function (req, res) {
    let id = req.body.id.replace(/"/g, '')
    Student.findByIdAndUpdate(id, req.body, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

router.get('/students/delete', function (req, res) {
    let id = req.query.id.replace(/"/g, '')
    Student.findByIdAndRemove(id, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

module.exports = router

