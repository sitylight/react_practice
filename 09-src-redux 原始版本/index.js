import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client'
import store from './redux/count/store';

const root = createRoot(document.getElementById('root'));

// 监测到store数据变化， 则触发react render 方法
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
