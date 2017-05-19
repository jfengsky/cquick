const iconv = require('iconv-lite')
const fetch = require('node-fetch')

function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}

// 解决gb2312乱码问题

fetch('http://www.github.com',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'},
  body: JSON.stringify({})
}).then(res => {
  return res.buffer()
  // console.log(res.body)
  // return res.text()
}).then(buf => {
  console.log(buf)
  return iconv.decode( new Buffer(buf), 'gb2312').toString()
}).then(data=> {
  console.log(data)
})