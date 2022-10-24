State Hook 让函数也可以有state状态， 进行状态的读写操作
  语法 const [xx, setXx] = React.useState(initVal)
setXx 两种写法：
  setXx(newValue): 参数为非函数值，直接指定新的状态值， 内部用其覆盖原有的值
  setXx(value => newValue): 参数为函数，接收原本的状态值， 返回系的状态值，内部用其覆盖有的值