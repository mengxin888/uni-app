<template>
  <view class="box">
    <WatchDramaCard>
      <template slot="title">
        <view class="title">
          <view
            @click="Switch(0)"
            :class="{ 'active-text': isswitch == 0 }"
            class="item"
            >男生榜</view
          >
          <view
            @click="Switch(1)"
            :class="{ 'active-text': isswitch == 1 }"
            class="item"
            >女生榜</view
          >
        </view>
      </template>
      <template slot="context">
        <!-- <WatchDramaSwiper /> -->
        <WatchDramaSwiper1Vue :valuelist="list" :scalestart="1" :scaleend="1.2">
          <template slot-scope="{ row }">
            <image :src="row.Imageurl" mode="scaleToFill" />
          </template>
          <template slot-scope="{ row }" slot="bottom">
            <view class="name">{{ row.name }}</view>
            <view class="info">{{ row.info }}</view>
          </template>
        </WatchDramaSwiper1Vue>
      </template>
    </WatchDramaCard>
    <WatchDramaCard rightname="全部">
      <template slot="title">
        <text class="TWOtitle">最近在看</text>
      </template>
      <template slot="context">
        <view class="TWOcontext">
          <view class="TWOitem" v-for="index in 2" :key="index">
            <view class="imgbox">
              <image src="" mode="scaleToFill" />
            </view>
            <text class="TWObookname"> 归来！然后向魔... </text>
          </view>
        </view>
      </template>
    </WatchDramaCard>
    <WatchDramaCard rightcolor="#5d4089" backGround="#ded8fe">
      <template slot="title">
        <text class="THREEtitle">翻版漫画</text>
      </template>
      <template slot="context">
        <view class="THREEcontext" @touchmove.stop>
          <view class="bookcard-context-item">
            <image
              class="icon"
              src="data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M468.544 534.32h80.048l14.336-68.304h-80.352z' fill='%23ea6539'/%3E%3Cpath d='M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm183.168 466.016h-66.432l-14.032 68.304h73.392l-16.928 68.24H600l-29.12 136.528h-65.472L532.96 602.56h-79.088l-28.016 136.528h-65.472l27.408-136.528H321.04l14.704-68.24h67.376l13.376-68.304h-71.824l16.56-68.272h72.736l26.144-136.08h66.736l-25.84 136.08h79.088l26.8-136.08h66.112l-26.144 136.08h66.432l-18.128 68.272z' fill='%23ea6539'/%3E%3C/svg%3E"
              mode=""
            ></image>
            <text>你们♥中的No.1 只限一本</text>
          </view>
          <view class="bookcard-context-item">
            <image
              class="icon"
              src="data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M468.544 534.32h80.048l14.336-68.304h-80.352z' fill='%23ea6539'/%3E%3Cpath d='M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm183.168 466.016h-66.432l-14.032 68.304h73.392l-16.928 68.24H600l-29.12 136.528h-65.472L532.96 602.56h-79.088l-28.016 136.528h-65.472l27.408-136.528H321.04l14.704-68.24h67.376l13.376-68.304h-71.824l16.56-68.272h72.736l26.144-136.08h66.736l-25.84 136.08h79.088l26.8-136.08h66.112l-26.144 136.08h66.432l-18.128 68.272z' fill='%23ea6539'/%3E%3C/svg%3E"
              mode=""
            ></image>
            <text>你们♥中的No.1 只限一本</text>
          </view>
          <view class="bookcard-context-item">
            <image
              class="icon"
              src="data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M468.544 534.32h80.048l14.336-68.304h-80.352z' fill='%23ea6539'/%3E%3Cpath d='M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm183.168 466.016h-66.432l-14.032 68.304h73.392l-16.928 68.24H600l-29.12 136.528h-65.472L532.96 602.56h-79.088l-28.016 136.528h-65.472l27.408-136.528H321.04l14.704-68.24h67.376l13.376-68.304h-71.824l16.56-68.272h72.736l26.144-136.08h66.736l-25.84 136.08h79.088l26.8-136.08h66.112l-26.144 136.08h66.432l-18.128 68.272z' fill='%23ea6539'/%3E%3C/svg%3E"
              mode=""
            ></image>
            <text>你们♥中的No.1 只限一本</text>
          </view>
          <view class="bookcard-context-item">
            <image
              class="icon"
              src="data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M468.544 534.32h80.048l14.336-68.304h-80.352z' fill='%23ea6539'/%3E%3Cpath d='M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm183.168 466.016h-66.432l-14.032 68.304h73.392l-16.928 68.24H600l-29.12 136.528h-65.472L532.96 602.56h-79.088l-28.016 136.528h-65.472l27.408-136.528H321.04l14.704-68.24h67.376l13.376-68.304h-71.824l16.56-68.272h72.736l26.144-136.08h66.736l-25.84 136.08h79.088l26.8-136.08h66.112l-26.144 136.08h66.432l-18.128 68.272z' fill='%23ea6539'/%3E%3C/svg%3E"
              mode=""
            ></image>
            <text>你们♥中的No.1 只限一本</text>
          </view>
          <view class="bookcard-context-item">
            <image
              class="icon"
              src="data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M468.544 534.32h80.048l14.336-68.304h-80.352z' fill='%23ea6539'/%3E%3Cpath d='M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm183.168 466.016h-66.432l-14.032 68.304h73.392l-16.928 68.24H600l-29.12 136.528h-65.472L532.96 602.56h-79.088l-28.016 136.528h-65.472l27.408-136.528H321.04l14.704-68.24h67.376l13.376-68.304h-71.824l16.56-68.272h72.736l26.144-136.08h66.736l-25.84 136.08h79.088l26.8-136.08h66.112l-26.144 136.08h66.432l-18.128 68.272z' fill='%23ea6539'/%3E%3C/svg%3E"
              mode=""
            ></image>
            <text>你们♥中的No.1 只限一本</text>
          </view>
          <view class="bookcard-context-item">
            <image
              class="icon"
              src="data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M468.544 534.32h80.048l14.336-68.304h-80.352z' fill='%23ea6539'/%3E%3Cpath d='M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm183.168 466.016h-66.432l-14.032 68.304h73.392l-16.928 68.24H600l-29.12 136.528h-65.472L532.96 602.56h-79.088l-28.016 136.528h-65.472l27.408-136.528H321.04l14.704-68.24h67.376l13.376-68.304h-71.824l16.56-68.272h72.736l26.144-136.08h66.736l-25.84 136.08h79.088l26.8-136.08h66.112l-26.144 136.08h66.432l-18.128 68.272z' fill='%23ea6539'/%3E%3C/svg%3E"
              mode=""
            ></image>
            <text>你们♥中的No.1 只限一本</text>
          </view>
        </view>
      </template>
    </WatchDramaCard>
    <WatchDramaCard rightcolor="#5d4089" backGround="#ded8fe">
      <template slot="title">
        <text class="THREEtitle">拉风萌宝系列</text>
      </template>
      <template slot="context">
       <view>
        <view class="THREEimgbox">
        <image
          src=""
          mode="scaleToFill"
        />
        <view class="mack"></view>
       </view>
       <view class="THREElistbox">
        <view class="THREElist-item" v-for="(index) in 3" :key="index">
          <view class="THREEitem-imgbox">
            <image
              src=""
              mode="scaleToFill"
            />
            <view class="itemmack"></view>
          </view>
          <view class="THREEitem-bookinfos">
            <text class="THREEitem-bookname">总裁的天才萌宝</text>
            <text class="THREEitem-bookinfo">3262人再读</text>
          </view>
        </view>
       </view>
       </view>
      </template>
    </WatchDramaCard>
    <view class="itemlistbox">
      <BookitemVue :isinfo="false" v-for="(index) in 20 " :key="index"/>
    </view>
   
  </view>
