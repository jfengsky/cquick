import http from 'http'
import React from 'react'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Root from './views/index'
import Layout from './views/Layout'

// let cnt = renderToString(<Layout />)

// let page = renderToString(<Root title={'test'} content={cnt} />)

http.createServer(function(req, res){
    const context = {}
    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            <Layout />
        </StaticRouter>
    )

    res.writeHead(200, {"Content-Type": "text/html"})
    res.write(html)
    res.end()
}).listen(8081)