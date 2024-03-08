<template>
  <scroll-view
    scroll-x
    class="scrollbox"
    @scroll="scroll"
    @touchend="scrollend"
    :scroll-with-animation="true"
    :scroll-into-view="scrollId"
  >
    <view
      v-for="(item, index) in list"
      :key="index"
      class="scrollbox-item"
      :id="`item${index}`"
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
      {{ index }}
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: "WatchDramaSwiper",
  data() {
    return {
      scrollId: 'item0',
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
      boxleft: 0,
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
      this.list.forEach((item, index) => {
        this.$set(item, "scale", 1);
        if(index === 0){
          this.$set(item, "scale", 1.2);
        }
      });
    },
    scroll(e) {
      // const { scrollLeft } = e.detail;
      // const index = Math.round(scrollLeft / this.childrenWidth);
      // this.scrollLeft = index * this.childrenWidth + this.boxleft;
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
    },
    gatscale(num) {
      let a = this.childrenWidth - Math.abs(num);
      return a * (0.2 / this.childrenWidth);
    },
    scrollend() {
      let minValue = undefined;
      function findMin(arr) {
        let min = arr[0];
        let len = undefined;
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < min) {
            min = arr[i];
            len = i;
          }
        }
        return { min: min, len: len };
      }
      this.select(".scrollbox-item", { rect: true }, (rects) => {
        rects = rects.map((rect) => {
          return Math.abs(rect.left);
        });
        minValue = findMin(rects);
      });
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          if(minValue.len===undefined){
            return
          }
          if(this.scrollId===`item${minValue.len}`){
            this.scrollId=undefined;
          }
          this.scrollId=`item${minValue.len}`;

          console.log(this.scrollId);
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
    width: 200rpx;
    padding-right: 30rpx;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    &:last-child{
      padding-right: 0;
    }
    .imagebox {
      width: 100%;
      height: 280rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .name {
      font-size: 28rpx;
      margin: 10rpx 0;
      width: 100%;
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
