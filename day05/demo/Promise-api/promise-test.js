let fs =require('fs')
let p1 = new Promise(function (resolve , reject) {
    fs.readFile('./package.json', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})

let p2 = new Promise(function (resolve , reject) {
    fs.readFile('./package-lock.json', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})

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