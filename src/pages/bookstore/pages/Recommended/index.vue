<template>
  <view class="box">
    <BookStoreList />
   <BookStoreCard />
    <BookStoreTab />
    <BookStoreRecommended />
  </view>
</template>

<script>
import BookStoreList from "../components/BookStoreList.vue";
import BookStoreRecommended from "./BookStoreRecommended.vue";
import BookStoreTab from "../components/BookStoreTab.vue";
import BookStoreCard from "./BookStoreCard.vue";
export default {
  name: "Recommended",
  components: { BookStoreList, BookStoreCard, BookStoreTab, BookStoreRecommended},
  data() {
    return {
      ViewIndex:1,
    };
  },

  mounted() {
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.box{
  padding: 0 35rpx;
}
</style>
