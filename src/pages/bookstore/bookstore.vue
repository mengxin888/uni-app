<template>
  <view class="bookstore-view">
    <BookStoreTop @getactiveindex="getactiveindex" ref="top" />
    <view class="topddd">
      <swiper class="swiper" @change="change" :current="pageindex">
        <swiper-item class="swiper-item">
          <Attention v-if='children.Attention'/>
          <LoadPageVue Text="加载中..." :isopen="!children.Attention"/>
        </swiper-item>
        <swiper-item class="swiper-item">
          <Recommended />
        </swiper-item>
        <swiper-item class="swiper-item">
          <Classic v-if="children.Classic" />
         <LoadPageVue Text="加载中..." :isopen="!children.Classic"/>
        </swiper-item>
        <swiper-item class="swiper-item">
          <LoadPageVue Text="加载中..." :isopen="!children.Knowledge"/>
          <Knowledge v-if="children.Knowledge" />
        </swiper-item>
        <swiper-item>
          <LoadPageVue Text="加载中..." :isopen="!children.ListenBook"/>
          <ListenBook v-if="children.ListenBook" />
        </swiper-item>
        <swiper-item>
         <LoadPageVue Text="加载中..." :isopen="!children.WatchDrama"/>
          <WatchDrama v-if="children.WatchDrama" />
        </swiper-item>
        <swiper-item>
           <LoadPageVue Text="加载中..." :isopen="!children.Comic"/>
          <Comic v-if="children.Comic" />
        </swiper-item>
        <swiper-item>
           <LoadPageVue Text="加载中..." :isopen="!children.Newest"/>
          <Newest v-if="children.Newest" />
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<script>
import LoadPageVue from "./pages/components/LoadPage.vue";
import BookStoreTop from "./pages/components/BookStoreTop";
import Attention from "./pages/Attention/index.vue";
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
    LoadPageVue,
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
      children: {
        Attention: false,
        Recommended: true,
        Classic: false,
        Knowledge: false,
        ListenBook: false,
        WatchDrama: false,
        Comic: false,
        Newest: false,
      },
    };
  },
  methods: {
    getactiveindex(data) {
      this.pageindex = data.index;
      for (let i in this.children) {
        if (i == data.name && this.children[i] == false) {
          setInterval(() => {
            this.children[i] = true;
          }, 1000);
        }
      }
      // 子组件的事件
    },
    change(e) {
      // this.pageindex = e.detail.current;
      this.$refs.top.touchmoveindex(e.detail.current);
    },
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
      .swiper-item {
        overflow: scroll;
      }
    }
  }
}
</style>
