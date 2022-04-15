<template>
	<scroll-view scroll-with-animation :scroll-into-view="topItem" class="scroll-cont" scroll-y="true" @scroll="handleScroll">
		<view>
			<nav-custom id="top"></nav-custom>
			<swiper class="banner" indicator-active-color="#ffe32a" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item, index) in banner" :key="item.objectId">
					<view class="swiper-item" @click="handleBanner(item.link)">
						<image :src="item.img"></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 分类标题 -->
			<home-title title="本季推荐" en-title="Seasonal Recommend" en-tit="Seasonal"></home-title>
			<!-- 滚动区域 -->
			<scroll-view scroll-x="true">
				<view class="scroll-inner">
					<image src="../../static/img/recommend1.jpeg" mode="heightFix"></image>
					<image src="../../static/img/recommend2.jpg" mode="heightFix"></image>
					<image src="../../static/img/recommend3.jpg" mode="heightFix"></image>
				</view>
			</scroll-view>
			<!-- 分类标题 -->
			<home-title title="法式经典" en-title="French Classics" en-tit="French"></home-title>
			<!-- 商品图 -->
			<image class="classify" src="../../static/img/french.jpg" mode=""></image>
			<!-- 商品列表 -->
			<view class="flex flex-wrap padding-sm justify-between"><good-item v-for="(item, index) in 4"></good-item></view>
			<!-- 返回顶部按钮 -->
			<view class="back-top" v-if="backIsShow" @click="handleBackTop"><text class="iconfont icon-tubiao_fanhuidingbu"></text></view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			backIsShow: false,
			topItem: '', // 返回顶部的标记点
			banner:[]
		}
	},
	methods: {
		handleScroll(e) {
			let scrollTop = e.detail.scrollTop
			this.backIsShow = scrollTop > 600 ? true : false
			this.topItem = ''
		},
		handleBackTop() {
			this.topItem = 'top'
		},
		handleBanner(link){
			uni.navigateTo({
				url:'banner-ad?link=' + link
			})
		}
	},
	onLoad() {
		this.$get('/1.1/classes/banner').then(res => {
			this.banner = res.results
		})
	}
}
</script>

<style lang="scss">
.scroll-cont {
	height: 100vh;
}
.banner {
	height: 1274rpx;
	image {
		width: 100%;
		height: 1274rpx;
	}
}
.scroll-inner {
	white-space: nowrap;
	image {
		height: 290rpx;
	}
}
.classify {
	height: 380rpx;
	width: 100%;
}
.back-top {
	height: 100rpx;
	width: 100rpx;
	background-color: #ffffff;
	border-radius: 50%;
	box-shadow: 0 0 20rpx 4rpx rgba(0, 0, 0, 0.4);
	position: fixed;
	bottom: 40rpx;
	right: 20rpx;
	text-align: center;
	line-height: 100rpx;
}
</style>
