<template>
  <view @touchmove.stop>
    <u-tabs
      :list="list1"
      :lineHeight="0"
      :lineWidth="0"    
      :itemStyle="{
        padding: '5px 8px',
        borderRadius: '3px',
        backgroundColor: '#f5f5f5',
        color: '#666666',
        margin: '0 5px',
      }"
    >
      <view slot="right" style="padding-left: 4px">
        <image
          class="icon"
          src="data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M928 304c0 7-2.4 13.9-7.4 19.6l-387.2 417c-11.7 12.2-31.2 12.2-42.9 0l-387.2-417c-10.8-12.2-9.7-31.1 2.8-41.9 12.4-10.9 31.1-9.6 41.9 2.8l364 388.1 363.9-388.2c10.8-12.4 29.5-13.6 41.9-2.8 6.8 5.9 10.2 14.2 10.2 22.4z'/%3E%3C/svg%3E"
          mode=""
        ></image>
      </view>
    </u-tabs>
  </view>
</template>

<script>
export default {
props: {
    list1:{
      type:Array,
      default:()=>[]
    }
},
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.icon {
  width: 30rpx;
  height: 30rpx;
}
</style>
