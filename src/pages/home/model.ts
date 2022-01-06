/*
 * @Author: your name
 * @Date: 2022-01-06 14:27:49
 * @LastEditTime: 2022-01-06 16:54:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\src\pages\home\model.ts
 */
import * as homeApi from "./service";

export default {
  namespace: "home",
  state: {
    activityList: [],
    bannerList: [],
    activityModalImgInfo: null,
    floatImgInfo: null,
  },
  effects: {
    *queryActivityInfo({ payload }, { call, put }) {
      const resp = yield call(homeApi.queryActivityInfo, { ...payload });
      console.log("queryActivityInfo", resp);
      yield put({
        type: "setActivityInfo",
        payload: {},
      });
    },
  },
  reducers: {
    setActivityInfo(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
