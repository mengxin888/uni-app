<template>
  <view class="bookshelf-tabs">
    <ul>
      <li
        v-for="(item, index) in tablist"
        :key="index"
        @click="tabslistactive = index"
        :class="{ active: tabslistactive === index }"
      >
        {{ item }}
      </li>
    </ul>
    <view class="bookshelf-tabs-select">
      <i class="iconfont">
        &#xe627;
      </i>
      <text>筛选</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "BookshelfTabs",
  props: {
    tablist: {
      type: Array,
      default: () => ["全部", "连载", "完结"],
    },
  },
  data() {
    return {
      tabslistactive: 0,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.bookshelf-tabs {
  position: sticky;
  top:0;
  font-size: 28rpx;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  height: 80rpx;
  z-index: 10;
  margin: 0 -30rpx 10rpx -30rpx;
  padding: 0 30rpx;
  // box-sizing: border-box;
  ul {
    padding: 0;
    list-style: none;
    li {
      list-style-type: none;
      display: inline-block;
      padding: 10rpx 35rpx;
      margin: 0 10rpx;
      background-color: #f7f7f7;
      border-radius: 10rpx;
    }
    // 第一个
    li:first-child {
      margin-left: 0;
    }
    .active {
      color: #e37843;
      background-color: #feefe8;
    }
  }
  .bookshelf-tabs-select {
    display: flex;
    align-items: center;
    i{
      margin: 10rpx;
    }
  }
}
</style>
