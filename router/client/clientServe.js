import express from 'express'
import path from 'path'

const app = express()

const clientTemplate = `
  <html>
    <head>
      <title>client</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="/static/vendor.js"></script>
      <script src="/static/bundle.js"></script>
      <script>
        window.__INITSTATE__ = {}
      </script>
    </body>
  </html>
`

app.use('/static', express.static('./dist'))

app.get('/', function(req, res, next) {
  res.status(200).send(clientTemplate)
})

app.listen(3300, () => console.log('start server: http://localhost:3300'))