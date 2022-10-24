import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import './index.css';

export const subscribes = {
  doSearch: 'doSearch'
}

export default class ListComp extends Component {
  state = {
    users: [],
    isLoading: true,
    error: '',
    subscribes: [
      {
        name: subscribes.doSearch,
        token: '',
      },
    ],
  };

  componentDidMount() {
    let tokens = [];
    this.state.subscribes.forEach((sb) => {
      const token = PubSub.subscribe(sb.name, (_, data) => {
        console.log('订阅收到的消息', data);
        this.setState(data)
      });
      tokens.push({
        name: sb.name,
        token: token,
      });
    });
    this.setState({ subscribes: tokens });
  }

  componentWillUnmount() {
    this.state.subscribes.forEach((sb) => {
      PubSub.unsubscribe(sb.token);
    });
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="list-container">
        {isLoading
          ? 'Loading......'
          : users.map((user) => {
              return (
                <div key={user.id} className="list-item">
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    <div>
                      <img alt="avatar-img" src={user.avatar_url}></img>
                    </div>
                  </a>
                  <span>{user.login}</span>
                </div>
              );
            })}
      </div>
    );
  }
}
