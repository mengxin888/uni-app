<template>
    <view class="Newestbox">
        <view class="Newest-context">
            <view class="title">猜你喜欢</view>
            <view class="newest-item" v-for="(index) in 10" :key="index">
                <view class="imgbox">
                   <image
                    :src="require('@/static/fhxx.png')"
                    mode="scaleToFill"
                   />
                </view>
                <view class="item-context">
                    <view class="name">送外卖的我，其实是个道士</view>
                    <view class="info">马青松，灵岩道观天才少年，肩负着找回失窃的镇天印的重任他奉师命下山，...</view>
                    <view class="tabs">都市修真·都市·连载中·潜力好书</view>
                </view>
                <view class="deletebtn">
                  <text class="iconfont icon">&#xe614;</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    
    name: 'Index',

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
.Newestbox{
    height: 100%;
    width: 100%;
    overflow-y:scroll;
    .Newest-context{
        margin: 0 30rpx;
        background: #fff;
        padding: 0 30rpx;
        .title{
            font-size: 40rpx;
            font-weight: bold;
            padding: 30rpx 0;
        }
        .newest-item{
            position: relative;
            display: flex;
            justify-content: space-between;
            margin-bottom:30rpx;
            .imgbox{
                width: 150rpx;
                height: 200rpx;
                image{
                    width: 100%;
                    height: 100%;
                    border-radius: 10rpx;
                }
            }
            .item-context{
                width: calc(100% - 180rpx);
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                .name{
                    font-size: 35rpx;
                    font-weight: bold;
                }
                .info{
                    font-size: 25rpx;
                    color: #999;
                    margin: 10rpx 0;
                }
                .tabs{
                    font-size: 30rpx;
                    color: #999;
                }
            }
            .deletebtn{
                position:absolute;
                right: 0;
                bottom: 0;
                
                text{
                    font-size: 20rpx;
                    color: black;
                    padding: 5rpx 10rpx;
                    border-radius: 10rpx;
                    background: rgb(245, 245, 245);
                }
                }
            }
        }
    }
</style>