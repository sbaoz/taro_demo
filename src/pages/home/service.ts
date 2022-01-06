/*
 * @Author: your name
 * @Date: 2022-01-06 14:27:59
 * @LastEditTime: 2022-01-06 16:23:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\src\pages\home\service.ts
 */
import request from "@/utils/request";

export const queryActivityInfo = (data) =>
  request({
    url: "/trip-hotel-banner/activity/getActivityInfo",
    method: "POST",
    data,
  });
