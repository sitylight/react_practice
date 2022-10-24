import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {id: nanoid(), name: '玩游戏', done: false},
      {id: nanoid(), name: '吃早餐', done: true}
    ]
  }

  addTodo = (todo) => {
    this.setState({todos: [todo, ...this.state.todos]})
  }

  checkTodo = (id, done) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = done
        return todo
      }
      return todo
    })
    this.setState({
      todos: [...newTodos]
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {return todo.id !== id})
    })
  }

  delChecked = () => {
    this.setState({
      todos: [...this.state.todos.filter(todo => !todo.done)]
    })
  }

  render() {
    const {todos} = this.state
    const checkedCount = todos.reduce((preVal, todo) => {
      if (todo.done) return preVal + 1
      return preVal
    }, 0);

    return (
      <div className='app'>
        <Header addTodo={this.addTodo}/>
        <List todos={this.state.todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo}/>
        <Footer checkedCount={checkedCount} totalCount={todos.length} delChecked={this.delChecked}/>
      </div>
    )
  }
}
