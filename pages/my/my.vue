<template>
	<view>
		<view class="cont"></view>
		<view class="margin bg-fff">
			<view class="text-center">
				<image class="avatar" src="../../static/logo.png" mode=""></image>
			</view>
			<view class="fs-28 text-center">
				张三丰
			</view>
			<view class="flex grid">
				<view v-for="(item, index) in gridArr" class="flex flex-direction align-center padding">
					<text :class="['iconfont color-888 margin-bottom-xs', item.icon]"></text>
					{{ item.name }}
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
export default {
	data() {
		return {
			gridArr: [
				{
					icon: 'icon-danju',
					name: '我的订单'
				},
				{
					icon: 'icon-jifen',
					name: '待收货'
				},
				{
					icon: 'icon-danju',
					name: '代付款'
				},
				{
					icon: 'icon-vip-fill',
					name: '会员等级'
				},
				{
					icon: 'icon-vip-fill',
					name: '会员等级'
				}
			]
		};
	}
};
</script>

<style lang="scss">
.cont {
	background-color: #f6f6f6;
	height: 400rpx;
}
.grid .iconfont {
	font-size: 80rpx;
}
.avatar{
	width: 150rpx;
	height: 150rpx;
	border-radius: 50%;
	margin-top: -50%;
}
.margin.bg-fff{
	margin-top: -200rpx;
}
</style>
