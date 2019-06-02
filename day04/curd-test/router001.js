let express = require('express')

let router = express.Router()
let Student = require('./students001')

router.get('/students', function (req, res) {
    Student.findAll(function (err, data) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.render('index.html', {
            students: data
        })
    })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
    Student.add(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    Student.findById(req.query.id, function (err, data) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.render('edit.html', {
            student: data
        })
    })
})

router.post('/students/edit', function (req, res) {
    Student.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.redirect('/students')
    })
})

router.get('/students/delete', function (req, res) {
    Student.deleteById(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.redirect('/students')
    })
})

module.exports = router
