import React, { Component } from 'react'
import Count from './containers/CountContainer'

export default class App extends Component {
  render() {
    return (
      <div style={{width: '400px', height: '500px', margin: 'auto'}}>
        <Count/>
      </div>
    )
  }
}
