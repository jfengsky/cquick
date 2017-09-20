import * as express from 'express'
import * as proxy from 'http-proxy-middleware'

import layout from './layout'

const app: any = express()
const clientPort: number = 8989

const apiProxy = proxy('/tour', {
  target: 'http://localhost:3000',
  changeOrigin: true,
  router: {
    'localhost:3000': 'http://localhost:8989'
  }
})
app.use('/tour/*', apiProxy)


app.get('/', (req, res) => {
  res.send(layout);
});

// app.get('/tour/*', (req, res) => {
//   console.log('ccc')
// });

// app.post('/tour/*', (req, res) => {
//   console.log('aaa')
// })

app.listen(clientPort, () => {
  console.log(`Listening on: http://localhost:${clientPort}`);
});