<template>
	<view class="container">
	  <scroll-view
		class="scroll-view"
		scroll-x
		:scroll-into-view="scrollIntoView"
		@scroll="handleScroll"
	  >
		<view
		  v-for="(item, index) in items"
		  :key="index"
		  class="item"
		  :id="`item-${index}`"
		  :style="itemStyles[index]"
		>
		  {{ item }}
		</view>
	  </scroll-view>
	</view>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		items: [1, 2, 3, 4, 5, 6],
		itemStyles: [],
		scrollIntoView: '',
	  };
	},
	mounted() {
	  this.initItemStyles();
	},
	methods: {
	  initItemStyles() {
		this.items.forEach((_, index) => {
		  this.itemStyles.push({
			transform: 'scale(1)',
		  });
		});
	  },
	  handleScroll(e) {
		const { scrollLeft } = e.detail;
		const childWidth = uni.upx2px(200);
		const query = uni.createSelectorQuery().in(this);
		this.items.forEach((_, index) => {
		  query.select(`#item-${index}`).boundingClientRect().exec(data => {
			if (!data || !data[0]) {
			  return;
			}
			const rect = data[0];
			const left = rect.left;
			if (left > 0 - childWidth && left < childWidth) {
			  const scale = 1 + this.setSize(left, childWidth);
			  this.itemStyles[index] = {
				transform: `scale(${scale})`,
			  };
			} else {
			  this.itemStyles[index] = {
				transform: 'scale(1)',
			  };
			}
		  });
		});
	  },
	  setSize(num, childWidth) {
		const a = childWidth - Math.abs(num);
		return (a * 0.5) / childWidth;
	  },
	},
  };
  </script>
  
  <style>
  .container {
	display: flex;
	justify-content: center;
	padding: 200rpx 0;
  }
  .scroll-view {
	height: 500rpx;
	width: 1000rpx;
	white-space: nowrap;
  }
  .item {
	display: inline-block;
	height: 200rpx;
	width: 200rpx;
	background-color: red;
	margin: 50rpx;
	line-height: 200rpx;
	text-align: center;
	color: white;
	transition: transform 0.3s;
  }
  </style>