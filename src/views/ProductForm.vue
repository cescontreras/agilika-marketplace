<template>
	<div class="container crud-producto">
		<v-form @submit.prevent="submit" ref="form" v-model="valid" lazy-validation>
			<v-text-field
				v-model="name"
				:counter="10"
				:rules="nameRules"
				label="Name"
				required
			></v-text-field>

			<v-text-field
				v-model="price"
				:rules="priceRules"
				label="Price"
				required
			></v-text-field>

			<v-text-field
				v-model="stock"
				:rules="stockRules"
				label="Stock"
				required
			></v-text-field>

			<v-select
				v-model="select"
				:items="items"
				:rules="[(v) => !!v || 'Item is required']"
				label="Item"
				required
			></v-select>

			<v-btn type="submit" :disabled="!valid" color="success" class="mr-4">
				Validate
			</v-btn>

			<v-btn color="error" class="mr-4" @click="reset">
				Reset Form
			</v-btn>

			<v-btn color="warning" @click="resetValidation">
				Reset Validation
			</v-btn>
		</v-form>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
	data: () => ({
		valid: true,
		name: "",
		nameRules: [
			(v) => !!v || "Name is required",
			(v) => (v && v.length >= 3) || "Name can't be less than 3 characters",
		],
		price: "",
		priceRules: [
			(v) => !!v || "Price is required",
			(v) => /^[0-9]+$/.test(v) || "Price must be a number",
		],
		stock: "",
		stockRules: [
			(v) => !!v || "Stock is required",
			(v) => /^[0-9]+$/.test(v) || "Stock must be a number",
		],
		select: null,
		items: []
	}),
	computed: {
		...mapState(["categories"]),
	},
	methods: {
		...mapActions(["getCategories", "addProduct"]),
		validate() {
			this.$refs.form.validate();
		},
		reset() {
			this.$refs.form.reset();
		},
		resetValidation() {
			this.$refs.form.resetValidation();
		},
		setCategories() {
      this.categories.forEach(element => {
        this.items.push(element.name)        
      });
    },
    submit() {
      const product = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        category: this.select
      }        
      this.addProduct(product)
    }
	},
	created() {
    this.getCategories();
		this.setCategories();
	},
};
</script>

<style>
.crud-producto {
	width: 50%;
}
</style>
