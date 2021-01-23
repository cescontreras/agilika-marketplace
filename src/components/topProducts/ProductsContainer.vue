<template>
	<div class="container top-products">
		<v-card
			v-for="(item, index) in products"
			:key="index"
			class="mx-auto my-12"
			max-width="250"
		>
			<template slot="progress">
				<v-progress-linear
					color="deep-purple"
					height="10"
					indeterminate
				></v-progress-linear>
			</template>

			<v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
      <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
				<v-icon class="fav-icon">mdi-heart-circle-outline</v-icon>
      </v-hover>
			</v-img>

			<v-card-title>{{ item.name }}</v-card-title>

			<v-card-text>
				<v-row align="center" class="mx-0">
					<v-rating
						:value="4.5"
						color="amber"
						dense
						half-increments
						readonly
						size="14"
					></v-rating>

					<div class="grey--text ml-4">
						4.5 (413)
					</div>
				</v-row>

				<div class="my-4 subtitle-1" align="start">
					{{ item.price }}$
				</div>

				<!-- <div>
					Small plates, salads & sandwiches - an intimate setting with 12 indoor
					seats plus patio seating.
				</div> -->
			</v-card-text>

			<v-card-actions>
				<v-btn color="deep-purple lighten-2" text >
					Reserve
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "ProductsContainer",
	data() {
		return {
			products: [
				{
					name: "taylor ce 114",
					price: 1000,
				},
				{
					name: "gibson",
					price: 2000,
				},
				{
					name: "fender",
					price: 200,
        },
        {
					name: "gibson",
					price: 2000,
				},
				{
					name: "fender",
					price: 200,
        },
        {
					name: "gibson",
					price: 2000,
				},
				{
					name: "fender",
					price: 200,
				},
			],
		};
	},
};
</script>

<style scoped>
.fav-icon {
	position: absolute;
	left: 40%;
	top: 5%;
}

.top-products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
