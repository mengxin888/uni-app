<template>
      <view class="usercenter-view">
      <UsercenterviewTop />
    <UsercenterviewUserinfo />
    <UsercenterviewInfotab />
    <UsercenterviewCard />
    <UsercenterviewTionbtn />
    <UsercenterviewWallet />
    <UsercenterviewActivities />
    <UsercenterviewLlistoffeatures />
    </view>
</template>

<script>
import UsercenterviewUserinfo from "./pages/UsercenterviewUserinfo.vue";
import UsercenterviewInfotab from "./pages/UsercenterviewInfotab.vue";
import UsercenterviewTop from "./pages/UsercenterviewTop.vue";
import UsercenterviewCard from "./pages/UsercenterviewCard.vue";
import UsercenterviewTionbtn from "./pages/UsercenterviewTionbtn.vue";
import UsercenterviewWallet from "./pages/UsercenterviewWallet.vue";
import UsercenterviewActivities from "./pages/UsercenterviewActivities.vue";
import UsercenterviewLlistoffeatures from "./pages/UsercenterviewLlistoffeatures.vue";
export default {
  name: "Usercenter",
  components: {
    UsercenterviewUserinfo,
    UsercenterviewInfotab,
    UsercenterviewTop,
    UsercenterviewCard,
    UsercenterviewTionbtn,
    UsercenterviewWallet,
    UsercenterviewActivities,
    UsercenterviewLlistoffeatures,
  },
  data() {
    return {
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
  .usercenter-view {
  background-color: rgb(246, 246, 246);
  padding: 0 30rpx;
  overflow-y: scroll;
  height: 100vh;
}
</style>
