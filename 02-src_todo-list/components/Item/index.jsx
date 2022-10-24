import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
  state = {
    mouseOn: false
  }
  checkTodo = (event) => {
    this.props.checkTodo(this.props.id, event.target.checked);
  };

  deleteTodo = () => {
    if (window.confirm('确定删除？')) {
      this.props.deleteTodo(this.props.id)
    }
  }

  mouseEnter = () => {
    this.setState({
      mouseOn: true
    })
  }

  mouseLeave = () => {
    this.setState({
      mouseOn: false
    })
  }


  render() {
    const { id, name, done } = this.props;
    const {mouseOn} = this.state
    return (
      <li key={id} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className={mouseOn ? 'item' : ''}>
        <label>
          <input
            type={'checkbox'}
            defaultChecked={done}
            onChange={(event) => {
              this.checkTodo(event);
            }}
          />
          <span>{name}</span>
          <button className='deleteBtn' onClick={this.deleteTodo} style={mouseOn ? {} : {display: 'none'}}>删除</button>
        </label>
      </li>
    );
  }
}
