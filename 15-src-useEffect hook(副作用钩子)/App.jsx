import React, {useState, useEffect} from 'react';
import root from '.';

// export default class App extends React.Component {
//   state = { total: 0 };
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
//   render() {
//     return (
//       <div style={{ width: '500px', margin: 'auto' }}>
//         <span>总数： {this.state.total}</span>
//         <br />
//         <hr />
//         <button onClick={this.add}>点击加</button>
//         <button onClick={this.unMount}>卸载组件</button>
//       </div>
//     );
//   }
// }

export default function App() {
  const [total, setTotal] = useState(0);

  // 
  useEffect(() => {
    let interval = setInterval(() => {
      console.log('timer:', '@@', total)
      // setTotal(total + 1)
      setTotal(total => total + 1)
    }, 1000);
    return () => {
      console.log('unmount interval')
      clearInterval(interval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('effect excecute....')
  }, [])

  function add() {
    setTotal(total+ 1)
  }

  function unmount(){
    root.unmount()
  }
  return (
    <div style={{width: '500px', margin: 'auto'}}>
        <span>总数： {total}</span><br/>
        <hr/>
        <button onClick={add}>点击加</button>
        <button onClick={unmount}>卸载组件</button>
      </div>
  )
}
