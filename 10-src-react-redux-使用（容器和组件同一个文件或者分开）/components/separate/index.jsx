import React, { Component } from 'react'

export default class Separate extends Component {
 

  splitText = () => {
    const value = this.inputNode.value
    if (value) {
      this.props.split(value)
    }
  }

  render() {
    console.log('separate props: ', this.props)
    return (
      <div style={{marginTop: '100px'}}>
        <input ref = {c => this.inputNode = c} type={'text'}></input>
        <button onClick={this.splitText}>分解</button>
        <br/>
        <span>分解内容: {this.props.data}</span>
      </div>
    )
  }
}
