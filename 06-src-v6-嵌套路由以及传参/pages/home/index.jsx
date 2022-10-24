import React, { Component } from 'react';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import News from './news';
import Hot from './hot';

import './index.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        主页
        <hr />
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/home/news">新闻</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/home/hot">头条</NavLink>
          </li>
        </ul>
        <div>
          <Routes>
            <Route path="*" element={<Navigate to='news'/>}></Route>
            <Route path="news/*" element={<News/>} />
            <Route path="hot/*" element={<Hot/>} />
          </Routes>
        </div>
      </div>
    );
  }
}
