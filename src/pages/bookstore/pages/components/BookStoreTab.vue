<template>
 <view class="booktab-view">
     <view class="booktab-item">
       <image
        src="./icon/shu.png"
        mode="scaleToFill"
       />
        <text>完本</text>
     </view>
     <view class="booktab-item">
        <image
            src="./icon/NEW.png"
            mode="scaleToFill"
        />
        <text>新书</text>
     </view>
     <view class="booktab-item">
        <image
            src="./icon/duanpian.png"
            mode="scaleToFill"
        />
        <text>短篇</text>
     </view>
     <view class="booktab-item">
        <image
         src="./icon/icon_shuqian.png"
         mode="scaleToFill"
        />
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
      image{
         // 保持原图宽高比例，显示长边
            width: 60rpx;
            height: 50rpx;
            
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