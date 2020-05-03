const HTTP = require('http')
const HTTPS = require('https')
const fs = require('fs')
const url = require('url')

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

const getData = imageUrl => {
    const { hostname, path, http,fileName } = splitUrl(imageUrl)
    const req = http.request({
        hostname,
        path
    }, res => {
        let arr = []
        res.on('data', buffer => {
            arr.push(buffer)
        })
        res.on('end', () => {
            let img = Buffer.concat(arr)
            fs.writeFile(`${fileName}`, img, () => {
                console.log('success')
            })
        })
    })

    req.end()
    req.on('error', error => {
        console.log(error)
    })
}

getData('https://wx2.sinaimg.cn/large/d96daab9gy1geegqwx3ukj21400u0gy1.jpg')