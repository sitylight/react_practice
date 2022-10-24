import {addPerson} from '../../redux/actions/person'
import {connect} from 'react-redux'

import React, { Component } from 'react'
import { nanoid } from 'nanoid'

class Person extends Component {
  
  splitText = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    if (name && age) {
       const person = {id: nanoid(), name: name, age: age}
       this.props.addPerson(person)
       this.nameNode.value = ''
       this.ageNode.value = ''
    }
   
  }

  render() {
    console.log('person props: ', this.props)
    return (
      <div style={{marginTop: '100px'}}>
        <h3>上方组件count 为：{this.props.total}</h3>
        名字<input ref = {node => this.nameNode = node} type={'text'}></input>
        年龄：<input ref = {node => this.ageNode = node} type={'text'}></input>
        <button onClick={this.splitText}>添加记录</button>
        <br/>
        <ul>
          {
            this.props.persons.map(person => {
              return <li key={person.id}>名字: {person.name}, 年龄：{person.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}


// 映射状态到组件属性（props）
function mapStateToProps(state) {
  return {persons: state.rdx_persons, total: state.rdx_count}
}

// 映射操作状态的方法到组件属性（props)
function mapDispatchToProps(dispacth) {
  return {
    'addPerson': (data) => {dispacth(addPerson(data))}
  }
}

// connect 容器连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Person)