</template>

<script>
import WatchDramaSwiper1Vue from "./components/WatchDramaSwiper1.vue";
import WatchDramaCard from "../components/WatchDramaCard.vue";
import WatchDramaSwiper from "./components/WatchDramaSwiper.vue";
import BookitemVue from '../components/Bookitem.vue';
export default {
  name: "WatchDrama",
  components: {
    BookitemVue,
    WatchDramaCard,
    WatchDramaSwiper,
    WatchDramaSwiper1Vue,
  },
  data() {
    return {
      isswitch: 0,
      list: [
        {
          Imageurl: require("../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
        {
          Imageurl: require("../../../../static/fhxx.png"),
          name: "九龙夺嫡，皇兄为何教父皇修仙",
          info: "81万热度",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    Switch(index) {
      this.isswitch = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  overflow-y:scroll;
  padding:0 30rpx;
  box-sizing: border-box;
}
.title {
  font-size: 30rpx;
  font-weight: bold;
  color: darkgrey;
  .item {
    display: inline-block;
  }
  & > .item:nth-child(2) {
    margin-left: 30rpx;
  }
}
.active-text {
  color: #333;
  transform: scale(1.2);
}
.name {
  font-size: 28rpx;
  margin: 10rpx 0;
  width: 200rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info {
  color: #999;
  font-size: 24rpx;
  overflow: hidden;
}
.TWOcontext {
  display: flex;
  flex-wrap: nowrap;
  .TWOitem {
    margin-right: 30rpx;
    display: flex;
    flex-direction: column;
    width: 220rpx;
    height: auto;
    .imgbox {
      height: 150rpx;
      background: red;
      border-radius: 10rpx;
    }
  }
  .TWObookname {
    font-size: 25rpx;
    font-weight: bold;
  }
}

.TWOtitle {
  font-size: 35rpx;
  font-weight: bold;
}
.THREEtitle {
  font-size: 45rpx;
  font-weight: bold;
  color: #5b4380;
}
.THREEcontext {
  height: 200rpx;
  margin-top: 30rpx;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // 超出部分隐藏
  overflow: hidden;
  // 开去横向滚动条
  overflow-x: scroll;

  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }

  // 吸附滚动
  scroll-snap-type: x mandatory;

  .bookcard-context-item {
    .icon {
      width: 30rpx;
      height: 30rpx;
    }
    @for $i from 1 through 6 {
      @if ($i<4) {
        &:nth-child(#{$i}) {
          width: 85%;
        }
      } @else {
        &:nth-child(#{$i}) {
          width: 100%;
        }
      }
    }

    // 吸附滚动
    scroll-snap-align: start;
    height: 33%;
    font-weight: bold;
    font-size: 29rpx;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 10rpx;
    }
  }
}
.THREEimgbox{
  width: 100%;
  height: 250rpx;
  background: yellow;
  margin: 10rpx 0;
}
.THREElistbox{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .THREElist-item{
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .THREEitem-imgbox{
      height:250rpx;
      width: 100%;
      border-radius:10rpx;
      background: red;
    }
    .THREEitem-bookinfos{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      .THREEitem-bookname{
        width: 100%;
        font-size: 35rpx;
        font-weight: bold;
        margin: 8rpx 0;
        // 不换行
        white-space: nowrap; /* 文本不换行 */
    overflow: hidden; /* 隐藏溢出部分 */
    text-overflow: ellipsis; /* 显示省略号 */
      }
      .THREEitem-bookinfo{
        font-size: 25rpx;
        color: #999;
      }
    }
  }
}
.itemlistbox{
  margin-top:30rpx;
  display: flex;
    flex-wrap: wrap;
}
</style>
