<template>
  <view class="listenbook-view">
    <BooklistH :list1="list1"/>
    <view class="listenbook-context">
      <view>
        <u-grid :border="false" @click="click" col="3">
          <u-grid-item v-for="(index) in 30" :key="index">
            <Booklistitem/>
          </u-grid-item>
        </u-grid>
        <u-toast ref="uToast" />
      </view>
    </view>
  </view>
</template>

<script>
/**
 * item显示不全时是u-grid-item的宽度在data中定义错误问题
 * 
*/
import Booklistitem from "../components/booklistitem.vue";
import BooklistH from "../components/BooklistH.vue";
export default {
  name: "MyProjectIndex",
  components: {
    BooklistH,
    Booklistitem
  },
  data() {
    return {
      list1: [
        {
          name: "反转",
        },
        {
          name: "总裁",
        },
        {
          name: "现代言情",
        },
        {
          name: "都市脑洞",
        },
        {
          name: "先婚后爱",
        },
        {
          name: "逆袭",
        },
        {
          name: "小人物",
        },
        {
          name: "都市日常",
        },
        {
          name: "时空之旅",
        },
        {
          name: "家庭",
        },
      ],
      baseList: [
        {
          name: "photo",
          title: "图片",
        },
        {
          name: "lock",
          title: "锁头",
        },
        {
          name: "star",
          title: "星星",
        },
      ],
    };
  },
  mounted() {},
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>
.listenbook-view {
  padding: 0 30rpx;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .listenbook-context {
    overflow-y: scroll;
    padding: 20rpx 0;
    height: calc(100% - 100rpx);
    
  }
}
</style>
