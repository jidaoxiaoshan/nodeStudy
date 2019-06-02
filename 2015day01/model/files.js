const fs = require('fs')

exports.getFiles = function (pathName, callBack) {
    fs.readdir(pathName, function (err, data) {
        if (err) {
            console.log(err);
            return callBack('error')
        }
        // console.log(data);
        callBack(null,data)
    })
}

exports.getPics = function (pathName, callBack) {
    fs.readdir(pathName, function (err, data) {
        if (err) {
            // console.log('读取文件的错误日志==',err);
            return callBack(err)
        }
        // console.log(data);
        callBack(null,data)
    })
}