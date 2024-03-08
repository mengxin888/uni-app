<template>
    <view class="bookshelf-Tips" >
        <view class="bookshelf-Tips-info">
          <view class="bookshelf-Tips-read">
           <i class="iconfont icon">&#xe600;</i>
            <text>已阅读14分钟</text></view
          >
          <text class="bookshelf-Tips-listen">已听0分钟</text>
        </view>
        <view class="bookshelf-Tips-listen-btn">
          <text class="bookshelf-Tips-listen-btn1">列表</text>
          <text class="bookshelf-Tips-listen-btn2">编辑</text>
        </view>
      </view>
</template>

<script>
export default {
    name: 'BookshelfTips',
}
</script>

<style lang="scss">
.bookshelf-Tips {
      margin-bottom: 20rpx;
      display: flex;
      justify-content: space-between;
      .bookshelf-Tips-info {
        display: flex;
        align-items: center;
        background-color: #f6f6f6;
        border-radius: 10rpx;
        padding: 15rpx;
        font-size: 25rpx;
        
        .bookshelf-Tips-read {
          border-right: 1rpx solid #e2e2e4;
          padding: 0 10rpx;
          display: flex;
          align-items: center;
          .icon {
            margin-right: 10rpx;
            font-size: 35rpx;
            color:#f4ea2a;
          }
        }
        .bookshelf-Tips-listen {
          padding: 0 10rpx;
        }
      }
      .bookshelf-Tips-listen-btn {
        background-color: #ffffff;
        display: flex;
        padding: 10rpx 0;
        font-weight: bold;
        font-size: 31rpx;

        .bookshelf-Tips-listen-btn1 {
          padding-right: 30rpx;
          border-right: 1rpx solid #e2e2e4;
        }
        .bookshelf-Tips-listen-btn2 {
          padding-left: 30rpx;
        }
      }
    }
</style>
