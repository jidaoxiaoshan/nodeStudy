let fs = require('fs')

module.exports.myReadFile = function (readPath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(readPath, 'utf8', function (err, data) {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}


