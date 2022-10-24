import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { subscribes } from '../list/index';

import './index.css';

export default class SearchComp extends Component {
  state = {
    searchValue: '',
  };
  doSearch = async () => {
    if (!this.state.searchValue) {
      window.alert('搜索关键词不能为空');
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${this.state.searchValue}`);
      const result = await response.json();
      
      console.log(result.items)
      PubSub.publish(subscribes.doSearch, { users: result.items, isLoading: false });
    } catch (error) {
      console.log('err: ', error);
      PubSub.publish(subscribes.doSearch, {error: error.message,isLoading: false });
    }
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
