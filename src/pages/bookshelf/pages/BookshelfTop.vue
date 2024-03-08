<template>
    <view class="bookshelf-top">
      <ul>
        <li
          v-for="(item, index) in toplist"
          :key="index"
          @click="toplistactive=index"
          :class="{ active: index === toplistactive }"
        >
          {{ item }}
        </li>
      </ul>
      <view class="top-icon">
        <i class="iconfont">&#xe687;</i>
        <i class="iconfont">&#xe60c;</i>
      </view>
    </view>
</template>

<script>
export default {
    name: 'BookshelfTop',
    data() {
        return {
            toplistactive: 0,
        }
    },
    props: {
        toplist: {
            type: Array,
            default: () => ['最近阅读', '我的书架']
        },
    },
    mounted() {
      
    },
}
</script>

<style lang="scss" scoped>
  .bookshelf-top {
    z-index: 10;
    margin:0 -30rpx;
    padding:var(--status-bar-height) 30rpx 0 30rpx;
    width: 100%;
    height: 80rpx;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      padding: 0;
      list-style: none;
      font-size: 30rpx;
      color: #97948d;
      font-weight: bold;
      .active {
        font-size: 40rpx;
        color: black;
      }
      li {
        list-style-type: none;
        display: inline-block;
        padding-right: 30rpx;
      }
    }
    view {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 150rpx;
      i {
        margin-left: 40rpx;
        font-size: 40rpx;
        font-weight: bold;
      }
    }
  }
</style>
