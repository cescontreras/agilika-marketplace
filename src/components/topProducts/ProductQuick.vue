<template>
	<div class="d-flex overlay">
		<img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="" />
		<div class="container overlay-info" align="start">
			<div class="top">
				<v-btn
					class="white--text"
					width="5"
					x-small
					color="error"
					@click="emitVisibleOverlay"
				>
					x
				</v-btn>
			</div>
			<v-divider></v-divider>
			<div class="main-info ml-5">
				<h2>{{ product.name }}</h2>
				<p>${{ product.price }}</p>
			</div>
			<v-divider></v-divider>
			<div class="ml-4" align="start">
				<h4>{{ product.rating }}</h4>
				<v-rating
					:value="product.rating"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
				></v-rating>
			</div>

			<v-btn class="white--text add-basket" color="teal">
				Add To Basket
			</v-btn>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductQuick",
	props: {
		product: Object,
	},
	methods: {
		emitVisibleOverlay() {
			this.$emit("overlayIsVisible");
		},
	}
};
</script>

<style scoped>
.overlay {
	width: 50vw;
	height: 50vh;
	background-color: rgb(220, 220, 220);

  border: solid black 0.5px;
  border-radius: 10px;
}
img {
  border-radius: 10px;
}

.top {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}
.overlay-info {
	width: 60%;
	color: black;
	display: flex;
	flex-direction: column;
}

.main-info {
	max-height: 25vh;
}

.add-basket {
  width: fit-content;
  align-self: center;
  justify-self: flex-end;
}
</style>
