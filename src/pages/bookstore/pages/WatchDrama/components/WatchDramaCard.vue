<template>
    <view class="cardbox" :style="{background:backGround}">
     <view class="top">
      <slot name="title"></slot>
      <view class="right" :style='`color:${rightcolor}`'> 
        <text >{{ rightname }}</text>
        <u-icon name="arrow-right" size="10"></u-icon>
    </view>
     </view>
     <view class="context">
        <slot name="context" ></slot>
     </view>
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
        },
        rightcolor:{
            type:String,
            default:'balck'
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        console.log(this.rightcolor)
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.cardbox{
    width: 100%;
    border-radius: 20rpx;
    padding: 30rpx;
    margin-bottom:30rpx;
    box-sizing: border-box;
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
.context{
    margin: 30rpx 0;
}
</style>