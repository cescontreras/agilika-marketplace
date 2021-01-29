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

			<v-btn type="submit" :disabled="!valid" color="success" class="mr-4">
				Create
			</v-btn>

			<v-btn color="error" class="mr-4" @click="reset">
				Reset Form
			</v-btn>
		</v-form>

		<ul>
			<li v-for="(item, index) in categories" :key="index">
				{{ item.name }} -- {{ item.id }}
			</li>
		</ul>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
	data: () => ({
		valid: true,
		name: "",
		nameRules: [
			(v) => !!v || "Name is required",
			(v) => (v && v.length >= 3) || "Name can't be less than 3 characters",
		],
	}),
	computed: {
		...mapState(["categories"]),
	},
	methods: {
		...mapActions(["addCategory"]),
		validate() {
			this.$refs.form.validate();
		},
		reset() {
			this.$refs.form.reset();
		},
		submit() {
			this.addCategory({ name: this.name });
			this.getCategories();
		},
		...mapActions(["getProducts", "getCategories"]),
	},
	created() {
		this.getCategories();
	},
};
</script>

<style>
.crud-producto {
	width: 50%;
}
</style>
