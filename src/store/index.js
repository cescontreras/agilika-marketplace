import Vue from "vue";
import Vuex from "vuex";
import { data } from "../../MOCK_DATA";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: data,
		product: {},
	},
	mutations: {
		getProduct(state, payload) {
			state.product = payload;
		},
	},
	actions: {
		getProduct({ commit, state }, id) {
			//Pedido a la Api del producto
			const product = state.products.filter((p) => p.id === id);

			commit("getProduct", product[0]);
		},
	},
	modules: {},
});
