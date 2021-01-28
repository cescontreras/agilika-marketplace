import Vue from "vue";
import Vuex from "vuex";
import { data } from "../../MOCK_DATA";
import { db } from "../firebase";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: data,
		product: {},
	},
	mutations: {
		getProducts(state, payload) {
			state.products = payload
		},
		getProduct(state, payload) {
			state.product = payload;
		},
	},
	actions: {
		getProducts({ commit }){
			const products = []
			db.collection('products').get()
				.then((res) => {
					res.forEach(doc => {
						console.log(doc.id);
						console.log(doc.data());
						let product = doc.data()
						product.id = doc.id
						products.push(product)
					})
					commit('getProducts', products)
				})
		},
		getProduct({ commit, state }, id) {
			//Pedido a la Api del producto
			const product = state.products.filter((p) => p.id === id);

			commit("getProduct", product[0]);
		},
	},
	modules: {},
});
