<template>
	<div class="basket mr-2">
		<v-btn class="mt-4">Empty Basket</v-btn>
		<div class="mt-4 mb-4">
			<h3>Amount</h3>
			<v-divider></v-divider>
			<h3>Total: $ {{ total }}</h3>
			<v-divider></v-divider>
		</div>
		<div class="buttons mt-8">
			<v-btn>Shop More</v-btn>
			<v-btn @click="createOrder">Checkout</v-btn>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
	data() {
		return {
			total: 0,
		};
	},
	computed: {
		...mapState(["products"]),
	},
	methods: {
		calculate() {
			const total = this.products.reduce((acc, el) => {
				acc = acc + parseInt(el.price);
				return acc;
			}, 0);
			this.total = total;
		},
		...mapActions(["createOrder"]),
	},
	created() {
		this.calculate();
	},
};
</script>

<style scoped>
.basket {
	background-color: white;
	border-radius: 10px;
	margin-top: 10px;
	height: 100%;
}

h3 {
	margin: 10px;
}

.buttons {
	display: flex;
	justify-content: space-evenly;
}
</style>
