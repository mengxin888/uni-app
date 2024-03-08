<template>
    <view>
        <view class="categoryview-left">
      <ul>
        <li v-for="(item, index) in leftList" :key="index" @click="isleftActive=index" :class="{'left-active':index==isleftActive}">{{ item }}</li>
      </ul>
    </view>
    </view>
</template>

<script>
export default {
    name: 'CategoryviewLeft',
      props:{
        leftList:{
            type:Array,
            default:[]
        }
      },
    data() {
        return {
            isleftActive: 0,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
 .categoryview-left {
    width: 20%;
    ul {
      width: 100%;
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666;
      height: calc(100vh - 150rpx);
      li {
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        font-size: 28rpx;
        font-weight: bold;
      }
      .left-active {
        color: #e4783e;
      }
    }
  }
</style>