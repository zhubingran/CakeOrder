<template>
	<view class="cake-item">
		<!-- 图片区域 -->
		<image  class="poster" :src="gdata.img"></image>
		<!-- 数据区域 -->
		<view class="info-cont">
			<view class="info flex justify-between align-center">
				<view class="">
					<view class="fs-22">{{gdata.name}}</view>
					<view class="fs-16">{{gdata.french}}</view>
				</view>
				<view class="cart-btn margin-right-sm">
					<text class="iconfont icon-gouwuche"></text>
				</view>
			</view>
			<view class="fs-18">
				<text class="fs-14">¥</text>
				{{gdata.price}}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'good-item',
	data() {
		return {}
	},
	props:['gdata']
}
</script>

<style lang="scss">
.cake-item {
	width: 350rpx;
	.poster {
		height: 350rpx;
		background-color: #f5f5f5;
	}
	.fs-22 {
		margin-top: 26rpx;
	}
	.fs-14 {
		margin-top: 14rpx;
	}
	.fs-18 {
		margin-top: 26rpx;
		margin-bottom: 24rpx;
	}
	.cart-btn {
		width: 60rpx;
		height: 60rpx;
		background-color: #ffe32a;
		text-align: center;
		line-height: 60rpx;
		border-radius: 50%;
	}
}
</style>
