import React, { Component } from 'react'
import Count from './containers/count'
import Person from './containers/person'

export default class App extends Component {
  render() {
    return (
      <div style={{width: '600px', height: '500px', margin: 'auto'}}>
         {/* 传入 store 到容器， 则不需要在容器导入 */}
        <Count/>
        <hr/>
        <Person/>
      </div>
    )
  }
}
