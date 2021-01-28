<template>
	<div class="home">
		<Carousel />
		<div class="my-6">
			<h1 align="start" class="ml-16">Top Products</h1>
			<ProductsContainer />
		</div>
		<v-banner class="banner">
			<img
				src="https://www.theartsmusicstore.com/wp-content/uploads/2019/01/Gibson-Guitars-Page-Banner-1-1.jpg"
				alt=""
			/>
		</v-banner>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import Carousel from "../components/Carousel";
import ProductsContainer from "../components/topProducts/ProductsContainer";

export default {
	name: "Home",
	components: {
		Carousel,
		ProductsContainer,
	},
	methods: {
		...mapActions(['getProducts'])
	},
	created() {
		this.getProducts()
	}
};
</script>

<style scoped>
.home {
	width: 100%;
}

.banner {
	width: 100vw;
}
</style>
