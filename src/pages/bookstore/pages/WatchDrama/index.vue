<template>
  <view class="box">
    <WatchDramaCard>
      <template slot="title">
          <view class="title">
          <view @click="Switch(0)" :class="{'active-text':isswitch==0}" class="item">男生榜</view>
          <view @click="Switch(1)" :class="{'active-text':isswitch==1}" class="item">女生榜</view>
          </view>
      </template>
      <template slot="context">
        <WatchDramaSwiper/>
        <cc/>
      </template>
    </WatchDramaCard>
  </view>
</template>

<script>
import cc from "./components/cc.vue";
import WatchDramaCard from "./components/WatchDramaCard.vue";
import WatchDramaSwiper from "./components/WatchDramaSwiper.vue";
export default {
  name: "WatchDrama",
  components: {
    WatchDramaCard,
    WatchDramaSwiper,
    cc
  },
  data() {
    return {
      isswitch: 0,
    };
  },

  mounted() {},

  methods: {
    Switch(index){
      this.isswitch = index;
    }
  },
};
</script>

<style lang="scss" scoped>
.box{
  padding: 30rpx;
  box-sizing: border-box;
}
.title{
  font-size: 30rpx;
  font-weight: bold;
  color: darkgrey;
  .item{
    display: inline-block;
  }
  & >.item:nth-child(2){
    margin-left: 30rpx;
  }
}
.active-text{
  color: #333;
  transform: scale(1.2);
}
</style>
