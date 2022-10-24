* 通过react lazy函数配合 import方法动态加载路由组件  =====>  路由组件将被分开打包
  ```
    const Home = lazy(() => import('./Home'))
  ```

*  通过Suspense 指定在加载路由打包文件之前显示一个前置等待页面
  ```
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        </Routes>
    </Suspense>
  ```