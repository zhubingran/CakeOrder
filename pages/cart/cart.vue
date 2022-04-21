<template>
	<view>
		<view class="flex padding" v-for="(item, index) in cartList" :key="index">
			<!-- 选择图标和商品图片 -->
			<view class="flex align-center">
				<text class="iconfont icon-gouxuan margin-right" :class="item.ischeck ? 'color-yellow' : ''" @click="handleCheck(index)"></text>
				<image class="poster margin-right" :src="item.img" mode=""></image>
			</view>
			<!-- 内容部分 -->
			<view class="flex justify-between info">
				<!-- 蛋糕名称及价格 -->
				<view class="">
					{{ item.name }}
					<view class="margin-tb-xs">{{ item.french }}</view>
					￥{{ item.price }}
				</view>
				<!-- 数量及编辑图标 -->
				<view class="flex flex-direction align-end">
					<view @click="show = true" class="edit margin-bottom-xs"><text class="iconfont icon-bianji"></text></view>
					1磅(454g)X 1
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<u-overlay :show="show" @click="show = false">
			<view class="wrap">
				<view class="info-wrap bg-fff margin" @click.stop>
					<view class="padding">
						<view class="flex info">
							<!-- 蛋糕图片 -->
							<image class="poster margin-right" src="https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg" mode=""></image>
							<!-- 蛋糕名称及价格 -->
							<view class="">
								拿破仑莓恋
								<view class="margin-tb-xs">Napoléon aux fraises</view>
								￥218.00
							</view>
						</view>
						<!-- 列表 -->
						<view class="flex justify-between padding-tb u-border-bottom">
							<view class="">规格选择</view>
							<view class="drop">
								<view @click="dropShow=!dropShow">
									1磅
									<text class="iconfont icon-xiala margin-left-xs"></text>
								</view>
								<view class="drop-list bg-fff" v-if="dropShow">
									<view v-for="(item,index) in 4" :key="index" class="padding-sm">
										{{index}}磅
									</view>
								</view>
							</view>
						</view>
						<view class="flex justify-between align-center padding-tb-sm u-border-bottom">
							<view class="">数量选择</view>
							<view class="">
								<u-number-box 
								    button-size="40"
								></u-number-box>
							</view>
						</view>
					</view>
					
					<!-- 按钮 -->
					<view class="flex">
						<button type="default" class="cu-btn bg-brown">取消</button>
						<button type="default" class="cu-btn bg-yellow">确认</button>
					</view>
				</view>
			</view>
			
		</u-overlay>
		<!-- 底部合计栏 -->
		<view class="footer bg-fff flex justify-between">
			<view class="flex flex-sub padding align-center">
				<text class="iconfont icon-gouxuan margin-right-xs" :class="allInfo.allCheck ? 'color-yellow' : ''" @click="handleAllCheck(allInfo.allCheck)"></text>
				全选
				<view class="margin-left">共计：xxx元</view>
			</view>
			<view class="bg-yellow padding text-center">立即结算</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
	data() {
		return {
			show: true,
			dropShow:false
		}
	},
	computed: {
		...mapState({
			cartList: state => state.cart.cartList
		}),
		...mapGetters({
			allInfo: 'cart/allInfo'
		})
	},
	methods: {
		...mapMutations({
			handleCheck: 'cart/cartCheckMut',
			handleAllCheck: 'cart/cartAllCheckMut'
		})
	}
}
</script>

<style lang="scss">
page {
	padding-bottom: 100rpx;
}
.poster {
	width: 180rpx;
	height: 180rpx;
	background-color: #bcbcbc;
}
.info {
	flex: 1;
	.edit {
		width: 80rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		background-color: #e6e6e6;
		border-radius: 50%;
	}
}
.footer {
	width: 100%;
	position: fixed;
	bottom: 0;
}
.icon-gouxuan {
	color: #e7e7e7;
}
.wrap{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	.info-wrap{
		border-radius: 10rpx;
		.drop{
			position: relative;
				.drop-list{
					width: 300upx;
					position: absolute;
					top: 60upx;
					right: 0;
					box-shadow: 0 0 10upx 2upx rgba(0,0,0,0.2);
					z-index: 10;
					view:hover{
						background-color: #e6e6e6;
					}
				}	
		}
	}
	.cu-btn{
		 width: 50%;
	}
}
 
</style>
