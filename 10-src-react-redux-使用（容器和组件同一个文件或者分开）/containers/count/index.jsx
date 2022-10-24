import React, { Component } from 'react'
import {connect} from 'react-redux'
import {countIncrease, countDecrease, countInCreaseAsync} from '../../redux/count/actions'

 class Count extends Component {
  increase = () => {
    console.log('increase props: ', this.props)
    this.props.increase(1)
  }

  decrease = () => {
    console.log('decrease props: ', this.props)
    this.props.decrease(1)
  }

  increaseAsync = () => {
    console.log('async props: ', this.props)
    this.props.increaseAsync(1, 500)
  }

  render() {
    console.log('props: ', this.props)
    return (
      <div>
        <span><h3>total:  / {this.props.data}</h3></span><br/>
        <button onClick={this.increase}>增加</button>
        <button onClick={this.decrease}>减少</button>
        <button onClick={this.increaseAsync}>异步增加</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {data: state}
}

function mapDispatchToProps(dispacth) {
  return {
    'increase': (data) => {dispacth(countIncrease(data))},
    'decrease': (data) => {dispacth(countDecrease(data))},
    'increaseAsync': (data, time) => {dispacth(countInCreaseAsync(data, time))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)