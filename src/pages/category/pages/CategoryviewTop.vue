<template>
   <view>
    <view class="categoryview-top">
      <ul>
        <li v-for="(item, index) in topList" :key="index" @click="istopActive=index" :class="{'top-active':index==istopActive}">{{ item }}</li>
      </ul>
	    <i class="iconfont icon">&#xe687;</i>
    </view>
   </view>
</template>

<script>
export default {
    name: 'CategoryviewTop',
    props: {
        topList:{
            type: Array,
            default:[]
        }
    },
    data() {
        return {
            istopActive: 0,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.categoryview-top {
    position: relative;
    ul {
      list-style: none;
      padding: 0;
      height: 150rpx;
      overflow: hidden;
      white-space: nowrap;
      overflow-x: scroll;
      display: flex;
      align-items: center;
      font-size: 35rpx;
      color: #666;
      li {
        display: inline-block;
        padding: 0 20rpx;

        font-weight: bold;
      }
      .top-active {
        color: black;
        font-size: 50rpx;
      }
    }
    .icon{
        position: absolute;
        right: 35rpx;
        // 自身的一半减去父元素的一半
        top: 40%;
        font-size: 60rpx;
        transform: translateY(-50%);
        // 模糊边框
        filter: drop-shadow(0 0 5rpx rgba(0,0,0,.2));
    }
  }
</style>