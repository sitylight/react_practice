import React, {lazy, Suspense} from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Loading from './components/Loading'
import './App.less'

const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))

export default function LazyLoad() {
  return (
    <div>
      <div style={{width: '600px', height: '500px', margin: 'auto', display: 'flex'}}>
        <div style={{backgroundColor: 'skyblue'}}>
          <ul>
            <li><NavLink to='/home' className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink></li>
            <li><NavLink to='/about' className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink></li>
          </ul>
        </div>
        <div style={{backgroundColor: 'orange', width: '100vw', marginLeft: '20px'}}>
          {/* 通过Suspense 指定在加载路由之前显示一个前置等待页面*/}
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  )
}
