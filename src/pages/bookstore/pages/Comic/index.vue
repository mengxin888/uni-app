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
        <view class="TWOTITLE">书评</view>
      </template>
      <template slot="context">
        <swiper class="swiper" next-margin="80rpx">
          <swiper-item v-for="(index) in 5" :key="index" class="item">
            <view class="scroll-item-box">
              <view class="box-top">
                <text class="comments">
                  <text class="comments-context">“知己知彼，将心比心。酒逢知己饮，诗向会人吟。相识满天下，知心能几人？相逢好似初相识，到老终无怨恨心。
                  </text>
                </text>
                <view class="comments-author"></view>
              </view>
              <view class="item-bottom">
                <view class="item-bottom-left">
                  <view class="imagebox">
                    <image
                      :src="require('@/static/fhxx.png')"
                      mode="scaleToFill"
                    />
                  </view>
                  <view class="bottom-info">
                    <view class="info-name">三体全集（全三册）</view>
                    <view class="author"> 刘慈欣·科幻·22.7万人在读 </view>
                  </view>
                </view>
                <view class="item-bottom-right">
                  <text class="iconfont item-bottom-right-icon">&#xeca1;</text>
                </view>
              </view>
            </view>
          </swiper-item>
        </swiper>
      </template>
    </WatchDramaCard>
    <view class="live-you-books">
      <u-divider text="猜你喜欢"></u-divider>
    </view>
    <view class="live-you-books-box">
      <view class="context-box">
            <Bookitem v-for="(index) in 20" :key="index"/>
        </view>
    </view>
  </view>
</template>

<script>
import Bookitem from "../components/Bookitem.vue";
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
    Bookitem,
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
  overflow-y: scroll;
  .ONEtitle {
    display: flex;
    justify-content: start;
    align-items: center;
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
  .swiper {
    margin-top:30rpx;
    width: 100%;
    height: 320rpx;
    .item{
      
      .scroll-item-box {
        border-radius: 30rpx;
      overflow: hidden;
      box-sizing: border-box;
      padding: 30rpx;
      background: red;
      width: 95%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      .box-top {
        border-bottom: 1rpx dashed #fff;
        // height: 200rpx;
        padding: 10rpx;
        .comments {
          width: 100%;
          // 3行多余省略
          .comments-context {
            text-indent: 2em;
            overflow: hidden;
            // text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            &::after {
              content: "...”";
              display: inline; 
            }
          }
        }
      }
      .item-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 30rpx;
        .item-bottom-left {
          display: flex;
          justify-content: start;
          align-items: center;
          .imagebox {
            width: 60rpx;
            height: 80rpx;
            image {
              width: 100%;
              height: 100%;
            }
          }
          .bottom-info {
            margin-left: 20rpx;
            display: flex;
            flex-direction: column;
            padding: 10rpx 0;
            .info-name {
              font-size: 30rpx;
              font-weight: 800;
            }
            .author {
              font-size: 22rpx;
              color: #999;
            }
          }
        }
        .item-bottom-right {
          width: 100rpx;
          height: 20rpx;
          border-left: 1rpx solid #fff;
          padding-left: 20rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          .item-bottom-right-icon {
            font-size: 50rpx;
            color: black;
          }
        }
      }
    }
    }
  }
  .live-you-books{
  }

  .live-you-books-box{
    padding: 0 30rpx;
    .context-box{
        display: flex;
        flex-wrap: wrap;
    }
  }
  
}
</style>
