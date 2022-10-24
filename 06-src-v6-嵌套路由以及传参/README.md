* 添加路由支持：
  yarn add react-router-dom

* index.js 根结点挂载：
  import {createRoot} from 'react-dom/client'
  const root = createRoot(document.getElementById('root'));


* index.js 添加路由：
  <BrowserRouter>
    <App />
  </BrowserRouter>

* v6实现嵌套路由, 类组件获取参数
  1. param 传参： /homenews/detail
  2. search 和 state 传参： /home/hot/detail

