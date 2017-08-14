const fs = require('fs')

module.exports = {
  async readFile(filePath, callback) {
    return await fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.log('read file fail' + err)
      } else {
        callback(data)
      }
    })
  },
  readConfig(filePath) {
    return new Promise((resolve, reject) => {
      this.readFile(filePath, data => {
        let nproxyConfig = data.replace('module.exports = ', '')
        resolve(JSON.parse(nproxyConfig))
      })
    })
  }
}