<template>
  <view class="box">
    <view class="title">章节精选</view>
    <view class="context"> 
        <view class="book-info">
            <image
            src="./images/06942b34e99f4c959be3e0014608f7cd_2.png"
            mode="scaleToFill"
        />
        <view class="infotext">
            <view class="name">
                024 金光寺寻宝
            </view>
            <view class="info">
                共16分钟·4497人收听
            </view>
        </view>
        </view>
        <button class="btn"><text class="iconfont">&#xe61c;</text></button>
    </view>
    <view class="tab"> 《小学生系列《西游记》》</view>
  </view>
</template>

<script>
export default {
  name: "KnowledgeSelected",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.box{
    height: 300rpx;
    background-color: red;
    padding: 25rpx;
    box-sizing: border-box;
    border-radius: 20rpx;
    margin-right: 30rpx;
    .title{
        font-weight: 650;
        font-size: 35rpx;
    }
    .context{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .book-info{
            margin: 20rpx 0;
            display: flex;
            justify-content: flex-start;
            image{
                height: 80rpx;
                width: 80rpx;
            }
            .infotext{
                margin-left: 20rpx;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .name{
                    font-size: 30rpx;
                    font-weight: 550;
                    color: #000000;
                }
                .info{
                    font-size: 25rpx;
                    color: #888888;
                }
            }
        }
        .btn{
           margin: 0;
           padding:0;
           height: 60rpx;
           width: 60rpx;
           border: none;
           border-radius: 50%;
           background-color: grey;
           position: relative;
           text{
            position: absolute;
            top: 50%;
            left: 24%;
            transform: translateY(-50%);
            font-size: 40rpx;
           }
        }
    }
    .tab{
        margin: 30rpx 0;
        font-size: 25rpx;
    }
}
</style>
