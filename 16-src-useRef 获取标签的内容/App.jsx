import React, {useState, useRef} from 'react';
import root from '.';

// export default class App extends React.Component {
//   state = { total: 0 };
//   inputRef = React.createRef()
//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         total: this.state.total + 1,
//       });
//     }, 1000);
//   }

//   // componentWillUnmount() {
//   //   clearInterval(this.interval)
//   // }

//   unMount() {
//     root.unmount()
//   }

//   add = () => {
//     const { total } = this.state;
//     // setSate 是一个异步函数， 结果会在render之后调用回调
//     this.setState({ total: total + 1 }, () => {
//       console.log(this.state);
//     });
//   };

//   getRefVal = () =>  {
//     console.log(this.inputRef)
//     alert(this.inputRef.value)
//   }
//   render() {
//     return (
//       <div style={{ width: '500px', margin: 'auto' }}>
//         <span>总数： {this.state.total}</span><br/>
//         <input type={'text'} ref={c => this.inputRef = c}></input>
//         <br />
//         <hr />
//         <button onClick={this.add}>点击加</button>
//         <button onClick={this.unMount}>卸载组件</button>
//         <button onClick={this.getRefVal}>获取输入框值</button>
//       </div>
//     );
//   }
// }

export default function App() {
  const [total, setTotal] = useState(0);
  let inputRef = useRef()

  function add() {
    setTotal(total+ 1)
  }

  function unmount(){
    root.unmount()
  }

  function getRefVal() {
    console.log(inputRef)
    alert(inputRef.value)
  }

  return (
    <div style={{width: '500px', margin: 'auto'}}>
        <span>总数： {total}</span><br/>
        <input type={'text'} ref={c => inputRef = c}></input>
        <hr/>
        <button onClick={add}>点击加</button>
        <button onClick={unmount}>卸载组件</button>
        <button onClick={getRefVal}>获取输入框值</button>
      </div>
  )
}
