/*
 * @Author: your name
 * @Date: 2022-01-06 11:16:26
 * @LastEditTime: 2022-01-06 11:18:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\src\models\common.ts
 */
export default {
  namespace: "common",
  state: {
    name: "lalala",
  },
  effects: {},
  reducers: {
    setName(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
