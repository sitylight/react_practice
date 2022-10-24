import React, { Component } from 'react'
import store from '../../redux/count/store'
import {countIncrease, countDecrease, countInCreaseAsync} from '../../redux/count/actions'

export default class Count extends Component {
  increase = () => {
    console.log('store: ', store)
    store.dispatch(countIncrease(1))
    // this.setState({
    //   total: store.getState()
    // })
  }

  decrease = () => {
    console.log('store: ', store)
    store.dispatch(countDecrease(1))
    // this.setState({
    //   total: store.getState()
    // })
  }

  increaseAsync = () => {
    console.log('store: ', store)
    store.dispatch(countInCreaseAsync(1, 1000))
    // this.setState({
    //   total: store.getState()
    // })
  }

  render() {
    return (
      <div>
        <span><h3>total:  / {store.getState()}</h3></span><br/>
        <button onClick={this.increase}>增加</button>
        <button onClick={this.decrease}>减少</button>
        <button onClick={this.increaseAsync}>异步增加</button>
      </div>
    )
  }
}
