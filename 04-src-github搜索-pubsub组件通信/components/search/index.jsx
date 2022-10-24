import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';
import { subscribes } from '../list/index';

import './index.css';

export default class SearchComp extends Component {
  state = {
    searchValue: '',
  };
  doSearch = () => {
    if (!this.state.searchValue) {
      window.alert('搜索关键词不能为空');
      return;
    }
    axios
      .get(`https://api.github.com/search/users?q=${this.state.searchValue}`)
      .then(
        (rep) => {
          console.log('github users: ', rep.data);
          PubSub.publish(subscribes.doSearch, {users: rep.data.items, isLoading: false});
        },
        (err) => {
          console.log('err: ', err.message);
          PubSub.publish(subscribes.doSearch, { error: err.message,isLoading: false });
        }
      );
  };

  

  inputChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="search-container">
        <div>
          <span>搜索github 用户信息</span>
        </div>
        <input
          type="text"
          onChange={(e) => this.inputChange(e)}
          value={this.state.searchValue}
        />
        <button onClick={this.doSearch}>搜索</button>
      </div>
    );
  }
}
