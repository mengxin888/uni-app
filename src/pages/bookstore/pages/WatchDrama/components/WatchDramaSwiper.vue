<template>
  <scroll-view
    scroll-x
    class="scrollbox"
    @scroll="scroll"
    @touchend="scrollend"
    :scroll-with-animation="true"
    :scroll-left="scrollLeft"
    @touchmove.stop
  >
    <view
      v-for="(item, index) in list"
      :key="index"
      class="scrollbox-item"
      @click="clickitem(index)"
    >
      <view class="imagebox">
        <image
          :src="item.Imageurl"
          mode="scaleToFill"
          :style="`height: calc(${item.scale} * 83%);width: calc(${item.scale} * 83%);`"
        />
      </view>
      <view class="name">{{ item.name }}</view>
      <view class="info">{{ item.info }}</view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: "WatchDramaSwiper",
  data() {
    return {
      scrollLeft: 0,
      list: [
        {
          Imageurl: require("../../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
      ],
      query: uni.createSelectorQuery().in(this),
      childrenWidth: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    clickitem(index){
      if(index>this.list.length-3) return
      this.scrollLeft=this.childrenWidth*index
    },
    select(elementsName, options = {}, fn) {
      /**
       * @param {String} elementsName 选择器
       * @param {Object} options 选择器参数
       * @param {Function} fn 回调函数默认参数rects
       */
      this.query
        .selectAll(elementsName)
        .fields(options, (rects) => {
          fn(rects);
        })
        .exec();
    },
    init() {
      this.query
        .selectAll(".scrollbox-item")
        .boundingClientRect((rects) => {
          this.childrenWidth = rects[rects.length - 1].width;
        })
        .exec();
      this.query
        .select(".scrollbox")
        .boundingClientRect((rects) => {
          this.boxleft = rects.left;
        })
        .exec();
      this.list.forEach((item, index) => {
        this.$set(item, "scale", 1);
        if (index === 0) {
          this.$set(item, "scale", 1.2);
        }
      });
    },
    scroll(e) {
      this.select(".scrollbox-item", { rect: true }, (rects) => {
        rects.forEach((rect, index) => {
          if (
            rect.left < this.childrenWidth &&
            rect.left > 0 - this.childrenWidth
          ) {
            let num = rect.left - this.boxleft;
            this.list[index].scale = 1 + this.gatscale(num);
          } else {
            this.list[index].scale = 1;
          }
        });
      });
      this.scrollLeft = e.detail.scrollLeft;
    },
    gatscale(num) {
      let a = this.childrenWidth - Math.abs(num);
      return a * (0.2 / this.childrenWidth);
    },
    scrollend() {
      let minValue = undefined;
      let arr = [];
      for (let i = 0; i < this.list.length; i++) {
        arr.push(Math.abs(this.childrenWidth * i - this.scrollLeft));
      }
      minValue = arr.indexOf(Math.min(...arr));
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          this.scrollLeft = minValue * this.childrenWidth;
          // console.log(this.scrollLeft,"设置");
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scrollbox {
  width: 100%;
  white-space: nowrap;
  height: auto;
  margin: 30rpx 0;
  .scrollbox-item {
    // box-sizing: border-box;
    vertical-align: middle;
    display: inline-block;
    width: 230rpx;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    &:last-child {
      padding-right: 0;
    }
    .imagebox {
      width: 200rpx;
      height: 280rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .name {
      font-size: 28rpx;
      margin: 10rpx 0;
      width: 200rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .info {
      color: #999;
      font-size: 24rpx;
      overflow: hidden;
    }
  }
}
</style>
