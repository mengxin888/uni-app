<template>
 <view class="booktab-view">
     <view class="booktab-item">
       <text class="iconfont icon-tab">&#xe634;</text>
        <text>完本</text>
     </view>
     <view class="booktab-item">
        <!-- <image
            src="./icon/NEW.png"
            mode="scaleToFill"
        /> -->
        <text class="iconfont icon-tab">&#xe68d;</text>
        <text>新书</text>
     </view>
     <view class="booktab-item">
      <text class="iconfont icon-tab">&#xe643;</text>
        <text>短篇</text>
     </view>
     <view class="booktab-item">
      <text class="iconfont icon-tab">&#xe8a8;</text>
        <text>书摘</text>
     </view>
 </view>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted() {

  },
  methods: {

  },
}

</script>
<style scoped lang="scss">
 
 $backcolor:(rgba(18, 150, 219,.3),rgba(102, 102, 102,0.3),rgba(235, 207, 80,0.7),rgba(112, 252, 122,0.7));
.booktab-view {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  margin: 10rpx 0;
   border-radius: 20rpx;
   padding: 30rpx 0;
   @each $color in $backcolor{
      $index: index($backcolor, $color);
      .booktab-item:nth-child(#{$index}){
         background-color: $color;
         .icon-tab{
         // 保持原图宽高比例，显示长边
           color:darken($color,20%);
      }
      }
   }
  .booktab-item{
   border-radius: 50%;
   // background-color: black;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 100rpx;
      height: 100rpx;
      padding: 10rpx;
      .icon-tab{
         // 保持原图宽高比例，显示长边
           font-size: 50rpx;
      }
      text{
           font-size: 30rpx;
           font-weight: bold;
           height: 30rpx;
           color: #fdfcfc;
      }
  }
}
</style>