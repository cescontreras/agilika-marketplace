<template>
	<div class="container top-products">
		<v-card
			v-for="(item, index) in products"
			:key="index"
			class="mx-auto my-4"
			max-width="250"
		>
			<!-- <template slot="progress">
				<v-progress-linear
					color="deep-purple"
					height="10"
					indeterminate
				></v-progress-linear>
			</template> -->
			<v-hover v-slot="{ hover }">
				<v-img
					height="200"
					src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
				>
					<v-icon class="fav-icon">mdi-heart-circle-outline</v-icon>
					<v-expand-transition>
						<div
							v-if="hover"
							class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-2 white--text"
							style="height: 100%;"
						>
							<v-btn depressed color="primary" @click="overlayOpen(item)" text>
								Quick View
							</v-btn>
						</div>
					</v-expand-transition>
				</v-img>
			</v-hover>

			<v-card-title>{{ item.name }}</v-card-title>

			<v-card-text>
				<v-row align="center" class="mx-0">
					<v-rating
						:value="item.rating"
						color="amber"
						dense
						half-increments
						readonly
						size="14"
					></v-rating>

					<div class="grey--text ml-4">
						{{ item.rating }}
					</div>
				</v-row>

				<div class="my-4 subtitle-1" align="start">{{ item.price }}$</div>
			</v-card-text>

			<v-card-actions>
				<v-btn color="deep-purple lighten-2" text>
					Reserve
				</v-btn>

				<v-btn color="deep-purple lighten-2" @click="overlayOpen(item)" text>
					Ver Mas
				</v-btn>
			</v-card-actions>
		</v-card>
		<v-overlay :z-index="zIndex" :value="overlay">
			<ProductQuick @overlayIsVisible="overlayIsVisible" :product="product" />
		</v-overlay>
	</div>
</template>

<script>
import ProductQuick from "./ProductQuick";
import { mapState, mapActions } from "vuex";

export default {
	name: "ProductsContainer",
	components: {
		ProductQuick,
	},
	data() {
		return {
			hover: false,
			overlay: false,
			zIndex: 0,
			product: {},
		};
	},
	methods: {
		overlayIsVisible() {
			this.overlay = !this.overlay;
		},
		overlayOpen(item) {
			console.log(item);

			this.product = item;
			this.overlay = !this.overlay;
		},
	},
	computed: {
		...mapState(["products"]),
	},
};
</script>

<style scoped>
.fav-icon {
	position: absolute;
	left: 40%;
	top: 5%;
}

.fav-icon:hover {
	transform: scale(1.5);
}

.top-products {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.v-card--reveal {
	align-items: flex-end;
	bottom: 0;
	justify-content: center;
	opacity: 0.3;
	position: absolute;
	width: 100%;
}
</style>
