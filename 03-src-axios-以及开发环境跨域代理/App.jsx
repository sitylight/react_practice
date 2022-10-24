import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudents = () => {
    axios.get('/api/students').then(rep => {
      console.log('query data: ', rep.data)
    }, err => {
      console.error(err)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudents}>获取学生信息</button>
      </div>
    )
  }
}
