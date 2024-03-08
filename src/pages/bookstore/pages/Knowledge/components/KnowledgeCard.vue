<template>
   <view class="card-box">
    <view class="title">情感</view>
    <image
    class="image"
        src="./images/06942b34e99f4c959be3e0014608f7cd_2.png"
        mode="scaleToFill"
    />
   </view>
</template>

<script>
export default {
    name: 'KnowledgeCard',

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
.card-box{

    margin: 0 0 10rpx 20rpx;
    width: 150rpx;
    height: 80rpx;
    background-color: fuchsia; 
    position: relative;
    border-radius: 20rpx;
    padding: 20rpx;
    overflow: hidden;
    .image{
    height: 100rpx;
    width: 100rpx;
     position: absolute;
     bottom: 0;
     right: -20rpx;
     transform:rotate(30rad);
    }
}
</style>