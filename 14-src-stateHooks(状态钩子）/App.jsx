import React from 'react'

// export default class App extends React.Component {
//   state = {total: 0}
//   add = () => {
//     const {total} = this.state
//     // setSate 是一个异步函数， 结果会在render之后调用回调
//     this.setState({total: total + 1}, () => {
//       console.log(this.state)
//     })
//   }
//   render() {
//     return (
//       <div style={{width: '500px', margin: 'auto'}}>
//         <span>总数： {this.state.total}</span><br/>
//         <hr/>
//         <button onClick={this.add}>点击加</button>
//       </div>
//     )
//   }
// }



export default function App() {
  const [total, setTotal] = React.useState(0);

  function add() {
    setTotal(total+ 1)
  }

  return (
    <div style={{width: '500px', margin: 'auto'}}>
        <span>总数： {total}</span><br/>
        <hr/>
        <button onClick={add}>点击加</button>
      </div>
  )
}
