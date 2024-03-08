<template>
   <view class="usercenterview-listoffeatures">
      <ul>
        <li>
          <i class="iconfont">&#xe6cf;</i>

          <text>游戏中心</text>
        </li>
        <li>
          <i class="iconfont">&#xe68a;</i>
          <text>笔记书摘</text>
        </li>
        <li>
          <i class="iconfont">&#xe639;</i>
          <text>看过的人</text>
        </li>
        <li>
          <i class="iconfont">&#xe7d3;</i>
          <text>阅读偏好</text>
        </li>
        <li>
          <i class="iconfont">&#xe7de;</i>
          <text>我的下载</text>
        </li>
        <li>
          <i class="iconfont">&#xeca1;</i>
          <text>赞过的短剧</text>
        </li>
        <li>
          <i class="iconfont">&#xe61b;</i>
          <text>番茄指南</text>
        </li>
        <li>
          <i class="iconfont">&#xe605;</i>
          <text>我的公益</text>
        </li>
        <li>
          <i class="iconfont">&#xe60d;</i>
          <text>反馈与帮助</text>
        </li>
        <li>
          <i class="iconfont">&#xe633;</i>
          <text>邀请有礼</text>
        </li>
      </ul>
    </view>
</template>

<script>
export default {
    name: 'UsercenterviewLlistoffeatures',

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
 .usercenterview-listoffeatures {
    background-color: #ffffff;
    margin: 20rpx 0;
    border-radius: 20rpx;
    padding: 30rpx;
    box-sizing: border-box;

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        list-style-type: none;
        width: 33%;
        height: 180rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        i {
          font-size: 50rpx;
          font-weight: bold;
        }

        text {
          font-size: 30rpx;
          font-weight: bold;
        }
      }
    }
  }
</style>