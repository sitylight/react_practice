Effect Hook 可以在函数组件中执行副作用操作
副作用操作：
  发送ajax请求
  设置订阅或者启动定时器
  手动更改真实的dom

语法：
  useEffect(() => {
    // 副作用操作
    return () => {
      // 清除定时器，取消订阅等
    }
  }, [stateValue])  // 如果指定的是[], 回调函数只会在第一次render之后执行


useEffect 等同类组件中一下函数的组合：
  componentDidAmount()
  componentDidUpdate()
  componentWillUnmount()