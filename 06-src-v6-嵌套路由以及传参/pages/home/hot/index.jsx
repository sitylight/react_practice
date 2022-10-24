import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import HotDetail from './detail'
import './index.css'

const hots = [
  {id : '1', title: '头条1'},
  {id : '2', title: '头条2'},
  {id : '3', title: '头条3'},
]

export default class Hot extends Component {
  render() {
    return (
      <div className='hot-container'>
        <ul>
          {hots.map((newObj) => {
            return (
              <li key={newObj.id}>
                <Link to={`/home/hot/detail?id=${newObj.id}&title=${newObj.title}`}>{newObj.title} (search)</Link>
                <Link to={'/home/hot/detail'} state={{id: newObj.id, title: newObj.title}}>{newObj.title} (state)</Link>
              </li>
            );
          })}
        </ul>
        <Routes>
          <Route path="detail" element={<HotDetail/>}></Route>
        </Routes>
      </div>
    )
  }
}
