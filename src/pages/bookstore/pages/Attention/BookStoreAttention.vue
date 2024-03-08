<template>
   <view class="Attention-box">
    <view class="Attention-title"> 根据你常爱看的内容</view>
    <view class="Attention-context">
         <view class="Author">
            <view class="Author-left">
                <image
                    src="../../../../static/fhxx.png"
                    mode="scaleToFill"
                />
                <view class="Author-info">
                    <view class="Author-info-top">
                    <text class="Author-name">已知天命</text>
                    <text class="Author-tab">作家Lv3</text>
                    </view>
                    <view class="Author-info-bottom">
                          <text class="datainfo">11-23 · 参与了话题</text>
                    </view>
                </view>
            </view>
            <view class="Funbtn">
                <button>+关注</button>
                <text class="iconfont">&#xe60c;</text>
            </view>
         </view>
         <view class="context">
            <view class="context-title">
                <view class="title-icon">
                    <image class="icon" src="data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M468.544 534.32h80.048l14.336-68.304h-80.352z' fill='%23ea6539'/%3E%3Cpath d='M512 0C229.232 0 0 229.232 0 512s229.232 512 512 512 512-229.232 512-512S794.768 0 512 0zm183.168 466.016h-66.432l-14.032 68.304h73.392l-16.928 68.24H600l-29.12 136.528h-65.472L532.96 602.56h-79.088l-28.016 136.528h-65.472l27.408-136.528H321.04l14.704-68.24h67.376l13.376-68.304h-71.824l16.56-68.272h72.736l26.144-136.08h66.736l-25.84 136.08h79.088l26.8-136.08h66.112l-26.144 136.08h66.432l-18.128 68.272z' fill='%23ea6539'/%3E%3C/svg%3E" mode=""></image>
                    <text>话题</text></view>
                <text class="context-title-text">番茄小说十大经典，这份书单不看后悔终生</text>
            </view>
            <view class="context-text">55万人告诉你，不看不听绝对后悔的一本书</view>
         </view>
    </view>
      <view class="Attention-recommended">
          <view class="recommended-title">共推荐2本书</view>
          <view class="recommended-context">
            <view class="recommended-context-item">
                <image
                    src="../../../../static/fhxx.png"
                    mode="scaleToFill"
                />
                <view class="recommended-context-item-name"> 傻小子轻一点</view>
            </view>
          </view>
      </view>
      <view class="comments-like">
        <view class="comments-like-item">
            <i class="iconfont">&#xe79f;</i>
            <text>3</text>
            </view>
        <view class="comments-like-item">
            <i class="iconfont">&#xeca1;</i>
             <text>3</text>
        </view>
      </view>
   </view>
</template>

<script>
export default {
    name: 'BookStoreAttention',

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
.Attention-box{
    padding:30rpx;
    width: 100%;
    border-radius: 30rpx;
    background-color: #ffffff;
    box-sizing: border-box;
    margin-bottom: 30rpx;
    .Attention-title{
        font-size: 25rpx;
        // font-weight: bold;
        color: #9e9e9e;
        padding-bottom: 20rpx;
       border-bottom: 1rpx solid #f4f4f4;
       box-sizing: border-box;
    }
    .Attention-context{
        .Author{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 125rpx;
         .Author-left{
            display: flex;
            align-items: center;
                     image{
                        width: 80rpx;
                        height: 80rpx;
                        border-radius: 50%;
                     }
                     .Author-info{
                     margin-left: 20rpx;
                     display: flex;
                        flex-direction: column;
                        .Author-info-top{
                            .Author-name{
                                font-size: 30rpx;
                                font-weight: 550;
                                color: #000000;
                            }
                            .Author-tab{
                                color:#ffffff;
                                background-color: #f99d49;
                                font-size: 23rpx;
                                padding: 5rpx 10rpx;
                                border-radius: 10rpx;
                                margin-left: 10rpx;
                            }
                        }
                        .Author-info-bottom{
                            .datainfo{
                                font-size: 25rpx;
                                color: #9e9e9e;
                            }
                        }
                     }
         }
         .Funbtn{
            display: flex;
            align-items: center;
            button{
                padding: 0;
                width: 120rpx;
                background-color: #f8f8f8;
                height: 60rpx;
                color: #dd6a41;
                border-radius: 40rpx;
                font-size: 25rpx;
                margin-right: 20rpx;
                &::after{
                    border: none;
                }
            }
         }
        }
        .context{
            .context-title{
               
             .title-icon{
                float: left;
                margin-right: 20rpx;
                display: flex;
                align-items: center;
                background-color: #fcf1eb;
                border-radius: 10rpx;
                padding: 6rpx 10rpx;
                width: 90rpx;
                image{
                    width: 30rpx;
                    height: 30rpx;
                    margin-right: 10rpx;
                }
                text{
                    font-size: 25rpx;
                    color: #9e9e9e;
                }
             }
            .context-title-text{
                font-size: 33rpx;
                font-weight: 700;
                line-height: 50rpx;
            }
            }
            .context-text{
                margin: 30rpx 0;
                font-weight: 550;
                line-height: 40rpx;
            }
        }
    }
    .Attention-recommended{
        padding:0 30rpx;
        background-color: #f8f8f8;
        border-radius: 30rpx;
        .recommended-title{
            padding: 30rpx 0;
            border-bottom:1rpx solid #ededed;
            color: #a4a4a4;
            font-size: 28rpx;
        }
        .recommended-context{
            .recommended-context-item{
                width: 160rpx;
                padding: 30rpx 0;
                image{
                    width: 100%;
                    height: 200rpx;
                    border-radius: 10rpx;
                }
                .recommended-context-item-name{
                    font-weight: 550;
                }
            }
        }
    }
    .comments-like{
        display: flex;
        justify-content: center;
        align-items: center;
        .comments-like-item{
            width: 50%;
            text-align: center;
            padding: 30rpx;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            text{
                margin-left: 10rpx;
            }
        }
    }
}

</style>