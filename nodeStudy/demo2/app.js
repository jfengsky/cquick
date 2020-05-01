const http = require('http')

const server = http.createServer((req, res)=>{
    res.end('hello worlds')
})

server.listen('3000',()=>{})