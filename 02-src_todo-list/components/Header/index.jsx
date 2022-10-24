import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  keyupHandler = (event) => {
    if (event.keyCode !== 13) return
    if (!event.target.value) {
      window.confirm('值不允许未空')
      return
    }
    console.log('event: ', event)
    const newTodo = {
      id: nanoid(),
      name: event.target.value,
      done: false
    }
    this.props.addTodo(newTodo)
    event.target.value = ''
  }
  render() {
    return (
      <div className='header-container'>
        <input className='header-input' onKeyUp={(event) => {this.keyupHandler(event)}} type={'text'}></input>
      </div>
    )
  }
}
