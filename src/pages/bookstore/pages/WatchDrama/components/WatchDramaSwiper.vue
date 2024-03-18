<template>
  <swiper
    class="swipe"
    next-margin="410rpx"
    @transition="transition"
    @animationfinish="animationfinish"
  >
    <swiper-item
      v-for="(item, index) in list"
      :key="index"
      class="item"
      :id="`item+${index}`"
    >
      <view class="scrollbox-item">
        <view class="imagebox" :style="`transform: scale(${item.scale})`">
          <image :src="item.Imageurl" mode="scaleToFill" />
        </view>
        <view>
          <view class="name">{{ item.name }}</view>
          <view class="info">{{ item.info }}</view>
        </view>
      </view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  name: "WatchDramaSwiper",
  data() {
    return {
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
      observe: null,
    };
  },
  onReady() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.list.forEach((item, index) => {
        this.$set(this.list[index], "scale", 1);
        this.$set(this.list[0], "scale", 1.2);
      });
    },
    transition(e) {
      this.observe = uni.createIntersectionObserver(this, {
        observeAll: true,
      });
      this.observe.relativeTo(".swipe").observe(".item", (res) => {
        let rect = res.boundingClientRect;
        if (rect.left > 0 - rect.width && rect.left < rect.width) {
          let index = res.id.substring(5);
          if (rect.left > 0) {
            this.$set(
              this.list[index],
              "scale",
              1 + ((rect.width - rect.left) / rect.width) * 0.2
            );
          } else {
            this.$set(
              this.list[index],
              "scale",
              1 + ((rect.width + rect.left) / rect.width) * 0.2
            );
          }
        }
      });
    },
    animationfinish(e) {
      this.observe.disconnect();
      this.observe=null;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@mixin flex-center {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.swipe {
  width: 100%;
  height: 330rpx;
  .scrollbox-item {
    width: 180rpx;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .imagebox {
      height: calc((100% - 80rpx) * 0.8);
      width: 80%;
      overflow: hidden;
      border-radius: 10rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      @include flex-center;
      font-size: 25rpx;
    }
    .info {
      @include flex-center;
      font-size: 20rpx;
      color: #999;
    }
  }
}
</style>
