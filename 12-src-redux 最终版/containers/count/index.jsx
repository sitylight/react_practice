import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  increaseAction,
  decreaseAction,
  increaseAsyncAction,
} from '../../redux/actions/count';

class Count extends Component {
  increase = () => {
    this.props.fnc_increase(1);
  };

  decrease = () => {
    this.props.fnc_decrease(1);
  };

  increaseAsync = () => {
    this.props.fnc_increaseAsync(1, 500);
  };

  render() {
    return (
      <div>
        <h3>下方组件人数为：{this.props.personSize}</h3>
        <span>
          <h3>total: / {this.props.total}</h3>
        </span>
        <br />
        <button onClick={this.increase}>增加</button>
        <button onClick={this.decrease}>减少</button>
        <button onClick={this.increaseAsync}>异步增加</button>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {total: state.rdx_count, personSize: state.rdx_persons.length}
// }

// function mapDispatchToProps(dispacth) {
//   return {
//     fnc_increase: (data) => {dispacth(increaseAction(data))},
//     fnc_decrease: (data) => {dispacth(decreaseAction(data))},
//     fnc_increaseAsync: (data, time) => {dispacth(increaseAsyncAction(data, time))},
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Count)

// 精简实现方式
export default connect(
  (state) => ({ total: state.rdx_count, personSize: state.rdx_persons.length }),
  {
    fnc_increase: increaseAction,
    fnc_decrease: decreaseAction,
    fnc_increaseAsync: increaseAsyncAction,
  }
)(Count);
