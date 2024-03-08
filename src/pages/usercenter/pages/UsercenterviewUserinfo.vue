<template>
    <view class="usercenterview-userinfo">
      <view class="userinfo-imagename">
        <image
          src="../../../static/fhxx.png"
          mode="scaleToFill"
        />
        <text>喜欢玎麦波的康叔封</text>
      </view>
      <view class="userinfo-btn">
        <text>个人主页</text>
        <i class="iconfont">&#xe62d;</i>
      </view>
    </view>
</template>

<script>
export default {
    name: 'UsercenterviewUserinfo',

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
 .usercenterview-userinfo {
    margin-bottom: 20rpx;
    display: flex;
    justify-content: space-between;
    .userinfo-imagename {
      display: flex;
      align-items: center;
      image {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        margin-right: 20rpx;
      }

      text {
        font-size: 40rpx;
        font-weight: bold;
      }
    }

    .userinfo-btn {
      display: flex;
      align-items: center;
      font-size: 25rpx;
      color: #bcbcbc;
      i {
        font-size: 20rpx;
      }
    }
  }
</style>