//1.使用require 方法加载 fs 核心模块
var fs = require('fs');
//2.读取文件
fs.writeFile('./data/nihao.txt','da jia hao!!!',function (error) {
   if(error){
       console.log('写入失败')
   }else {
       console.log('写入成功')
   }
});