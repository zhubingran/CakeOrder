<template>
	<view>
		<view class="cont flex flex-wrap padding-sm justify-between">
			<good-item v-for="(item,index) in glist" :key="item.objectId" :gdata="item"></good-item>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			glist:[]
		}
	},
	methods: {},
	onLoad() {
		this.$get('/1.1/classes/goods').then(res=>{
			this.glist = res.results
		})
	}
}
</script>

<style lang="scss"></style>
