
const express = require('express')
const Students = require('./s')
const router = express.Router()

router.get('/students', function (req, res) {
    Students.find(function (err, data) {
        if (err) {
            return res.status(500).send('server error...')
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
    new Students(req.body).save(function (err) {
        if (err) {
            return res.status(500).send('server error...')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    let id = req.query.id.replace(/"/g, '')
    Students.findById(id, function (err, data) {
        if (err) {
            return res.status(500).send('server error...')
        }
        res.render('edit.html',{
            student: data
        })
    })
})

router.post('/students/edit', function (req, res) {
    let id = req.body.id.replace(/"/g, '')
    Students.findByIdAndUpdate(id, req.body, function (err) {
        if (err) {
            return res.status(500).send('server error...')
        }
        res.redirect('/students')
    })
})

router.get('/students/delete', function (req, res) {
    let id = req.query.id.replace(/"/g, '')
    Students.findByIdAndRemove(id, function (err) {
        if (err) {
            return res.status(500).send('server error...')
        }
        res.redirect('/students')
    })
})

module.exports = router
