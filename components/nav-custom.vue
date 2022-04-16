<template>
	<view class="cu-bar bg-white nav-fixed">
		<view class="action">
			<text class="cuIcon-locationfill text-gray"></text> 位置
		</view>
		<view class="content text-bold">
			CAKE
		</view>
		<view class="action text-grey">
			<text class="cuIcon-search"></text>
			<!-- 分割线 -->
			<u-line direction="col" length="35" margin="20rpx"></u-line>
			<text class="cuIcon-sort"></text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"nav-custom",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.nav-fixed{
	position: fixed !important;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
}
</style>
