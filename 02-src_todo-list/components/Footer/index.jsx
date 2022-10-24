import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  delChecked = () => {
    if (window.confirm('确山删除所有选中?')) {
      this.props.delChecked()
    }
  }
  render() {
    const {checkedCount, totalCount } = this.props

    return (
      <div className='footer-container'>
        <span>已选{checkedCount}/全部{totalCount}</span>
        <button className='footer-del-btn' onClick={this.delChecked}>删除全部已选</button>
      </div>
    )
  }
}
