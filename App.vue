<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			try {
				const value = uni.getStorageSync('userInfo');
				if (value) {
					this.$store.commit('user/initInfo',value)
				}
			} catch (e) { 
				// error
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
