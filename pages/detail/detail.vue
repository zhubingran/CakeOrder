<template>
	<view>
		商品详情
		<button type="primary" @click="handleBack">返回上一页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 
			};
		},
		// 接收页面传参 只能在此拿到
		onLoad(options){
			console.log(options)
		},
		methods:{
			handleBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
