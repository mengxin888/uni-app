<template>
    <view class="context-item">
        <view class="context-item-top">
          <image src="@/static/fhxx.png" mode="scaleToFill" />
          <text class="context-item-top-rating">1.0分</text>
        </view>
        <view class="context-item-footer">
          <view class="context-item-footer-title"
            >九龙夺嫡，皇兄何故教父皇修仙</view
          >
          <view class="context-item-footer-info" v-if="isinfo"
            >国内高端的论文服务机构，专业提供“论文查重”、“论文指导”、“论文发表服务”，7年的运营沉淀
            积累了丰富的运作经验建立了一套完善的服务体系，秉承“服务至上，诚信为本”的宗旨，为近万名客户提供了优质的服务。</view
          >
          <view class="context-item-footer-tabs">
            <text class="tabs-tab">穿越</text>
            <text class="tabs-tab">12.98万人在读</text>
          </view>
        </view>
      </view>
</template>

<script>
export default {
    name: 'Bookitem',
    props: {
        isinfo: {
            type: Boolean,
            default: true
        }
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
.context-item {
      @media screen and (min-width: 600px) {
        width: 300rpx;
        height: auto;
     }
      margin: 1%;
      width: 48%;
      border-radius: 20rpx;
      background-color: #ffffff;
      overflow: hidden;
      .context-item-top {
        height: 400rpx;
        position: relative;
     
        image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .context-item-top-rating {
          position: absolute;
          left: 10rpx;
          bottom: 10rpx;
          font-size: 25rpx;
          color: #ffffff;
          font-weight: bold;
        }
      }
      .context-item-footer {
        padding: 10rpx;
        line-height: 40rpx;
        .context-item-footer-title {
          font-size: 27rpx;
          // font-weight: bold;
        }
        .context-item-footer-info {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 25rpx;
          color: #b6b6b6;
        }
        .context-item-footer-tabs {
          .tabs-tab {
            font-size: 25rpx;
            color: #b6b6b6;
            margin-right: 5rpx;
            padding: 5rpx 10rpx;
            background-color: #fcfcfc;
            border-radius: 10rpx;
          }
        }
      }
    }
</style>