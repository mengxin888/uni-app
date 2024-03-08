<template>
   <view class="usercenterview-wallet">
      <view class="wallet-top">
        <view class="top-goldcoins">
          <text class="goldcoins-num">0</text>
          <text class="goldcoins-name">金币余额（币）</text>
        </view>
        <view class="top-money">
          <view class="money-balance">
            <text class="balance-num">0.01</text>
            <text class="balance-name">现金余额（币）</text>
          </view>
          <view class="money-cash">
            <i class="iconfont righticon">&#xe6a0;</i>
            <text>微信提现</text>
            <i class="iconfont">&#xe62d;</i>
          </view>
        </view>
      </view>
      <view class="wallet-bottom">
        <text class="bottom-benefits-tab">福利</text>
        <text class="bottom-benefits-info">领取我的今日专属福利</text>
        <text class="bottom-benefits-btn">立即领取</text>
      </view>
    </view>
</template>

<script>
export default {
    name: 'UsercenterviewWallet',

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
  .usercenterview-wallet {
    background-color: #ffffff;
    border-radius: 20rpx;
    margin: 20rpx 0;
    padding: 30rpx;
    box-sizing: border-box;

    .wallet-top {
      display: flex;
      justify-content: space-between;
      // align-items: center;
      height: 100rpx;

      .top-goldcoins {
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: space-between;

        .goldcoins-num {
          font-size: 35rpx;
          font-weight: bold;
        }

        .goldcoins-name {
          font-size: 29rpx;
          color: #a9a9a9;
        }
      }

      .top-money {
        display: flex;
        // align-items: center;

        .money-balance {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .balance-num {
            font-size: 35rpx;
            font-weight: bold;
          }

          .balance-name {
            color: #a9a9a9;
            font-size: 29rpx;
          }
        }

        .money-cash {
          display: flex;
          align-items: center;
          margin-left: 30rpx;

          .lefticon {
            height: 30rpx;
            width: 30rpx;
          }

          text {
            font-size: 25rpx;
            font-weight: bold;
            margin-left: 10rpx;
          }

          .righticon {
            color:#24af41 ;
            font-size: 25rpx;
          }
        }
      }
    }

    .wallet-bottom {
      padding: 30rpx;
      background-color: #f7f7f7;
      margin-top: 25rpx;
      border-radius: 20rpx;
      box-sizing: border-box;
      position: relative;

      .bottom-benefits-tab {
        font-size: 20rpx;
        font-weight: bold;
        color: #d49f83;
        background-color: #f5eae3;
        padding: 10rpx;
        margin-right: 10rpx;
      }

      .bottom-benefits-info {
        font-size: 30rpx;
        font-weight: bold;
        color: #888888;
      }

      .bottom-benefits-btn {
        position: absolute;
        right: 25rpx;
        color: #df9163;
      }
    }
  }
</style>