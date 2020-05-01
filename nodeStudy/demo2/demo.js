const os = require('os')

const cpus = os.cpus()

console.log(cpus.length)

const memory = os.totalmem();
console.log(memory/1024/1024/1024)

const free = os.freemem()

console.log(free/1024/1024/1024)

const http = require('http')

const server = http.createServer((req, res)=>{
res.end('hello')
})

server.listen(3000,() => {})