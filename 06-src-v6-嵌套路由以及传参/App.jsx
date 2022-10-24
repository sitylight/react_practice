import React, { Component } from 'react';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div style={{ width: '700px', margin: 'auto' }}>
        <Header />
        <hr/>
        <div className="container">
          <div>
            <ul>
              <li>
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/home">Home</NavLink>
              </li>
            </ul>
          </div>
          <div style={{marginLeft: '100px'}}>
            <Routes>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/home/*' element={<Home/>}></Route>
              <Route path='*' element={<Navigate to='/about'/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
