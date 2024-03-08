<template>
    <view class="Classic-box">
        <BookStoreTab/>
        <view class="context-box">
            <Bookitem v-for="(index, item) in 20" :key="index"/>
        </view>
    </view>
</template>

<script>
import BookStoreTab  from "../components/BookStoreTab"
import Bookitem from "../components/Bookitem.vue";
export default {
    components: {
        BookStoreTab,
        Bookitem
    },
    name: 'Classic',

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
.Classic-box{
    padding: 0 30rpx ;
    .context-box{
        display: flex;
        flex-wrap: wrap;
    }
}

</style>