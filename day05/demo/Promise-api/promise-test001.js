
let myPromise = require('./promise-test封装')
let p1 = myPromise.myReadFile('./package.json')
let p2 = myPromise.myReadFile('./package-lock.json')

p1
    .then(function (data) {
        console.log(data)
        return p2
    }, function (err) {
        console.log(err)
    })
    .then(function (data) {
        console.log(data)
    }, function (err) {
        console.log(err)
    })