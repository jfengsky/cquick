const https = require('https')
const fs = require('fs')
const path = require('path')

const pageurl = 'https://www.dbmeinv.com/'

const downloadPic = url => {
  https.get(url, res => {
    res.setEncoding('binary') //指定编码
    let str = ''
    res.on('data', (chunk) => {
      str += chunk //获取图片
    })

    res.on('end', () => {
      let pic = path.join('a', path.basename(url))
      fs.writeFile(pic, str, 'binary', (err) => {
        if (err) throw err;
        console.info(`下载${pic}成功`)
      })
    })

  })
}

https.get(pageurl, res => {
  let str = ""
  res.on('data', chunk => {
    str += chunk
  })
  res.on('end', () => {
    let reg = new RegExp(/src="(https:\/\/[a-zA-Z0-9./]+)"\s*\/>/, "g")
    let imgs = []
    let temp
    while ((temp = reg.exec(str)) != null) {
      imgs.push(temp[1]); //其中temp[1]表示（）中的内容，子模式，反向引用
    }
    console.log(imgs)
    imgs.forEach((item) => {
      downloadPic(item);
    });
  })
})