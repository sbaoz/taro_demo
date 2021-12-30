/*
 * @Author: your name
 * @Date: 2021-12-30 10:41:21
 * @LastEditTime: 2021-12-30 17:49:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \taro_demo\src\pages\index\index.tsx
 */
import { Button, Swiper, SwiperItem, View } from "@tarojs/components";
import Taro, { eventCenter, getCurrentInstance } from "@tarojs/taro";
import { Component, createRef, RefObject } from "react";
import "./index.less";

export default class Index extends Component {
  $instance = getCurrentInstance();
  el: RefObject<HTMLDivElement> = createRef();

  onReady() {
    console.log("onReady ref", this.el.current);
    // onReady 触发后才能获取小程序渲染层的节点
    Taro.createSelectorQuery()
      .select("#index")
      .boundingClientRect()
      .exec((res) => console.log(res, "onReady res"));
  }

  componentWillMount() {
    const onReadyEventId = this?.$instance?.router?.onReady || "";
    eventCenter.once(onReadyEventId, () => {
      console.log("onReady");
      // onReady 触发后才能获取小程序渲染层的节点
      Taro.createSelectorQuery()
        .select("#index")
        .boundingClientRect()
        .exec((res) => console.log(res, "onReady res"));
      // this.getClientRect();
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("componentDidMount ref", this.el.current);
    Taro.nextTick(() => {
      // 使用 Taro.nextTick 模拟 setData 已结束，节点已完成渲染
      // Taro.createSelectorQuery()
      //   .select("#index")
      //   .boundingClientRect()
      //   .exec((res) => console.log(res, "res"));
      // this.getClientRect();
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  componentDidShow() {
    console.log("componentDidShow");
  }

  componentDidHide() {}

  async getClientRect() {
    const el = document.getElementById("index");
    const res = await el?.getBoundingClientRect();
    console.log(res);
  }

  render() {
    return (
      <div className="index" id="index" ref={this.el}>
        <Swiper
          className="box"
          autoplay
          interval={1000}
          indicatorColor="#999"
          onClick={() => {}}
          onAnimationFinish={() => {}}
        >
          <SwiperItem>
            <View className="text">1</View>
          </SwiperItem>
          <SwiperItem>
            <View className="text">2</View>
          </SwiperItem>
          <SwiperItem>
            <View className="text">3</View>
          </SwiperItem>
        </Swiper>
        <div>
          <span>Hello world!</span>
        </div>
        <button onClick={() => this.getClientRect()}>click</button>
      </div>
    );
  }
}
