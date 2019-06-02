//1.使用require 方法加载 fs 核心模块
var fs = require('fs');
//2.读取文件
fs.readFile('./data/hello.txt',function (error,data) {
    console.log(data.toString());
});