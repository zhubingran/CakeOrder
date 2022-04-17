import Vue from 'vue'
import Vuex from 'vuex'

import count from './count.js'
import condition from './condition.js'
import user from './user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		count,condition,user
	}
})

export default store