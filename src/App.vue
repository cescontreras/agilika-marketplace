<template>
	<div id="app">
		<v-app>
			<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
			<Header />
			<div class="ml-4 mr-4 mt-6">
				<router-view />
			</div>
		</v-app>
	</div>
</template>

<script>
import Header from "./views/Header";
import { mapActions } from 'vuex';

export default {
	components: {
		Header,
	},
	methods: {
		...mapActions(["getProducts", "getCategories"]),
	},
	created() {
		this.getProducts();
		this.getCategories();
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
