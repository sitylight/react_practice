import React, { Component } from 'react'
import {connect} from 'react-redux'
import {countIncrease, countDecrease, countInCreaseAsync} from '../../redux/actions/count'

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
    console.log('count props: ', this.props)
    return (
      <div>
        <h3>下方组件人数为：{this.props.personSize}</h3>
        <span><h3>total:  / {this.props.total}</h3></span><br/>
        <button onClick={this.increase}>增加</button>
        <button onClick={this.decrease}>减少</button>
        <button onClick={this.increaseAsync}>异步增加</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {total: state.rdx_count, personSize: state.rdx_persons.length}
}

function mapDispatchToProps(dispacth) {
  return {
    'increase': (data) => {dispacth(countIncrease(data))},
    'decrease': (data) => {dispacth(countDecrease(data))},
    'increaseAsync': (data, time) => {dispacth(countInCreaseAsync(data, time))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)