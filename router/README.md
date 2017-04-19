目录结构

    |- client 客户端渲染模式服务端
      |- clientServe.js
      |- register.js 启动服务用
    |- dist 打包后的文件目录
      |- serve.js 服务端渲染模式启动文件
      |- bundle.js 
      |- vendor.js 客户端渲染模式脚本文件
    |- server 服务端渲染模式服务端代码
      |- html.js react编译成html
      |- index.js 启动文件
    |- src 开发目录
    |- views 服务端渲染模式模板文件

服务端渲染启动命令

    npm start

客户端渲染启动命令

    npm run startClient