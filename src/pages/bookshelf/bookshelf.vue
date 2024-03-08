<template>
    <view class="bookshelf-view">
      <BookshelfTop :toplist="toplist"/>
      <view class="scroll-box">
        <BookshelfTips />
        <Bookshelftabs :tablist="tablist"/>
        <Bookshelflist />
      </view>
    </view>
</template>
<script>
import BookshelfTop from "./pages/BookshelfTop.vue";
import BookshelfTips from "./pages/BookshelfTips.vue";
import Bookshelftabs from "./pages/BookshelfTabs.vue";
import Bookshelflist from "./pages/Bookshelflist.vue";
import Vue from "vue";
export default Vue.extend({
  components: { BookshelfTop, BookshelfTips, Bookshelftabs, Bookshelflist },
  data() {
    return {
      toplist: ["书架", "历史", "圈子"],
      tablist: ["全部", "连载", "完结", "出版"],
    };
  },
  mounted() {
  },
});
</script>

<style scoped lang="scss">

  .bookshelf-view {
    background-color: #ffffff;
    padding: 0 30rpx;
    height: 100vh;
    overflow-y: hidden;
    .scroll-box {
      width: 100%;
      padding-top: calc(80rpx + var(--status-bar-height));
      height: calc(100vh - 80rpx - var(--status-bar-height));
      overflow-y: scroll;
      overflow-x:hidden;
    }
  }

// 抵充tabs的外边距
</style>
