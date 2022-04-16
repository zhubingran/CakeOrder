<template>
	<view>
		<view class="cont flex flex-wrap padding-sm justify-between">
			<good-item v-for="(item, index) in glist" :key="item.objectId" :gdata="item"></good-item>
			<view class="fixed flex bg-fff justify-center padding-sm">
				<view v-for="(item,index) in tabArr" :key="item.bcid" class="flex align-center">
					<view class="">
						{{item.name}}
					</view>
					<u-line v-if="index<tabArr.length-1" direction="col" length="35" margin="30rpx"></u-line>
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
export default {
	data() {
		return {
			glist: [],
			page: 0,
			// 底部菜单数据
			tabArr:[
				{ name:'分类',bcid:'',target:''},
				{ name:'蛋糕',bcid:'1',target:'/pages/cake'},
				{ name:'面包',bcid:'11',target:'/pages/bread'},
				{ name:'小食',bcid:'6',target:'/pages/food'},
				{ name:'配件',bcid:'5',target:''},
				{ name:'购物车',bcid:'5',target:'/pages/cart'}
				
			]
		}
	},
	methods: {
		// 加载蛋糕数据列表
		loadData() {
			let skip = this.page * 8
			let url = `/1.1/classes/goods?where={"bcid":1}&limit=8&skip=${skip}`
			this.$get(url).then(res => {
				let { results } = res
				if (results.length) {
					this.page++
					this.glist = [...this.glist, ...res.results]
					// 关闭下拉加载
					uni.stopPullDownRefresh()
					return
				}
				uni.showToast({
					title: '这回真没了',
					icon: 'none'
				})
			})
		}
	},
	onLoad() {
		this.loadData()
	},
	// 触底事件
	onReachBottom() {
		this.loadData()
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.glist = []
		this.page = 0
		this.loadData()
	}
}
</script>

<style lang="scss" scoped>
	page{
		padding-bottom: 120rpx;
	}
.fixed{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 0 10rpx 2rpx rgba(0,0,0,0.2);
}
</style>
