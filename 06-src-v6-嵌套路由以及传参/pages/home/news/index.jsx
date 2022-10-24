import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NewsDetail from './detail';
import './index.css';

const news = [
  { id: '1', title: 'msg-1' },
  { id: '2', title: 'msg-2' },
  { id: '3', title: 'msg-3' },
];
export default class News extends Component {
  componentDidMount() {
    console.log('news is loading');
  }
  render() {
    return (
      <div style={{ padding: '10px 0px' }}>
        <ul className="news-list">
          {news.map((newObj) => {
            return (
              <li key={newObj.id}>
                <Link to={`/home/news/detail/${newObj.id}/${newObj.title}`}>
                  {newObj.title} (param)
                </Link>
              </li>
            );
          })}
        </ul>
        <Routes>
          <Route path="detail/:id/:title" element={<NewsDetail />}></Route>
        </Routes>
      </div>
    );
  }
}
