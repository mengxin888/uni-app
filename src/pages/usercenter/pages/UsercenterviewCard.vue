<template>
    <view class="usercenterview-card">
      <view class="mask">
        <view class="mask-right"></view>
      </view>
      <view class="usercenterview-text">
        <view class="text-left">
          <text class="left-title"> 开通会员 </text>
          <text class="left-text"> 成为会员，尊享免广告等权益 </text>
        </view>
        <view class="text-pricebtn"> ￥5.00开通 </view>
      </view>
    </view>
</template>

<script>
export default {
    name: 'UsercenterviewCard',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
 .usercenterview-card {
    margin: 40rpx 0;
    border-radius: 20rpx;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 180rpx;

    .mask {
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #fef5e5, #faf3e1);
      position: relative;

      .mask-right {
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;
        height: 100%;
        background-color: #faf1e2;
        border-radius: 0 0 0 100%;
      }
    }

    .usercenterview-text {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 30rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;

      .text-left {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .left-title {
          font-weight: bold;
          font-size: 35rpx;
          color: #6c5838;
        }

        .left-text {
          font-weight: bold;
          color: #9a8b76;
          font-size: 25rpx;
        }
      }

      .text-pricebtn {
        background-color: #ffffff;
        padding: 15rpx 25rpx;
        border-radius: 50rpx;
        font-weight: bold;
        color: #6a563d;
        font-size: 25rpx;
      }
    }
  }
</style>