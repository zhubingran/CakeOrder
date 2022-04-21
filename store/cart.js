export default {
	namespaced: true,
	state() {
		return {
			cartList: [{
					id: "10090",
					twoId: 10089,
					name: "拿破仑莓恋",
					french: "Napoléon aux fraises",
					price: "218.00",
					img: "https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg",
					list: [{
							id: 10090,
							sku: "n0201",
							ahead: "提前5小时预定",
							edible: "2-3人食",
							spec: "1磅",
							price: "218.00"
						},
						{
							id: 10091,
							sku: "n0202",
							ahead: "提前5小时预定",
							edible: "4-7人食",
							spec: "2磅",
							price: "318.00"
						},
						{
							id: 10092,
							sku: "n0203",
							ahead: "提前5小时预定",
							edible: "8-12人食",
							spec: "3磅",
							price: "458.00"
						},
						{
							id: 10093,
							sku: "n0205",
							ahead: "提前5小时预定",
							edible: "12-20人食",
							spec: "5磅",
							price: "750.00"
						}
					],
					ischeck: false,
					num: 1, //商品数量
					idx: 0 //标志选中的子商品信息

				},
				{
					id: "11547",
					twoId: 11540,
					name: "白色恋人",
					french: "Blanc Amant",
					price: "218.00",
					tid: 11,
					ischeck: true,
					num: 2, //商品数量
					idx: 0, //标志选中的子商品信息
					tname: "限定",
					// list:[
					// 	{id: 10090, sku: "n0201", ahead: "提前5小时预定", edible: "2-3人食", spec: "1磅", price: "218.00"},
					// 	{id: 10091, sku: "n0202", ahead: "提前5小时预定", edible: "4-7人食", spec: "2磅", price: "318.00"},
					// 	{id: 10092, sku: "n0203", ahead: "提前5小时预定", edible: "8-12人食", spec: "3磅", price: "458.00"},
					// ],
					img: "https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg"
				}
			]
		}
	},
	mutations: {
		// 单选
		cartCheckMut(state, idx) {
			state.cartList[idx].ischeck = !state.cartList[idx].ischeck
		},
		// 全选 boolean为原本的状态
		cartAllCheckMut(state,boolean){
			state.cartList.forEach(item => {
				item.ischeck = !boolean
			})
		}
	},
	getters: {
		allInfo(state) {
			let allCheck = true
			state.cartList.forEach(item => {
				if (!item.ischeck) {
					allCheck = false
				}
			})
			return {
				allCheck
			}
		}
	}
}
