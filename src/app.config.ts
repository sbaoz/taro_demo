/*
 * @Author: your name
 * @Date: 2021-12-30 10:41:21
 * @LastEditTime: 2021-12-30 15:06:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\src\app.config.ts
 */
export default {
  pages: ["pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#333333",
    selectedColor: "#4C8DF4",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/index/index",
        text: "订单",
      },
      {
        pagePath: "pages/index/index",
        text: "我的",
      },
    ],
  },
};
