<template>
	<view>
		<web-view :src="webSrc"></web-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			webSrc: ''
		}
	},
	onLoad(options) {
		this.webSrc = `${options.link}&key2=${options.key2}&type=${options.type}`
	}
}
</script>

<style lang="scss"></style>
