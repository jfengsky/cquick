/**
 * 保存图片
 */
const HTTP = require('http')
const HTTPS = require('https')
const fs = require('fs')
const url = require('url')

const rootDir = 'images'

const formatImageList = (list, dir) => {
    if (!list || !list.length) {
        console.log('图片目录为空')
    } else {
        console.log(`开始下载${list.length}张图片`)
        let imageNumber = list.length
        let imageIndex = 0
        list.map((item, index) => {
            if (/(http:|https:)/i.test(item)) {
                item = item.replace(/(http:|https:)/i, '')
            }
            getData(`https:${item}`, dir, index, function () {
                imageIndex++
                if (imageNumber === imageIndex) {
                    console.log('------finished-------')
                }
            })
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

const getData = (imageUrl, dir, index, callback) => {
    const { hostname, http, fileName } = splitUrl(imageUrl)
    const filePath = `/large/${fileName}`
    const req = http.request({
        hostname,
        path: filePath
    }, res => {
        let arr = []
        let startTime = new Date().getTime()
        res.on('data', buffer => {
            arr.push(buffer)
        })
        res.on('end', () => {
            let img = Buffer.concat(arr)
            if (img.length > 1000) {
                fs.writeFile(`./${rootDir}/${dir}/${fileName}`, img, () => {
                    let endTime = new Date().getTime()
                    let saveTime = endTime - startTime
                    console.log(`${index + 1}:success ${saveTime/1000}s`)
                    callback()
                    img = null
                })
            }
        })
    })

    req.end()
    req.on('error', error => {
        console.log(error)
    })
}

const formatTime = time => {
    let dateObj = new Date(time - 0)
    return `${dateObj.getFullYear()}.${dateObj.getMonth() + 1}.${dateObj.getDate()}.${dateObj.getHours()}.${dateObj.getMinutes()}.${dateObj.getSeconds()}`
}

const save = data => {
    const { imageSrcList, name, time } = data
    let dirName = `${name}${formatTime(time)}`
    let hasDir = fs.existsSync(`./${rootDir}/${dirName}`)
    if (!hasDir) {
        fs.mkdirSync(`./${rootDir}/${dirName}`)
        console.log('创建目录成功')
        console.log(name)
        formatImageList(imageSrcList, dirName)
    } else {
        console.log('目录存在，创建失败')
    }
}

module.exports = save