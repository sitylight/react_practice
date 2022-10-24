* 用nodejs express 编写并启动http 服务
  1. 启动： node {path}/nodejs-server.js

------

* 开发环境跨域配置（两种方法）
  1. package.json 配置proxy 属性 ("proxy": "http://127.0.0.1:5000")
  2. 在src根目录新建setupProxy.js (修改之后项目必须重启)  
