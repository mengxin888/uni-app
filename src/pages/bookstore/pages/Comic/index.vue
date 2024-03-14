<template>
  <view class="comicbox">
    <WatchDramaCard :borderRadius="false" rightname="完整榜单">
      <template slot="title">
        <ul class="ONEtitle">
          <li
            @click="isactive1 = index"
            v-for="(item, index) in title1"
            :key="index"
            :class="{ active1: isactive1 == index }"
          >
            {{ item }}
          </li>
        </ul>
      </template>
      <template slot="context">
        <BooklistHVue :list1="tabs1" />
        <scroll-view scroll-x class="scroll-x">
          <Booklistitem v-for="index in 8" :key="index" />
        </scroll-view>
      </template>
    </WatchDramaCard>
    <WatchDramaCard :borderRadius="false" rightname="更多分类">
      <template slot="title">
        <view class="TWOTITLE"> 热门标签 </view>
      </template>
      <template slot="context">
        <BooklistHVue :list1="tabs1" />
        <scroll-view scroll-x class="scroll-x">
          <Booklistitem v-for="index in 8" :key="index" />
        </scroll-view>
      </template>
    </WatchDramaCard>
    <WatchDramaCard :borderRadius="false" rightname="更多分类">
      <template slot="title">
        <view class="TWOTITLE">书评 </view>
      </template>
      <template slot="context">
        <scroll-view scroll-x class="scroll-x">
          <view class="scroll-item-box">
            <view class="box-top">
              <view class="comments">


                
              </view>
              <view class="comments-author"></view>
            </view>
            <view class="item-bottom">
              <view class="imagebox"></view>
              <view class="bottom-info">
                <view class="info-name"> 民调局异闻录 </view>
                <view class="author"> 耳东水寿 </view>
              </view>
            </view>
          </view>
        </scroll-view>
      </template>
    </WatchDramaCard>
  </view>
</template>

<script>
import Booklistitem from "../components/booklistitem.vue";
import BooklistHVue from "../components/BooklistH.vue";
import WatchDramaCard from "../components/WatchDramaCard.vue";
export default {
  name: "Index",
  data() {
    return {
      isactive1: 0,
      title1: ["推荐榜", "高分榜", "新书榜"],
      tabs1: [
        {
          name: "全部",
        },
        {
          name: "现实小说",
        },
        {
          name: "中国名著",
        },
        {
          name: "情感小说",
        },
        {
          name: "中国文学",
        },
        {
          name: "外国文学",
        },
        {
          name: "当代文学",
        },
        {
          name: "悬疑推理",
        },
        {
          name: "古代文学",
        },
      ],
    };
  },
  components: {
    Booklistitem,
    WatchDramaCard,
    BooklistHVue,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.comicbox {
  background: #f8f3ed;
  width: 100%;
  height: 100%;
  overflow-y:scroll ;
  .ONEtitle {
    display: flex;
    justify-content: start;
    list-style: none;
    padding: 0;
    li {
      list-style-type: none;
      margin-right: 40rpx;
      font-weight: 550;
    }
    .active1 {
      font-size: 35rpx;
      font-weight: 800;
    }
  }
  .scroll-x {
    white-space: nowrap;
    margin-top: 30rpx;
  }
  .TWOTITLE {
    font-size: 35rpx;
    font-weight: 800;
  }
}
</style>
