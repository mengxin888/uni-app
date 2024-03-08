<template>
     <view>
        <view class="usercenterview-top" :style="{ paddingTop: safeAreaInsets + 'px'}">
      
      <view class="top-creation">
        <i class="iconfont">&#xe6d8;</i>
        <text> 创作中心</text>
      </view>
      <view class="top-setfun">
        <i class="iconfont">&#xe601;</i>
        <i class="iconfont">&#xe764;</i>
        <i class="iconfont">&#xe8b7;</i>
      </view>
    </view>
    <view class="tianchong" :style="{ paddingTop: safeAreaInsets + 'px'}" ></view>
     </view>
</template>

<script>
export default {
    name: 'UsercenterviewTop',

    data() {
        return {
            safeAreaInsets:0,
        };
    },

    mounted() {
        this.getSafeArea();
    },

    methods: {
        getSafeArea() {
      this.safeAreaInsets=uni.getSystemInfoSync().safeAreaInsets.top;

    },
    },
};
</script>

<style lang="scss" scoped>
.tianchong{
  height: 100rpx;
  width: 100%;
}
.usercenterview-top {
    background-color: #f6f6f6;
    z-index: 10;
    height: 100rpx;
    position: fixed;
    top: 0;
    width: calc(100% - 60rpx);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-creation {
      display: flex;
      align-items: center;
      font-weight: 900;

      i{
        margin-right: 10rpx;
        font-size: 45rpx;
      }
    }

    .top-setfun {
      i{
        margin-left: 40rpx;
        font-size: 40rpx;
      }
    }
  }
</style>