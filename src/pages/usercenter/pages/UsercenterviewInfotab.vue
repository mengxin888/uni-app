<template>
    <view class="usercenterview-infotab">
      <ul>
        <li>
          <text class="infotab-num">0</text>
          <text class="infotab-name">关注</text>
        </li>
        <li>
          <text class="infotab-num">0</text>
          <text class="infotab-name">粉丝</text>
        </li>
        <li>
          <text class="infotab-num">0</text>
          <text class="infotab-name">获赞</text>
        </li>
      </ul>
    </view>
</template>

<script>
export default {
    name: 'UsercenterviewInfotab',

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
.usercenterview-infotab {
    position: relative;

    ul {
      position: relative;
      left: -30rpx;
      width: calc(100% + 60rpx);
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: space-evenly;

      li {
        // 加上view的30内边距
        width: 30%;
        align-items: center;
        list-style-type: none;
        display: flex;
        flex-direction: column;

        .infotab-num {
          font-weight: bold;
          font-size: 35rpx;
        }

        .infotab-name {
          color: #a9a9a9;
          font-size: 25rpx;
          font-weight: 100;
        }
      }
    }
  }
</style>