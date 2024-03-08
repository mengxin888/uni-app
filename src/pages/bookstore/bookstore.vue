<template>
  <view class="bookstore-view">
    <BookStoreTop @getactiveindex="getactiveindex" ref="top" />
    <view class="topddd">
      <swiper class="swiper"  @change="change"  :current="pageindex">
        <swiper-item class="swiper-item">
          <Attention />
        </swiper-item>
        <swiper-item class="swiper-item">
          <Recommended />
        </swiper-item>
        <swiper-item class="swiper-item">
          <Classic />
        </swiper-item>
        <swiper-item class="swiper-item">
          <Knowledge />
        </swiper-item>
        <swiper-item>
          <ListenBook />
        </swiper-item>
        <swiper-item>
          <WatchDrama />
        </swiper-item>
        <swiper-item>
          <Comic />
        </swiper-item>
        <swiper-item>
          <Newest />
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<script>
import Attention from "./pages/Attention/index.vue";
import BookStoreTop from "./pages/components/BookStoreTop";
import Recommended from "./pages/Recommended/index.vue";
import Classic from "./pages/Classic/index.vue";
import Knowledge from "./pages/Knowledge/index.vue";
import ListenBook from "./pages/ListenBook/index.vue";
import WatchDrama from "./pages/WatchDrama/index.vue";
import Comic from "./pages/Comic/index.vue";
import Newest from "./pages/Newest/index.vue";
// 将异步组件定义为函数
export default {
  components: {
    BookStoreTop,
    Attention,
    Recommended,
    Classic,
    Knowledge,
    ListenBook,
    WatchDrama,
    Comic,
    Newest,
  },
  data() {
    return {
      pageindex: 1,
    };
  },
  methods: {
    getactiveindex(index) {
      this.pageindex = index;
      // 子组件的事件
    },
    change(e){
      // this.pageindex = e.detail.current;
      this.$refs.top.touchmoveindex(e.detail.current)
    }
  },
  mounted() {
  },
};
</script>

<style scoped lang="scss">
$scrollnum: 9;
.bookstore-view {
  background-color: rgb(246, 246, 246);

  .topddd {
    padding-top: calc(180rpx + var(--status-bar-height));
    height: calc(100vh - (180rpx + var(--status-bar-height)));
    width: 100%;
    overflow: hidden;

    .swiper {
      height: 100%;
      .swiper-item{
        overflow: scroll;
      }
    }
  }
}
</style>
