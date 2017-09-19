const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()
app.use(express.static('public'))

//将服务器代理到localhost:8080端口上[本地服务器为localhost:4000]
const apiProxy = proxy('/api', { target: 'http://localhost:8080',changeOrigin: true })

//api子目录下的都是用代理
app.use('/api/*', apiProxy);

app.get('/index.html', function(req,res){
  res.sendFile(__dirname+'/src/index.html');
});

app.listen(8989, () => {
  console.log('Listening on: http://localhost:8989');
});