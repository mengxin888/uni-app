<template>
  <view class="box" v-show='isopen'>
     <view class="context" >
        <u-loading-icon  textSize="18"></u-loading-icon>
        <view class="text">{{ Text }}</view>
     </view>
  </view>
</template>

<script>
export default {
    props:{
		isopen:{
			type:Boolean,
			default:false
		},
      Text:{
        type:String,
        default:'加载中...'
      }
    },
  data () {
    return {

    }
  },
  components: {

  },
  mounted() {

  },
  methods: {

  },
}

</script>
<style scoped lang="scss">
.box{
	height: 100%;
	display: flex;
	justify-content: center;
	margin-top: 100rpx;
	.text{
		font-size: 30rpx;
		margin: 10rpx 0;
		color: #c3c4c7;
	}
}
</style>