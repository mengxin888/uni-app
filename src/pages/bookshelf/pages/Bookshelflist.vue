<template>
     <view class="bookshelflist">
        <view class="bookshelflist-item" v-for="index in 25" :key="index">
          <view class="bookshelflist-item-top">
            <image src="../../../static/fhxx.png" mode="scaleToFill" />
            <text class="bookshelflist-item-top-status">完本</text>
          </view>
          <view class="bookshelflist-item-info">
            <view class="bookshelflist-item-info-name"
              >九龙夺嫡，皇兄何故教父皇修仙</view
            >
            <view class="bookshelflist-item-info-chapter">
              <text>10章/1302章</text>
              <svg
                t="1700723582894"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3125"
                width="32"
                height="32"
              >
                <path
                  d="M512 213.333333m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z"
                  fill="#b0b0b0"
                  p-id="3126"
                ></path>
                <path
                  d="M512 512m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z"
                  fill="#b0b0b0"
                  p-id="3127"
                ></path>
                <path
                  d="M512 810.666667m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z"
                  fill="#b0b0b0"
                  p-id="3128"
                ></path>
              </svg>
            </view>
          </view>
        </view>
   </view>
</template>

<script>
export default {
    name: 'Bookshelflist',

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
.bookshelflist {
      display: flex;
      flex-wrap: wrap;
      overflow-y: overlay;
      .bookshelflist-item {
        width: calc((100% - 10.6%) / 3);
        // margin-right: 5.3%;
        margin: 10rpx 5.2% 10rpx 0;
        &:nth-child(3n) {
          margin-right: 0;
        }
        .bookshelflist-item-top {
          position: relative;
          image {
            width: 100%;
            height: 300rpx;
            border-radius: 10rpx;
          }
          .bookshelflist-item-top-status {
            position: absolute;
            top: 10rpx;
            right: 10rpx;
            background-color: #e37843;
            font-size: 20rpx;
            font-weight: bold;
            color: #ffffff;
            padding: 3rpx 6rpx;
            border-radius: 5rpx;
          }
        }
        .bookshelflist-item-info {
          padding: 10rpx 0;
          .bookshelflist-item-info-name {
            font-size: 32rpx;
            font-weight: 550;
            color: #333333;
            margin: 10rpx 0;
            // 两行超出省略号
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .bookshelflist-item-info-chapter {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 23rpx;
            color: #b0b0b0;
            .icon {
              color: #b0b0b0;
              width: 23rpx;
              height: 23rpx;
            }
          }
        }
      }
    }
</style>