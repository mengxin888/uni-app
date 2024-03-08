<template>
    <view class="usercenterview-tionbtn">
      <ul>
        <li>
          <i class="iconfont">&#xe60f;</i>
          <text>浏览历史</text>
        </li>
        <li>
         <i class="iconfont">&#xe771;</i>
          <text>我的消息</text>
        </li>
        <li>
         <i class="iconfont">&#xe771;</i>
          <text>游戏中心</text>
        </li>
        <li>
          <i class="iconfont">&#xe65a;</i>
          <text>商城</text>
        </li>
      </ul>
    </view>
</template>

<script>
export default {
    name: 'UsercenterviewTionbtn',

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
.usercenterview-tionbtn {
    background-color: #ffffff;
    border-radius: 20rpx;

    ul {
      list-style: none;
      padding: 0;
      display: flex;

      li {
        width: 25%;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 200rpx;
        justify-content: space-evenly;

        i {
          font-size: 60rpx;
        }

        text {
          font-size: 35rpx;
          // color: #a9a9a9;
          font-weight: bold;
        }
      }
    }
  }
</style>