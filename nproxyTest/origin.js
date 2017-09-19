const express = require('express')
const app = express()
app.use(express.static('public'))

var server = app.listen(8080,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('应用实例，访问地址为 http://%s:%s',host,port);
})

app.get('/api/hello', function(req,res){
  let data = {}
  data["name"] = "lucy";
  data["age"] = "23";
  res.send(data);
})