<template>
  <view class="usercenterview-activities">
    <view class="activities-title">番茄图书</view>
    <view class="activities-bottom">
      <view class="activities-live">
        <text class="live-title">看直播领60元券</text>
        <scroll-view scroll-x class="activities-scroll">
          <ul>
            <li>
              <image src="../../../static/logo.png" mode="scaleToFill" />
              <!-- 排名右下角 -->
              <view class="corners">
                <i class="iconfont">&#xe60e;</i>
                <text>1</text>
              </view>
            </li>
            <li>
              <image src="../../../static/logo.png" mode="scaleToFill" />
              <!-- 排名右下角 -->
              <view class="corners">
                <i class="iconfont">&#xe60e;</i>
                <text>2</text>
              </view>
            </li>
            <li>
              <image src="../../../static/logo.png" mode="scaleToFill" />
              <!-- 排名右下角 -->
              <view class="corners">
                <i class="iconfont">&#xe60e;</i>
                <text>3</text>
              </view>
            </li>
            <li>
              <image src="../../../static/logo.png" mode="scaleToFill" />
              <!-- 排名右下角 -->
              <view class="corners">
                <i class="iconfont">&#xe60e;</i>
                <text>4</text>
              </view>
            </li>
          </ul>
        </scroll-view>
      </view>
      <view class="activities-shopping">
        <view class="shopping-title">精品好书</view>
        <swiper
          class="swiper"
          circular
          :indicator-dots="indicatorDots"
          :autoplay="autoplay"
          :interval="interval"
          :duration="duration"
        >
          <swiper-item class="swiper-item">
            <image src="../../../static/logo.png" mode="scaleToFill" />
            <view class="shop">
              <view class="shop-name"> 看图写话全集 </view>
              <view class="shop-price"> ￥4.6 </view>
            </view>
          </swiper-item>
          <swiper-item class="swiper-item">
            <image src="../../../static/logo.png" mode="scaleToFill" />
            <view class="shop">
              <view class="shop-name"> 看图写话全集 </view>
              <view class="shop-price"> ￥1.1 </view>
            </view>
          </swiper-item>
          <swiper-item class="swiper-item">
            <image src="../../../static/logo.png" mode="scaleToFill" />
            <view class="shop">
              <view class="shop-name"> 看图写话全集 </view>
              <view class="shop-price"> ￥55.9 </view>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "UsercenterviewActivities",

  data() {
    return {
      interval: 3000,
      duration: 500,
      indicatorDots: false,
      autoplay: true,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
$colors: #fad598, #c5cdd3, #edbf8c, #ffffff;
.usercenterview-activities {
  background-color: #ffffff;
  padding: 30rpx;
  border-radius: 20rpx;

  .activities-title {
    font-size: 40rpx;
    font-weight: bold;
  }

  .activities-bottom {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 0;
    box-sizing: border-box;

    .activities-live {
      width: calc(50% - 10rpx);
      border-radius: 20rpx;
      background-color: #fdf9ee;
      padding: 20rpx;
      box-sizing: border-box;

      .live-title {
        font-size: 30rpx;
        font-weight: 550;
        color: #54472f;
      }

      .activities-scroll {
        margin: 40rpx 0;

        ::-webkit-scrollbar {
          display: none;
        }

        ul {
          list-style: none;
          padding: 0;
          display: flex;
          @for $i from 1 through length($colors) {
                  $color: nth($colors, $i);
                  li:nth-child(#{$i}) {
                      .corners{
                        i{
                          color:$color;
                        }
                      }
                  }
                }
          li {
            margin-right: 20rpx;
            width: 80rpx;
            height: 80rpx;
            list-style-type: none;
            position: relative;
            image {
              width: 80rpx;
              height: 80rpx;
              border-radius: 50%;
              // margin-right: 20rpx;
            }
            .corners {
              position: absolute;
              bottom: 0;
              right: 0;
              height: 40rpx;
              i {
                font-size: 30rpx;
              }
              text {
                height: 20rpx;
                font-size: 24rpx;
                // color: #ffffff;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
        }
      }
    }

    .activities-shopping {
      background-color: #fdf9ee;
      width: calc(50% - 10rpx);
      border-radius: 20rpx;
      padding: 30rpx;
      box-sizing: border-box;

      .shopping-title {
        font-size: 30rpx;
        font-weight: 550;
        color: #54472f;
      }

      .swiper {
        width: 100%;
        margin: 30rpx 0;
        height: 80rpx;

        .swiper-item {
          display: flex;

          image {
            // 图片模拟的
            height: 80rpx;
            width: 60rpx;
          }

          .shop {
            margin-left: 20rpx;

            .shop-name {
              // 不换行
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 150rpx;
              font-size: 30rpx;
              font-weight: bold;
              color: #54472f;
            }

            .shop-price {
              font-size: 30rpx;
              font-weight: bold;
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>
