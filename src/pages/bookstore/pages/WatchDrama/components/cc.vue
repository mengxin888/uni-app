<template>
  <view>
    <swiper class="scrollbox" next-margin="450rpx" @transition="transition">
      <swiper-item v-for="(item, index) in list" :key="index" class="item" :id="index">
        <view class="scrollbox-item">
          <view class="imagebox">
            <image
              :src="item.Imageurl"
              mode="scaleToFill"
              :style="`transform: scale(${item.scale});`"
            />
          </view>
          <view class="name">{{ item.name }}</view>
          <view class="info">{{ item.info }}</view>
          {{ item.scale }}
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      childrenWidth: 0,
      a: "30px",
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
    };
  },
  methods: {
    select(elementsName, options = {}, fn) {
      /**
       * @param {String} elementsName 选择器
       * @param {Object} options 选择器参数
       * @param {Function} fn 回调函数默认参数rects
       */
      uni
        .createSelectorQuery()
        .in(this)
        .selectAll(elementsName)
        .fields(options, (rects) => {
          fn(rects);
        })
        .exec();
    },
    init() {
      this.list.forEach((item, index) => {
        this.$set(this.list[index], "scale", 1);
        this.$set(this.list[0], "scale", 1.2);
      });
      this.select(".item", { size: true }, (rects) => {
        this.childrenWidth=rects[0].width;
      });
    },
    transition(e) {
        let arr=[]
        this.select(".item", { rect: true }, (rects) => {
            arr=[]
            rects.forEach((item, index) => {
                
                 if((Math.abs(item.left) - 30) < this.childrenWidth){
                    console.log(item, index)
                    arr.push({
                        ...item,
                        index
                    })
                 }  
            })
           
        });
        let leftwidth=e.detail.dx;
        let scrollLeft=Math.abs(leftwidth)/this.childrenWidth*0.2;
        if(leftwidth>0){
            
            this.list[arr[arr.length-1].index].scale=1+scrollLeft;
            this.list[arr[0].index].scale=1-scrollLeft;
        }else{
            // console.log(arr)
            this.list[arr[arr.length-1].index].scale=1-scrollLeft;
            this.list[arr[0].index].scale=1+scrollLeft;
            
        }
        },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped lang="scss">
.scrollbox {
  width: 100%;
  height: 350rpx;
  .scrollbox-item {
    width: 160rpx;
    height: 100%;
    display: flex;
    flex-direction: column;
    .imagebox {
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      image {
        width: 130rpx;
        height: 180rpx;
      }
    }
    .name {
      width: 100%;
      font-size: 28rpx;
      margin: 10rpx 0;
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
