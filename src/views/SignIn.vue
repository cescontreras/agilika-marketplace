<template>
	<div class="container sign-in">
		<h1>Sign In</h1>
		<v-form
			@submit.prevent="signIn({email: email, password: password})"
			ref="form"
			v-model="valid"
			lazy-validation
		>
			<v-text-field
				v-model="email"
				:rules="emailRules"
				label="E-mail"
				required
			></v-text-field>

			<v-text-field
				type="password"
				v-model="password"
				:rules="passRules"
				label="Password"
				required
			></v-text-field>

			<v-text-field
				type="password"
				v-model="checkPassword"
				:rules="checkRules"
				label="Repeat Password"
				required
			></v-text-field>

			<v-btn type="submit" :disabled="block" color="success" class="mr-4">
				Registrar
			</v-btn>

			<!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
			Validate
		</v-btn> -->

			<v-btn color="error" class="mr-4" @click="reset">
				Reset Form
			</v-btn>

			<!-- <v-btn color="warning" @click="resetValidation">
			Reset Validation
		</v-btn> -->
		</v-form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data: () => ({
		valid: true,
		email: "",
		emailRules: [
			(v) => !!v || "E-mail is required",
			(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
		],
		password: "",
		passRules: [
			(v) => !!v || "Password Required",
			(v) => (v && v.length <= 10) || "Password can't be less than 6 characters",
		],
		checkPassword: "",
		checkRules: [
			(v) => !!v || "Password Required",
			(v) => (v && v.length <= 10) || "Password can't be less than 6 characters",
		],
	}),
	methods: {
		validate() {
			this.$refs.form.validate();
		},
		reset() {
			this.$refs.form.reset();
		},
		resetValidation() {
			this.$refs.form.resetValidation();
    },
    ...mapActions(["signIn"])
	},
	computed: {
		block() {
			if (!/.+@.+\..+/.test(this.email)) {
				return true;
			}
			if (this.password.length > 5 && this.password === this.checkPassword) {
				return false;
			}
			return true;
		},
	},
};
</script>

<style>
.sign-in {
	width: 50%;
}
</style>
