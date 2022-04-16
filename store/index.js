import Vue from 'vue'
import Vuex from 'vuex'

import count from './count.js'
import condition from './condition.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		count,condition
	}
})

export default store