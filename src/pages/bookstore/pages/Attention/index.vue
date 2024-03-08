<template>
   <view class="box">
    <BookStoreAttention v-for="index in 3" :key="index"/>
   </view>
</template>

<script>
import BookStoreAttention from "./BookStoreAttention.vue"
export default {
    components: {
        BookStoreAttention
    },
    name: 'Attention',
    data() {
        return {
            ViewIndex:1,
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
    // width: 100vw;
    padding: 0 30rpx;
}
</style>