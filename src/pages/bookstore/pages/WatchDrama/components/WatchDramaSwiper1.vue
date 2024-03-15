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
      v-for="(item, index) in valuelist"
      :key="index"
      class="scrollbox-item"
    >
      <slot name="top" :row="item"></slot>
      <view class="imagebox">
        <view
          :style="`height: calc(${item.scale} * 83%);width: calc(${item.scale} * 83%);`"
        >
          <slot :row="item" style="height: 100%; width: 100%"> </slot>
        </view>
      </view>
      <slot name="bottom" :row="item"></slot>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: "WatchDramaSwiper",
  props: {
    valuelist: {
      type: Array,
      default: () => [],
    },
    scalestart: {
      type: Number,
      default: 1,
    },
    scaleend: {
      type: Number,
      default: 1.2,
    },
  },
  data() {
    return {
      scrollLeft: 0,
      query: uni.createSelectorQuery().in(this),
      childrenWidth: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
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
      this.valuelist.forEach((item, index) => {
        this.$set(item, "scale", this.scalestart);
        if (index === 0) {
          this.$set(item, "scale", this.scaleend);
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
            this.valuelist[index].scale = this.scalestart + this.gatscale(num);
          } else {
            this.valuelist[index].scale = this.scalestart;
          }
        });
      });
    },
    gatscale(num) {
      let a = this.childrenWidth - Math.abs(num);
      return a * ((this.scaleend - this.scalestart) / this.childrenWidth);
    },
    scrollend() {
      let minValue = undefined;
      let arr = [];
      for (let i = 0; i < this.valuelist.length; i++) {
        arr.push(Math.abs(this.childrenWidth * i - this.scrollLeft));
      }
      minValue = arr.indexOf(Math.min(...arr));
      this.scrollLeft = minValue * this.childrenWidth;
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
  }
}
</style>
