<template>
	<div class="container mt-10 d-flex main">
		<div class="img-container">
			<img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="" />
		</div>
		<div class="data-container">
			<div class="ml-6 mt-6">
				<h1 v-if="product && product.name" align="start">
  
          {{ product.name }}</h1>
				<v-rating
					:value="product.rating"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
					align="start"
				></v-rating>
			</div>

			<h1 align="start" class="ml-6 mt-6 price">$ {{ product.price }}</h1>

			<p class="ml-6 mt-6" align="start">{{ product.description }}</p>

			<div class="mt-12 buttons d-flex">
				<v-btn class="mx-2" fab dark small color="pink">
					<v-icon dark>
						mdi-heart
					</v-icon>
				</v-btn>
				<v-btn class="ml-6" color="red accent-2">Add To Basket</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
	data() {
		return {
			product: {},
		};
	},
	computed: {
		...mapState(["products"]),
	},
	methods: {
		// ...mapActions(['getProduct'])
		getProduct() {
			//doble igual para match sin tipo de datos
			const product = this.products.filter((p) => p.id == this.$route.params.id);

			this.product = product[0];
		},
	},
	created() {
		this.getProduct();
	},
};
</script>

<style scoped>
.main {
	width: 90%;
	height: 70vh;
	background-color: rgb(218, 218, 218);
}

.img-container {
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.data-container {
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}

.buttons {
	justify-content: flex-start;
}
</style>
