<template>
  <view class="scoreboard-view">
    <view class="scoreboard-header">
      <view class="left">
        <text>排行榜</text>
        <i class="iconfont">&#xe62d;</i>
      </view>
      <view class="right"
        ><text>换一换</text>
        <i class="iconfont">&#xe650;</i>
      </view>
    </view>
    <view class="scoreboard-tabs">
      <view
        class="scoreboard-tabs-item"
        v-for="(item, index) in scoreboardTabslist"
        :key="index"
        @click="isactive = index"
        :class="{ 'scoreboard-tabs-item-active': index == isactive }"
        >{{ item }}</view
      >
    </view>
    <view class="booklist-view">
      <view
        class="booklist-view-scroll"
        ref="booklistscroll"
        id="booklistbox"
        @touchmove.stop
      >
        <view
          class="booklist-item"
          v-for="(item, index) in booklist"
          :key="index"
        >
          <view class="image-box"
            ><image :src="item.imgsrc" mode="scaleToFill"
          />
          <view class="image-botton" v-if="istingshu">
            <i class="iconfont ">&#xe61c;</i>
          </view>
          
        </view>
          <view class="bookitem-info">
            <text class="bookitem-name">{{ item.name }}</text>
            <view class="boolitem-description"
              ><text class="bookitem-tab">{{ item.tab }}</text
              >·<text class="bookitem-buzz">{{ item.buzz }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "booklist",
  props: {
    istingshu: {
      type: Boolean,
      default: false,
    }
  },
  components: {},
  data() {
    return {
      scoreboardTabslist: ["推荐榜", "完本榜", "口碑榜", "高分榜"],
      booklist: [
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "九龙夺嫡，皇兄何故教父皇修仙",
          buzz: "9900万",
          tab: "东方玄幻",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "异世归来，发现两个世界融合啦？",
          buzz: "9905万",
          tab: "都市",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "九龙夺嫡，皇兄何故教父皇修仙",
          buzz: "9900万",
          tab: "东方玄幻",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "异世归来，发现两个世界融合啦？",
          buzz: "9905万",
          tab: "都市",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "九龙夺嫡，皇兄何故教父皇修仙",
          buzz: "9900万",
          tab: "东方玄幻",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "异世归来，发现两个世界融合啦？",
          buzz: "9905万",
          tab: "都市",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "九龙夺嫡，皇兄何故教父皇修仙",
          buzz: "9900万",
          tab: "东方玄幻",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "异世归来，发现两个世界融合啦？",
          buzz: "9905万",
          tab: "都市",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "九龙夺嫡，皇兄何故教父皇修仙",
          buzz: "9900万",
          tab: "东方玄幻",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "异世归来，发现两个世界融合啦？",
          buzz: "9905万",
          tab: "都市",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "九龙夺嫡，皇兄何故教父皇修仙",
          buzz: "9900万",
          tab: "东方玄幻",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "异世归来，发现两个世界融合啦？",
          buzz: "9905万",
          tab: "都市",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "九龙夺嫡，皇兄何故教父皇修仙",
          buzz: "9900万",
          tab: "东方玄幻",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "异世归来，发现两个世界融合啦？",
          buzz: "9905万",
          tab: "都市",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "九龙夺嫡，皇兄何故教父皇修仙",
          buzz: "9900万",
          tab: "东方玄幻",
        },
        {
          imgsrc: require("@/static/fhxx.png"),
          name: "异世归来，发现两个世界融合啦？",
          buzz: "9905万",
          tab: "都市",
        },
      ],
      isactive: 0,
    };
  },
  computed: {},
  methods: {},
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
};
</script>

<style scoped lang="scss">
.scoreboard-view {
  border-radius: 10rpx;
  background-color: #fff;
  padding: 40rpx 30rpx 10rpx 30rpx;
  box-sizing: border-box;

  .scoreboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;

    .left {
      font-size: 35rpx;
      display: flex;
      align-items: center;

      .scoreboard-icon {
        margin-left: 10rpx;
        width: 30rpx;
        height: 30rpx;
      }
    }

    .right {
      font-size: 25rpx;
      font-weight: 400;
      display: flex;
      align-items: center;
      i {
        margin-left: 10rpx;
      }
      .scoreboard-icon {
        margin-left: 10rpx;
        width: 30rpx;
        height: 30rpx;
      }
    }
  }

  .scoreboard-tabs {
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0;

    .scoreboard-tabs-item {
      border-radius: 10rpx;
      background-color: #f7f7f7;
      padding: 10rpx 25rpx;
      color: #999999;
      font-size: 30rpx;
    }
    .scoreboard-tabs-item-active {
      border-radius: 10rpx;
      background-color: #f68452;
      padding: 10rpx 25rpx;
      color: #ffffff;
      font-size: 30rpx;
      font-weight: 600;
    }
  }
  .booklist-view {
    height: 650rpx;
    width: 100%;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 10%;
      background: rgba(255, 255, 255, 0.4);
      filter: blur(8%);
    }

    .booklist-view-scroll {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      overflow-x: scroll;
      overflow-y: hidden;
      // 滚动吸附
      scroll-snap-type: x mandatory;

      // 隐藏滚动条
      &::-webkit-scrollbar {
        display: none;
      }

      // 左侧伪元素
      @mixin setBeforeContentColor($i) {
        color: if($i < 4, #d9bf9b, #000000);
      }
      // 设置的元素下标i，总宽度，右侧信息宽度
      @mixin setBooklistItemStyles($i, $width, $infoWidth) {
        max-width: 700rpx;
        width: $width;
        .bookitem-info {
          width: $infoWidth;
        }
      }
      @for $i from 1 through 16 {
        .booklist-item:nth-child(#{$i}) {
          .bookitem-info {
            .bookitem-name {
              &::before {
                content: "#{$i}";
                @include setBeforeContentColor($i);
                display: block;
                width: 50rpx;
                text-align: center;
                height: 1px;
                background-color: #f7f7f7;
                position: absolute;
                left: -50rpx;
                font-size: 26rpx;
              }
            }
          }

          @if ($i <= 12) {
            // 设置的元素下标i，总宽度，右侧信息宽度
            @include setBooklistItemStyles($i, 65%, 64%);
          }

          @if ($i > 12) {
            @include setBooklistItemStyles($i, 100%, 75%);
          }
        }
      }
    }

    .booklist-item {
      scroll-snap-align: start;
      scroll-snap-stop: always;
      width: 400rpx;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20rpx;
      .image-box {
        position: relative;
        image {
          width: 100rpx;
          height: 125rpx;
          border-radius: 10rpx;
        }
        .image-botton{
          position: absolute;
          bottom: 0;
          right: -10rpx;
          
          background-color: #d1d1d1;
          border-radius: 10rpx;
          i{
            padding: 1rpx 10rpx;
            color: #ffffff;
            font-size: 25rpx;
            display: flex;
            justify-self: center;
          }
        }
      }

      .bookitem-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        width: 250rpx;
        height: 125rpx;
        margin-left: 50rpx;

        .bookitem-name {
          // 2行音场
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 30rpx;
          font-weight: 600;
          color: #333333;
          height: 90rpx;
          position: relative;
          // 雅黑字体
          font-family: "Microsoft YaHei";
        }

        .boolitem-description {
          font-size: 25rpx;

          .bookitem-tab {
            color: #d2a77f;
            margin-right: 8rpx;
          }

          .bookitem-buzz {
            color: #999999;
            margin-left: 8rpx;
          }
        }
      }
    }
  }
}
</style>
