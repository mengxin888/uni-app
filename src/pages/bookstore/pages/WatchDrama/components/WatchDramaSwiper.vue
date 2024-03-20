<template>
  <swiper
    class="swipe"
    next-margin="500rpx"
    @transition="transition"
    @animationfinish="animationfinish"
    :duration="200"
  >
    <swiper-item v-for="(item, index) in list" :key="index" class="item">
      <view class="scrollbox-item" :id="`item+${index}`">
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
      swipeindex:0,
      childrenwidth:0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.list.forEach((item, index) => {
        this.$set(this.list[index], "scale", 1);
        this.$set(this.list[0], "scale", 1.2);
      });
 uni.createSelectorQuery().in(this).select(".item")
  .boundingClientRect((data) => {
    this.childrenwidth=data.width
  })
  .exec();
    },
    transition(e) {
      if(Math.abs(e.detail.dx)>this.childrenwidth){
        return
      }
      if (e.target.dx > 0) {
        if(this.swipeindex==this.list.length-1){
          return
        }
         this.$set(this.list[this.swipeindex], "scale", 1.2+((-e.target.dx/this.childrenwidth)*0.2));
         this.$set(this.list[this.swipeindex+1], "scale", 1+((e.target.dx/this.childrenwidth)*0.2));
      }else{
        if(this.swipeindex==0){
          return
        }
        this.$set(this.list[this.swipeindex-1], "scale", 1+((-e.target.dx/this.childrenwidth)*0.2));
        this.$set(this.list[this.swipeindex], "scale", 1.2+((e.target.dx/this.childrenwidth)*0.2));
      }
    },
    animationfinish(e) {
     this.swipeindex = e.detail.current;
     this.list.forEach((item, index) => {
          this.$set(item, "scale", 1);
        });
     this.$set(this.list[this.swipeindex], "scale", 1.2);
    },
  },
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
