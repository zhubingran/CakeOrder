<template>
	<view>
		<nav-custom></nav-custom>
		<!-- 蛋糕列表 -->
		<view class="cont flex flex-wrap padding-sm justify-between"><good-item v-for="(item, index) in glist" :key="item.objectId" :gdata="item"></good-item></view>
		<!-- 底部菜单 -->
		<view class="fixed flex bg-fff justify-center padding-sm">
			<view v-for="(item, index) in tabArr" :key="index" @click="handleTab(item)" class="flex align-center">
				<view class="">{{ item.name }}</view>
				<u-line v-if="index < tabArr.length - 1" direction="col" length="35" margin="30rpx"></u-line>
			</view>
		</view>
		<!-- 左侧弹出层 -->
		<u-popup :show="show" mode="left" @close="handleClose" @open="open">
			<view class="pop-cont">
				<view v-for="(item, index) in classifyList" :key="index" class="padding-sm u-border-bottom">
					{{item.bname}}
					
					
					<!-- 二级菜单 -->
					<view v-if="index == 0">
						<view @click="listShow=!listShow" class="padding-tb-sm margin-top u-border-top">口味筛选</view>
						<u-cell-group v-if="listShow">
							<u-cell v-for="(itm,idx) in item.list" 
							:key="idx" icon="setting-fill" 
							:title="itm.tname" 
							isLink
							@click="handleList(itm)"
							></u-cell>
						</u-cell-group>
						<view @click="sceneShow=!sceneShow" class="padding-tb-sm">场景筛选</view>
						<u-cell-group v-if="sceneShow">
							<u-cell v-for="(itm,idx) in item.scene" 
							:key="idx" icon="setting-fill" 
							:title="itm.tname" 
							isLink
							@click="handleScene(itm)"
							></u-cell>
						</u-cell-group>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			glist: [],
			page: 0,
			// 底部菜单数据
			tabArr: [
				{ name: '分类', bcid: '', target: '' },
				{ name: '蛋糕', bcid: '1', target: '/pages/cake' },
				{ name: '面包', bcid: '11', target: '/pages/bread' },
				{ name: '小食', bcid: '6', target: '/pages/food' },
				{ name: '配件', bcid: '5', target: '' },
				{ name: '购物车', bcid: '5', target: '/pages/cart' }
			],
			// 左侧弹出层是否显示
			show: false,
			classifyList: [],
			// 口味筛选和场景筛选
			listShow:false,
			sceneShow:false
		}
	},
	methods: {
		// 加载蛋糕数据列表
		loadData() {
			let skip = this.page * 8
			let wh = JSON.stringify(this.condition)
			let url = `/1.1/classes/goods?where=${wh}&limit=8&skip=${skip}`
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
		},
		// 重新加载数据
		reloadData(){
			this.glist = []
			this.page = 0
			this.loadData()
		},
		// 底部菜单点击事件
		handleTab(item) {
			let { bcid, target } = item
			if (bcid) {
				this.$store.commit('changeCondition',{
					bcid:Number(bcid)
				})
				this.reloadData()
			}
			if (!bcid && !target) {
				this.show = true
			}
		},
		// 左侧弹出层关闭事件
		handleClose() {
			this.show = false
		},
		// 筛选口味
		handleList(listObj){
			this.$store.commit('changeCondition',{
				bcid:listObj.bid,
				fid:listObj.tid
			})
			this.reloadData()
		},
		// 筛选场景
		handleScene(sceneObj){
			this.$store.commit('changeCondition',{
				bcid:sceneObj.bid,
				sid:sceneObj.tid
			})
			this.reloadData()
		}
	},
	computed:{
		condition(){
			return this.$store.state.condition.condit
		}
	},
	onLoad() {
		this.loadData()

		// 获取分类数据包
		this.$get('/1.1/classes/classify').then(res => {
			this.classifyList = res.results
		})
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
page {
	padding-top: 90rpx;
	padding-bottom: 120rpx;
}
.fixed {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 0 10rpx 2rpx rgba(0, 0, 0, 0.2);
}
.pop-cont {
	width: 350rpx;
	margin-top: 100rpx;
}
</style>
