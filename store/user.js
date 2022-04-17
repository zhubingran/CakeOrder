// 存放用户信息
import {$post} from '../utils/request.js'

export default {
	// 开启命名空间 访问要带模块名
	namespaced:true,
	state(){
		return{
			userInfo:null
		}
	},
	mutations:{
		initInfo(state,info){
			state.userInfo = info
		}
	},
	actions:{
		userLoginAction(context,info){
			$post('/1.1/login',info).then(res=>{
				console.log(res)
				if(res.code){
					uni.showToast({
						title:res.error,
						icon:'none'
					})
					return
				}
				context.commit('initInfo',res)
				uni.setStorage({
					key:'userInfo',
					data:info
				})
				// 返回上一页
				// uni.navigateBack({
				// 	delta:1
				// })
				uni.navigateTo({
					url:'/pages/cake/cake'
				})
			})
		}
	}
}