import React, { Component } from 'react'
import SearchComp from './components/search'
import ListComp from './components/list'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='main'>
        <SearchComp/>
        <ListComp/>
      </div>
    )
  }
}
