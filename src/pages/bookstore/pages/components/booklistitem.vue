<template>
  <view class="listenbook-view-item">
    <view class="image">
      <image src="../../../../static/fhxx.png" mode="aspectFill"></image>
      <view class="text">
        <u-icon name="play-right-fill" color="#ffffff" size="16"></u-icon>
        <text class="context">1375.5万播放</text>
      </view>
    </view>
    <view class="item-text">
      <view class="name">九龙夺嫡，皇兄何故教父皇修仙</view>
      <view class="info">甜宠·100集</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Booklistitem",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    click(name) {
      this.$refs.uToast.success(`点击了第${name}个`);
    },
  },
};
</script>

<style lang="scss" scoped>
.listenbook-view-item {
  padding: 0 30rpx 20rpx 30rpx;
  width: 200rpx;
  .image {
    height: 250rpx;
    width: 100%;
    border-radius: 20rpx;
    overflow: hidden;
    position: relative;
    image {
      height: 100%;
      width: 100%;
    }
    .text {
      position: absolute;
      bottom: 10rpx;
      right: 10rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      .context {
        color: #ffffff;
        font-size: 22rpx;
      }
    }
  }
  .item-text {
    width: 100%;
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 25rpx;
      font-weight: 600;
      height: 50rpx;
      line-height: 50rpx;
    }
    .info {
      font-size: 20rpx;
      color: #999999;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
