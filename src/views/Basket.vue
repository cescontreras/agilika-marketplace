<template>
	<div class="main-basket d-flex">
		<div class="main-list">
			<div
				v-for="(item, index) in cart.products"
				:key="index"
				class="list-items d-flex"
			>
				<BasketItem :item="item" />
			</div>
		</div>
		<div class="basket-data">
			<BasketOrder />
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BasketItem from "../components/basket/BasketItem";
import BasketOrder from "../components/basket/BasketOrder";

export default {
	components: {
		BasketItem,
		BasketOrder,
	},
	computed: {
		...mapState(["user", "cart"]),
	},
	methods: {
		...mapActions(['getCart', 'createOrder'])
	},
	created(){
		// this.getCart()
	}
};
</script>

<style scoped>
.main-basket {
	width: 100%;
	flex-direction: row;
	background-color: rgb(218, 218, 218);
}
.main-list {
	width: 70%;
}

.list-items {
	margin: 10px;
	/* width: 70%; */
	background-color: white;
	flex-direction: column;
	padding: 12px;
	border: #888 solid 0.5px;
	border-radius: 10px;
}

.basket-data {
	width: 30%;
	height: 40vh;
}
</style>
