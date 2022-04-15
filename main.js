import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
uni.$u.config.unit = 'rpx'

// 挂载全局组件
import NavCustom from 'components/nav-custom.vue'
Vue.component('nav-custom', NavCustom)
import HomeTitle from './components/home-title.vue'
Vue.component('home-title', HomeTitle)
import GoodItem from 'components/good-item.vue'
Vue.component('good-item', GoodItem)

// 挂载全局异步请求
import * as request from 'utils/request.js'
for (let key in request) {
	Vue.prototype[key] = request[key]
}

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
