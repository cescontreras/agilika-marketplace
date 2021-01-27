<template>
	<div class="main-basket d-flex">
		<div class="list-items"></div>
		<div class="basket-data"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			products: [],
		};
	},
};
</script>

<style scoped>
.main-basket {
	width: 100%;
}
.list-items {
	width: 75%;
	background-color: yellow;
}

.basket-data {
	width: 25%;
	background-color: violet;
}
</style>
