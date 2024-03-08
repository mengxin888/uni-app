<template>
  <view class="swiper-box">
    <view class="context">
      <!--  v-show="switchIndex!=index" -->
      <view class="swiper">
        <view class="imagebox">
          <image
            v-for="(item, index) in data"
            :key="index"
            class="imageItem"
            :src="item"
            mode="scaleToFill"
            v-show="switchIndex==index || aa + 1 == index"
            :class="{
              'activeall': switchIndex == index,
              'activeresove': switchIndex == index,
            }"
          />
        </view>
      </view>
      <view class="text">
          <view class="title">亲子</view>
          <view class="text-context">
            <view class="icon"><text class="iconfont">&#xe635;</text></view>
            <text class="text-name">{{ time }}</text>
          </view>
      </view>
    </view>
    <view class="mask"></view>
  </view>
</template>
<script>
export default {
  name: "KnowledgeSwiper",
  data() {
    return {
      switchIndex: 0,
      data: [
        require("./images/06942b34e99f4c959be3e0014608f7cd_2.png"),
        require("./images/156e334a5f6a45e085d55b8101eaaafa_2.png"),
        require("./images/8421a52d926348bdb45cb1e52cab1335_0.png"),
        require("./images/8421a52d926348bdb45cb1e52cab1335_1.png"),
        require("./images/8421a52d926348bdb45cb1e52cab1335_2.png"),
      ],
    };
  },
  computed: {
    aa(){
      return this.switchIndex == this.data.length - 1 ? -1 : this.switchIndex;
    },
    time() {
      let a= new Date().getHours();
      if(a>12 && a<18) return "下午好"
      if(a>=18 && a<24) return "晚上好"
      if(a>=0 && a<6) return "凌晨好"
      if(a>=6 && a<12) return "上午好"
    },
  },
  created() {
    this.init();
  },
  mounted() {
    
  },
  methods: {
    init() {
      setInterval(() => {
        this.switchIndex++;
        if (this.switchIndex > this.data.length - 1) {
          this.switchIndex = 0;
        }
      },2000);
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
@keyframes all {
  0% {
    top: 50rpx;
    transform: translateX(130%) scale(1);
  }
  100% {
    top: 35rpx;
    transform: translateX(60%) scale(1.5);
  }
}
@keyframes revolve {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    
  }
}
.activeall{
  animation: all .5s ease-in-out 0s 1 forwards;
}
.activeresove{
  z-index: 10;
}
.swiper-box {
  height: 250rpx;
  width: 150rpx;
  position: relative;
  .mask {
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 75%;
    width: 100%;
    background: linear-gradient(to top right, #e1eff9, #c6e5fb);
    border-top-left-radius: 50rpx;
    -webkit-clip-path: polygon(
      19% 0,
      36% 3%,
      100% 20%,
      100% 100%,
      70% 100%,
      30% 100%,
      0 100%,
      0 7%
    );
    clip-path: polygon(
      19% 0,
      36% 3%,
      100% 20%,
      100% 100%,
      70% 100%,
      30% 100%,
      0 100%,
      0 7%
    );
  }
  .context {
    height: 50%;
    width: 100%;
    .swiper {
      height: 100%;
      width: 100%;
      display: flex;
      .imagebox {
        position: relative;
        height: 100%;
        width: 100%;
        .imageItem {
          transform: translateX(130%) scale(1);
          // z-index: 5;
          top: 50rpx;
          position: absolute;
          height: 60rpx;
          width: 60rpx;
          left: 0;
          border-radius: 10rpx;
        }
      }
    }
    .text{
      padding:0 20rpx;
        .title{
          margin: 20rpx 0;
        }
      .text-context{
        display: flex;
        align-items: center;
        .icon{
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: 50% 50%;
          animation: revolve 3s infinite linear;
        }
       .text-name{
        font-size: 20rpx;
        color:black;
       }
      }
    }
  }
}
</style>
