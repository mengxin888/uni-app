<template>
    <view class="categoryview-right">
      <view class="right-item">
        <text class="item-title">分类</text>
        <ul>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
        </ul>
      </view>
      <view class="right-item" v-for="(index) in 20" :key="index">
        <text class="item-title">分类</text>
        <ul>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
          <li>都市</li>
        </ul>
      </view>
    </view>
</template>

<script>
export default {
    name: 'CategoryviewRight',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.categoryview-right{
     position: absolute;
     right: 0;
     width: 80%;
     height: calc(100vh - 150rpx - var(--status-bar-height));
     top:calc(150rpx + var(--status-bar-height));
     background-color: #ffffff;
     border-top-left-radius: 40rpx;
     padding: 40rpx;
     box-sizing: border-box;
        overflow: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
     .right-item{
       .item-title{
         font-weight: bold;
         color: #d1d1d1;
       }
       ul{
        padding: 0;
         list-style: none;
         padding: 0;
         display: flex;
         flex-wrap: wrap;
         margin: 25rpx 0;
         li{
            padding: 15rpx 50rpx;
            margin:10rpx 20rpx 10rpx 0;
           text-align: center;
           font-size: 28rpx;
           font-weight: bold;
           color: #525252;
           background-color: #f7f7f7;
           border-radius: 10rpx;
           &:nth-child(3n){
             margin-right: 0;
           }
         }
       }
     }
  }
</style>