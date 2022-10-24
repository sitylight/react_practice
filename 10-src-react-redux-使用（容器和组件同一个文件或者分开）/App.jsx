import React, { Component } from 'react'
import Count from './containers/count'
import store from './redux/count/store'
import separateStore from './redux/sparate/store'
import Separate from './containers/separate'

export default class App extends Component {
  render() {
    return (
      <div style={{width: '400px', height: '500px', margin: 'auto'}}>
         {/* 传入 store 到容器， 则不需要在容器导入 */}
        <Count store={store}/>
        <hr/>
        <Separate store={separateStore}/>
      </div>
    )
  }
}
