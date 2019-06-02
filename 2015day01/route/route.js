var express = require('express')


var router = express.Router()
var filesApi = require('../model/files.js')

router.get('/', function (req, res) {
    // var files = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    filesApi.getFiles('uploads', function (err, data) {
        if (err) {
            return console.log(err)
        }
        // console.log('结果===', data);
        res.render('index.html', {
            files: data
        })
    })

    // res.send('123')
})

router.get('/:fileName', function (req, res) {
    var filesName = req.params.fileName

    filesApi.getPics('uploads/' + filesName, function (err, data) {
        if (err) {
            return console.log(err)
        }
        console.log('pics结果===', data)
        var pics = []
        data.forEach(item => {
            pics.push({
                name: item,
                url: '/uploads/' + filesName + '/' + item
            })
        })
        res.render('pics.html', {
            pics: pics,
            filesName: filesName
        })
    })

    // res.send('123')
})

router.get('/api/name', function (req, res) {
        var data = {
            data: '成功！',
            state: 200
        }
        res.send(200, data)
    }
)


module.exports = router
