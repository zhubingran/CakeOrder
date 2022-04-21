import Vue from 'vue'
import Vuex from 'vuex'

import count from './count.js'
import condition from './condition.js'
import user from './user.js'
import cart from './cart.js';

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		count,condition,user,cart
	}
})

export default store