import {split} from '../../redux/sparate/actions'
import {connect} from 'react-redux'
import Separate from '../../components/separate'

// 映射状态到组件属性（props）
function mapStateToProps(state) {
  return {data: state}
}

// 映射操作状态的方法到组件属性（props)
function mapDispatchToProps(dispacth) {
  return {
    'split': (data) => {dispacth(split(data))}
  }
}

// connect 容器连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Separate)