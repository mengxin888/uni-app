<template>
    <view class="cardbox" :style="`{background:${backGround},borderRadius:${borderRadiusvalue+'rpx'}}`">
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
        },
        borderRadius:{
            validator: function(value) {
        // 自定义验证逻辑，判断值是否为字符串或布尔值
        return typeof value === 'number' || typeof value === 'boolean';
      },
            default:20
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {    
    },
     computed: {
        borderRadiusvalue(){
              if(typeof this.borderRadius ==='boolean'){
                if(this.borderRadius===true){
                  return 20
                }else{
                  return 0
                }
              }else{
                return this.borderRadius
              }
        }
     },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.cardbox{
    width: 100%;
    border-radius: 20rpx;
    padding: 30rpx 0;
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
    margin-top: 20rpx;
}
</style>