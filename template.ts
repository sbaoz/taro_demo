/*
 * @Author: your name
 * @Date: 2022-01-06 17:19:03
 * @LastEditTime: 2022-01-06 17:45:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\template.ts
 */
const fs = require("fs");
const dirName = process.argv[2];
if (!dirName) {
  console.log("文件夹名称不能为空！");
  console.log("示例：yarn run createFile test");
  process.exit(0);
}
const titleName = titleCase(dirName);

// 页面模板
const indexTemp = `import { useEffect, forwardRef } from "react";
import { connect } from "react-redux";
import "./index.less";

function ${titleName}(props, ref) {
  useEffect(() => {
  }, []);

  return (
    <div>
        ${dirName}
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state.common, ...state.${dirName} });

const mapDispatchToProps = (dispatch) => ({
    effectsDemo: (data) => {
        dispatch({
            type: "${dirName}/effectsDemo",
            payload: data,
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(forwardRef(${titleName}));`;

// less文件模板
const lessTemp = `.${dirName}_page {}`;

// model文件模板
const modelTemp = `import * as ${dirName}Api from './service';
export default {
  namespace: '${dirName}',
  state: {
    demo: null
  },
  effects: {
    *effectsDemo({ payload }, { call, put }) {
      const result = yield call(${dirName}Api.demo, {...payload});
      if (result) {
        yield put({ type: 'save',
          payload: {
            demo: data,
          } });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};`;

// service文件模板
const serviceTemp = `import request from "@/utils/request";
export const demo = data => request({
  url: '路径',
  method: 'POST',
  data,
});`;

fs.mkdirSync(`./src/pages/${dirName}`);
process.chdir(`./src/pages/${dirName}`);

fs.writeFileSync("index.tsx", indexTemp);
fs.writeFileSync("index.less", lessTemp);
fs.writeFileSync("model.ts", modelTemp);
fs.writeFileSync("service.ts", serviceTemp);

console.log(`模版${dirName}已创建,请手动增加model`);

function titleCase(str) {
  const array = str.toLowerCase().split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] =
      array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(" ");
  return string;
}

process.exit(0);
