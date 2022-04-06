<template>
	<view class="padding flex justify-between align-center margin-tb">
		<view class="flex align-center">
			<text class="iconfont icon-canju"></text>
			<view class="fs-28 margin-left">
				{{title}}
				<view class="fs-14">{{enTitle}}</view>
			</view>
		</view>
		<view class="">
			{{enTit}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"home-title",
		props:['title','enTitle','enTit'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.icon-canju{
	font-size: 60rpx;
}
</style>
