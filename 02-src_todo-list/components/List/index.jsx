import React, { Component } from 'react'
import Item from '../Item';
import './index.css'

export default class List extends Component {
  render() {
    const {todos, checkTodo, deleteTodo} = this.props;
    return (
      <div>
        <ul>
          {
            todos.map((todo)=>{
              return <Item key={todo.id} {...todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
            })
          }
        </ul>
      </div>
    )
  }
}
