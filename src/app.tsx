/*
 * @Author: your name
 * @Date: 2021-12-30 10:41:21
 * @LastEditTime: 2022-01-06 14:12:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\src\app.ts
 */
import { Component } from "react";
import { Provider } from "react-redux";
import dva from "@/utils/dva";
import models from "@/models";
import "./app.less";

const dvaApp = dva.createApp({
  initialState: {},
  models,
});
const store = dvaApp.getStore();

class App extends Component {
  onLaunch(options) {
    console.log("onLaunch", options);
  }
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  onPageNotFound(obj) {
    console.log("onPageNotFound", obj);
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
