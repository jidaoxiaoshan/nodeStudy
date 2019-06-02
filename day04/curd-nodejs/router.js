const fs = require('fs')
const express = require('express')

let router = express.Router()
let Student = require('./students')

router.get('/students', function (req, res) {
    Student.find(function (err, data) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('index.html', {
            fruits: data.fruits,
            students: data.students
        })
    })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
    Student.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    Student.findById(parseInt(req.query.id), function (err, student) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('edit.html', {
            student: student
        })
    })
})

router.post('/students/edit', function (req, res) {
    Student.update(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

router.get('/students/delete', function (req, res) {
    Student.delete(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

module.exports = router

