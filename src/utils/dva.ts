/*
 * @Author: your name
 * @Date: 2022-01-06 10:11:34
 * @LastEditTime: 2022-01-06 11:22:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\src\utils\dva.ts
 */
import Taro from "@tarojs/taro";
import { create } from "dva-core";
import createLoading from "dva-loading";
import { createLogger } from "redux-logger";

let app: any;
let store: any;
let dispatch: any;

function createApp(opt: any) {
  // redux日志
  opt.onAction = [createLogger()];
  app = create(opt);
  if (!global.registered) opt.models.forEach((model) => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
