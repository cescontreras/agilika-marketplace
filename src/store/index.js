import Vue from "vue";
import Vuex from "vuex";
import { data } from "../../MOCK_DATA";
import { db } from "../firebase";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

const API_KEY = "AIzaSyDi4CjrAZOE54D1c7HPI9-5UYnMr5qSowU";

export default new Vuex.Store({
	state: {
		products: data,
		product: {},
		categories: [],
		user: null,
		cart: { userID: null, products: [], price: null },
		cartId: null,
	},
	mutations: {
		getProducts(state, payload) {
			state.products = payload;
		},
		getProduct(state, payload) {
			state.product = payload;
		},
		getCategories(state, payload) {
			state.categories = payload;
		},
		setUser(state, payload) {
			state.user = payload;
		},
		getCart(state, payload) {
			state.cart = payload;
		},
		addToCart(state, payload) {
			state.cart = payload;
		},
	},
	actions: {
		getProducts({ commit }) {
			const products = [];
			db
				.collection("products")
				.get()
				.then((res) => {
					res.forEach((doc) => {
						let product = doc.data();
						product.id = doc.id;
						products.push(product);
					});
					commit("getProducts", products);
				});
		},
		async getProduct({ commit }, id) {
			let product = {};
			await db
				.collection("products")
				.doc(id)
				.get()
				.then((doc) => {
					product = doc.data();
					product.id = doc.id;
				});
			commit("getProduct", product);
		},
		editProduct({ commit }, product) {
			db
				.collection("products")
				.doc(product.id)
				.update(product)
				.then(() => {
					console.log("Product updated");
				});
		},
		addProduct({ commit }, product) {
			db
				.collection("products")
				.add(product)
				.then((doc) => {
					console.log(doc.id);
				});
		},
		deleteProduct({ commit, dispatch }, id) {
			db
				.collection("products")
				.doc(id)
				.delete()
				.then(() => {
					console.log("Product succesfully deleted");
					// dispatch('getTareas')
					commit("eliminarTarea", id);
				});
		},
		addCategory({}, category) {
			db
				.collection("categories")
				.add(category)
				.then((doc) => {
					console.log(doc.id);
				});
		},
		getCategories({ commit }) {
			const categories = [];
			db
				.collection("categories")
				.get()
				.then((res) => {
					res.forEach((doc) => {
						let category = doc.data();
						category.id = doc.id;
						categories.push(category);
					});
					commit("getCategories", categories);
				});
		},
		async signIn({ commit }, user) {
			try {
				const res = await axios.post(
					`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
					{ email: user.email, password: user.password, returnSecureToken: true }
				);
			} catch (error) {
				console.log(error);
			}
		},
		async login({ commit }, user) {
			try {
				const res = await axios.post(
					`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
					{ email: user.email, password: user.password, returnSecureToken: true }
				);
				const userDb = res.data;
				console.log("user", userDb);
				if (userDb.error) {
					return console.log(userDb.error);
				}
				commit("setUser", userDb);
				router.push("/");
			} catch (error) {
				console.log(error);
			}
		},
		getCart({ commit }) {
			db
				.collection("orders")
				// .doc({ userID: userID })
				.get()
				.then((doc) => {
					console.log(doc, "order");
				});
		},
		createOrder({ commit, state }) {
			if (!state.user) {
				return alert("Must Login");
			}
			const order = state.cart;
			order.price = order.products.reduce(
				(a, b) => parseInt(a.price) + parseInt(b.price)
			);

			order.userID = state.user.localId;

			console.log("order", order);

			db
				.collection("orders")
				.add({
					status: "completed",
					userID: state.user.localId,
					products: order.products,
					price: order.price,
				})
				.then((doc) => {
					console.log(doc, 'neworder');
				});
		},
		addToCart({ commit, state }, product) {
			const cart = state.cart;
			cart.products.push(product);
			cart.userID = state.userID;
			commit("addToCart", cart);
		},
	},
	modules: {},
});
