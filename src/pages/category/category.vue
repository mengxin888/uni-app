<template>
  <view class="category-view">
    <CategoryviewTop :topList="topList"/>
    <CategoryviewLeft :leftList="leftList"/>
    <CategoryviewRight/>
  </view>
</template>

<script>
import CategoryviewRight from "./pages/CategoryviewRight.vue";
import CategoryviewLeft from "./pages/CategoryviewLeft.vue";
import CategoryviewTop  from "./pages/CategoryviewTop.vue"
export default {
  name: "Category",
  components: {
    CategoryviewTop,
    CategoryviewLeft,
    CategoryviewRight
  },
  data() {
    return {
      topList: ["男生", "女生", "听书", "出版", "短剧", "漫画"],
      leftList: ["分类", "热门标签", "主题", "角色", "情节"],
    };
  },

  mounted() {},

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.category-view {
  padding-top: var(--status-bar-height);
  background-color: #f6f6f6;
  position: relative; 
}
</style>
