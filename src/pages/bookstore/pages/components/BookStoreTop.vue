<template>
  <view class="top-box">
    <view class="topinput">
      <view class="input">
        <input
          v-model="topinputvalue"
          placeholder=""
          placeholder-class="input-placeholder"
        />
        <i class="iconfont">&#xe687;</i>
      </view>
    </view>
    <u-tabs
      class="tabs"
      :list="titlelist"
      @click="tabsclick"
      keyName="title"
      :current="pageindex"
      :activeStyle="{
        transform: 'scale(1.2)',
      }"
      :inactiveStyle="{
        transform: 'scale(1)',
      }"
      lineHeight="0"
      lineWidth="0"
      :itemStyle="{
        fontWeight: 'bold',
      }"
    ></u-tabs>
  </view>
</template>

<script>
export default {
  name: "BookStoreTop",
  data() {
    return {
      index: 0,
      // 当前页
      pageindex: 1,
      // input框
      topinputvalue: "",
      // tabs
      titlelist: [
        {
          name: "Attention",
          title: "关注",
        },
        {
          name: "Recommended",
          title: "推荐",
        },
        {
          name: "Classic",
          title: "经典",
        },
        {
          name: "Knowledge",
          title: "知识",
        },
        {
          name: "ListenBook",
          title: "听书",
        },
        {
          name: "WatchDrama",
          title: "看剧",
        },
        {
          name: "Comic",
          title: "漫画",
        },
        {
          name: "Newest",
          title: "最新上架",
        },
        // 其他组件
      ],
    };
  },
  mounted() {},
  methods: {
    tabsclick(item) {
      console.log(item);
      // 父元素传递index
      this.$emit("getactiveindex", item);
    },
    touchmoveindex(index) {
      this.pageindex = index;
      let data={...this.titlelist[index],index}
      this.$emit("getactiveindex", data);
    },
  },
};
</script>
<style scoped lang="scss">
.top-box {
  padding-top: var(--status-bar-height);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #f6f6f6;
  width: 100%;
  .topinput {
    width: 100vw;
    height: 80rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input {
      background-color: #ffffff;
      width: 100%;
      height: 60rpx;
      margin: 0 20rpx;
      border-radius: 15rpx;
      position: relative;
      input {
        padding: 10rpx;
      }
      i {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20rpx;
      }
    }
    button {
      height: 70rpx;
      width: 100rpx;
      padding: 0;
      margin: 0 10rpx;
      line-height: 70rpx;
    }
  }
  .tabs {
    // margin: 0 30rpx;
    height: 100rpx;
    line-height: 100rpx;
  }
}
</style>
