<template>
  <view class="knowledge-box">
    <BookStoreList :istingshu="true" />
    <view class="swiper-tabs-box" @touchmove.stop>
      <view class="scroll-box">
        <KnowledgeSwiper />
        <view class="card-view">
          <KnowledgeCard v-for="(item, index) in 8" :key="index" scroll-x />
        </view>
      </view>
    </view>
    <view class="Selected" @touchmove.stop>
      <view class="scroll1-box">
        <KnowledgeSelected v-for="i in 4" :key="i" class="item"/>
      </view>
    </view>
    <view class="BookList-box">
      <view class="list-title">
        爆款网文听听看
      </view>
      <view class="context-box">
            <KnowledeList v-for="index in 10" :key="index"/>
      </view>
    </view>
  </view>
</template>

<script>
import KnowledeList from "./components/KnowledeList.vue";
import KnowledgeCard from "./components/KnowledgeCard.vue";
import BookStoreList from "../components/BookStoreList.vue";
import KnowledgeSwiper from "./components/KnowledgeSwiper.vue";
import KnowledgeSelected from "./components/KnowledgeSelected.vue";
export default {
  name: "Knowledge",
  components: {
    BookStoreList,
    KnowledgeSwiper,
    KnowledgeCard,
    KnowledgeSelected,
    KnowledeList,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.knowledge-box {
  padding: 0 30rpx;
  width: 100%;
  box-sizing: border-box;
  .swiper-tabs-box {
    margin: 30rpx 0;
    width: 100%;
    overflow-x: scroll;
    .scroll-box {
      width: calc((210rpx * 4) + 150rpx);
      // 浮动
      display: flex;

      .card-view {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  .Selected {
    margin: 30rpx 0;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    .scroll1-box {
      width:318%;
      .item {
        width: 70vw;
        display: inline-block;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .BookList-box{
    width: 100%;
    height: auto;
    background-color: #ffffff;
    border-radius: 30rpx;
    padding: 30rpx;
    box-sizing: border-box;
    .list-title{
     font-weight: 600;
    }
  }
}
</style>
