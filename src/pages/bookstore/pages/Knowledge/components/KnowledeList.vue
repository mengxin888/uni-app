<template>
  <view class="list-box">
    <view class="list-image">
      <image
        src="./images/06942b34e99f4c959be3e0014608f7cd_2.png"
        mode="scaleToFill"
      />
      <view class="image-icon">
        <text class="iconfont">&#xe61c;</text>
      </view>
    </view>
    <view class="list-info">
      <view class="info-name">
        <view class="list-name">十日终焉</view>
        <view class="list-assess">9.7</view>
      </view>
      <view class="list-present">【多人超精品有声剧！】【每天六点更新】</view>
      <view class="list-tabs"> 悬疑脑洞·灵异·50.7万人在读</view>
    </view>
    <text class="iconfont delete-btn">&#xe614;</text>
  </view>
</template>

<script>
export default {
  name: "KnowledeList",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.list-box {
  width: 100%;
  height: 150rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin: 25rpx 0;
  .list-image {
    width: 150rpx;
    height: 150rpx;
    position: relative;

    image {
      width: 100%;
      height: 100%;
    }
    .image-icon {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5rpx 8rpx;
      background-color: #999;
      border-radius: 40rpx;
    }
  }
  .list-info {
    width: calc(100% - 150rpx);
    margin: 0 20rpx;
    display: flex;
    flex-direction: column;
    .info-name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 650;
      font-size: 35rpx;
      .list-assess {
        color: red;
      }
    }
    .list-present {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      // 不换行
      width: 100%;
      color: #999;
      font-size: 25rpx;
      margin: 10rpx 0;
    }
    .list-tabs {
      color: #999;
      font-size: 25rpx;
      margin: 10rpx 0;
    }
  }
  .delete-btn {
    position: absolute;
    bottom: 20rpx;
    right: 30rpx;
    font-size: 20rpx;
  }
}
</style>
