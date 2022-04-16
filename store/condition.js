export default {
	state(){
		return{
			condit:{
				bcid:1
			}
		}
	},
	mutations:{
		changeCondition(state,obj){
			state.condit = obj
		}
	}
}