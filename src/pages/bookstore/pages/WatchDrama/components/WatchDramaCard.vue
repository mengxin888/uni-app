<template>
    <view class="box" :style="{background:backGround}">
     <view class="top">
      <slot name="title"></slot>
      <view class="right"> 
        <text>{{ rightname }}</text>
        <u-icon name="arrow-right" size="10"></u-icon>
    </view>
     </view>
     <slot name="context"></slot>
    </view>
</template>

<script>
export default {
    name: 'WatchDramaCard',
    props: {
        backGround:{
            type:String,
            default:'#fff'
        },
        rightname:{
            type:String,
            default:'更多'
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
.box{
    width: 100%;
    border-radius: 20rpx;
    padding: 30rpx;
    .top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25rpx;
        }
    }
}
</style>