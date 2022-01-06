/*
 * @Author: your name
 * @Date: 2022-01-06 14:13:43
 * @LastEditTime: 2022-01-06 17:14:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\src\utils\request.ts
 */
import Taro from "@tarojs/taro";
import { baseUrl } from "@/config";

interface method {
  /** HTTP 请求 OPTIONS */
  OPTIONS;
  /** HTTP 请求 GET */
  GET;
  /** HTTP 请求 HEAD */
  HEAD;
  /** HTTP 请求 POST */
  POST;
  /** HTTP 请求 PUT */
  PUT;
  /** HTTP 请求 DELETE */
  DELETE;
  /** HTTP 请求 TRACE */
  TRACE;
  /** HTTP 请求 CONNECT */
  CONNECT;
}

type RequestOptions = {
  url: string;
  method: keyof method;
  header?: any;
  data?: any;
};

const interceptor = function (chain) {
  const requestParams = chain.requestParams;
  const { method, data, header, url } = requestParams;
  header.token = "LONGc0b47d25bf5e4815be4afe9f8ff81230";
  header.channelCode = "CA00093";
  header["X-WeHotel-Api-Key"] = "fdb4ad88-2f64-4d94-96d1-27e5066b800e";
  header.sourceType = "90045";

  return chain
    .proceed(requestParams)
    .then((res) => {
      const { statusCode, data } = res;
      if (statusCode >= 200 && statusCode < 300) {
        if (data.msgCode !== 100) {
          Taro.showToast({
            title: `${data.message}~` || data.msgCode,
            icon: "none",
            mask: true,
          });
        }
        return data;
      } else {
        throw new Error(`网络请求错误，状态码${statusCode}`);
      }
    })
    .catch((err) => {
      throw new Error(`网络请求错误，状态码${err.status}`);
    });
};

export default (options: RequestOptions) => {
  Taro.addInterceptor(interceptor);
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...options.data,
    },
    header: {
      "Content-Type": "application/json",
      ...options.header,
    },
    method: options.method,
  })
    .then((res) => {
      return res.result;
    })
    .catch((err) => {
      Taro.showToast({
        title: err.message,
        icon: "none",
        mask: true,
      });
    });
};
