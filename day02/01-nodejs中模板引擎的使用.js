let template = require('art-template')
let fs = require('fs')
fs.readFile('./tpl.html', function (err, data) {
    if (err) {
      return   console.log('读取数据失败！')
    }
    let str = template.render(data.toString(), {
        h1: '你',
        h2: '我',
        h3: [1,2,3,4,5,6,7,8,9]
    })
    console.log(str)
})



