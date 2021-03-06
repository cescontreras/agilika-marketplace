import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Basket from "../views/Basket";
import ProductForm from "../views/ProductForm";
import CategoryForm from "../views/CategoryForm";
import SignIn from "../views/SignIn";
import LogIn from "../views/Login";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/product/:id",
		name: "Product",
		component: Product,
	},
	{
		path: "/basket",
		name: "Basket",
		component: Basket,
	},
	{
		path: "/form",
		name: "ProductForm",
		component: ProductForm,
	},
	{
		path: "/categoryform",
		name: "CategoryForm",
		component: CategoryForm,
	},
	{
		path: "/signin",
		name: "SignIn",
		component: SignIn,
	},
	{
		path: "/login",
		name: "LogIn",
		component: LogIn,
	},
	// {
	// path: '/about',
	// name: 'About',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
