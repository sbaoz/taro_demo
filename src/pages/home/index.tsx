/*
 * @Author: your name
 * @Date: 2021-12-30 10:41:21
 * @LastEditTime: 2022-01-06 17:04:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\src\pages\index\index.tsx
 */
import { useEffect, forwardRef } from "react";
import { connect } from "react-redux";
import Test from "@/components/test/test";
import "./index.less";

function Home(props, ref) {
  console.log(props, ref);
  const { queryActivityInfo } = props;

  useEffect(() => {
    queryActivityInfo({
      palceOrderNums: [1, 2, 3, 7, 8],
      sourceType: "90045",
    });
  }, []);

  return (
    <div>
      home_{process.env.TARO_ENV}
      <Test />
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state.common, ...state.home });

const mapDispatchToProps = (dispatch) => ({
  queryActivityInfo: (data) => {
    dispatch({
      type: "home/queryActivityInfo",
      payload: data,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(forwardRef(Home));
