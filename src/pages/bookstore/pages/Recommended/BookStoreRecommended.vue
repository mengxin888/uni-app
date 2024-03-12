<template>
  <view class="tj-view">
    <view class="tj-title">
      <BooklistH :list1="tabsx" />
    </view>
    <view class="tj-context">
      <Bookitem v-for="(index) in 20" :key="index" />
    </view>
  </view>
</template>

<script>
import BooklistH from "../components/BooklistH.vue";
import Bookitem from "../components/Bookitem.vue";
export default {
  name: "Bookrecommended",
  components: {
    Bookitem,
    BooklistH,
  },
  data() {
    return {
      tabs: [
        "轻松搞笑",
        "灵异",
        "科幻",
        "神豪",
        "末世",
        "都市修真",
        "都市日常",
        "悬疑灵异",
        "系统",
        "娱乐圈",
        "星际",
        "校花",
        "东方玄幻",
        "黑科技",
        "诸天万界",
        "异世大陆",
        "病娇",
        "网游",
        "灵气复苏",
        "无敌",
        "女强",
        "团宠",
        "单女主",
        "抗战谍战",
        "都市脑洞",
        "都市异能",
        "扮猪吃虎",
        "乡村",
        "历史古代",
        "马甲",
      ],
      isseleValue: "",
    };
  },
  //   计算属性
  computed: {
    tabsx() {
      return this.tabs.map((item, index) => {
        return {
          name: item,
          id: index,
        };
      });
    },
  },
  //   监听
  watch: {},
  mounted() {},

  methods: {
    action(index) {
      console.log(index);
      this.isseleValue = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.tj-view {
  .tj-title {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #f6f6f6;
    height: 80rpx;
  }
  .tj-context {
    display: flex;
    flex-wrap: wrap;
    // 一行显示两个
    // 检测屏幕宽度，如果小于 600rpx，就一行显示一个，否则一行显示两个
  }
}
</style>
