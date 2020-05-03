/**
 * 保存图片
 */
const HTTP = require('http')
const HTTPS = require('https')
const fs = require('fs')
const url = require('url')

const formatImageList = (list, dir) => {
    if (!list || !list.length) {
        console.log('图片目录为空')
    } else {
        console.log(`开始下载${list.length}张图片`)
        list.map((item, index) => {
            getData(`https:${item}`, dir, index)
        })
    }
}

const splitUrl = imageUrl => {
    let urlObj = url.parse(imageUrl)
    let http
    if (urlObj.protocol = 'http:') {
        http = HTTP
    } else {
        http = HTTPS
    }

    let pathList = urlObj.pathname.split('/')
    let fileName = pathList[pathList.length - 1]

    return {
        hostname: urlObj.hostname,
        path: urlObj.path,
        http,
        fileName
    }
}

const getData = (imageUrl, dir, index) => {
    const { hostname, http, fileName } = splitUrl(imageUrl)
    const filePath = `/large/${fileName}`
    const req = http.request({
        hostname,
        path: filePath
    }, res => {
        let arr = []
        res.on('data', buffer => {
            arr.push(buffer)
        })
        res.on('end', () => {
            let img = Buffer.concat(arr)
            fs.writeFile(`./${dir}/${fileName}`, img, () => {
                console.log(`${index + 1}:success`)
            })
        })
    })

    req.end()
    req.on('error', error => {
        console.log(error)
    })
}

const save = data => {
    const { imageSrcList, name, time } = data
    let dirName = name + time
    let hasDir = fs.existsSync(`./${dirName}`)
    if (!hasDir) {
        fs.mkdirSync(`./${dirName}`)
        console.log('创建目录成功')
        formatImageList(imageSrcList, dirName)
    } else {
        console.log('目录存在，创建失败')
    }
}

module.exports = save
// getData('https://wx2.sinaimg.cn/large/d96daab9gy1geegqwx3ukj21400u0gy1.jpg')

// fs.mkdirSync('aaa')