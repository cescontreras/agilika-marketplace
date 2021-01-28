<template>
	<div class="item-basket">
		<div class="item-info d-flex">
			<div class="item-img ml-4">
				<v-img src="https://mastang.co.uk/image/product/110/THUMB/288/0/1"></v-img>
			</div>

			<div class="item-data ml-8" align="start">
				<h2>{{ item.name }}</h2>

				<div class="quantity-toggle">
					<button class="btn-q" @click="decrement()">&mdash;</button>
					<input class="input-q" type="text" :value="quantity" readonly />
					<button class="btn-q" @click="increment()">&#xff0b;</button>
				</div>
			</div>
			<div class="item-data-price">
				<h3 align="end">Price: $ {{ item.price }}</h3>
				<h3 align="end">SubTotal: $ {{ item.price * quantity }}</h3>
			</div>
		</div>
		<v-divider></v-divider>
		<div class="buttons-basket d-flex ml-6">
			<v-btn class="ml-6" align="start">Remove</v-btn>
			<v-btn class="ml-6" align="start">Move to Wishlist</v-btn>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    item: Object
  },
	data() {
		return {
			quantity: 1,
			subTotal: 0
		};
	},
	methods: {
		increment() {
			this.quantity++;
		},
		decrement() {
			if (this.quantity === 1) {
				alert("Negative quantity not allowed");
			} else {
				this.quantity--;
			}
		}
	},
};
</script>

<style scoped>
.item-data {
	width: 65%;
}

.item-data-price {
	width: 20%;
}

.item-img {
	width: 15%;
	height: 10vw;
}

.basket-data {
	width: 30%;
	background-color: violet;
}

.quantity-toggle {
	display: flex;
}

.input-q {
	border: 0;
	border-top: 2px solid #ddd;
	border-bottom: 2px solid #ddd;
	width: 2.5rem;
	text-align: center;
	padding: 0 0.5rem;
}

.btn-q {
	border: 2px solid #ddd;
	padding: 0.5rem;
	background: #f5f5f5;
	color: #888;
	font-size: 1rem;
	cursor: pointer;
}
</style>
