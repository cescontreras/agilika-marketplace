<template>
	<div>
		<div class="top-bar">
			<v-system-bar dark color="blue darken-4" height="30">
				<span>
					Agilika Marketplace
				</span>
				<v-spacer></v-spacer>
				<v-icon>mdi-login</v-icon>
				<span>Log in</span>
			</v-system-bar>
		</div>

		<div class="main-bar">
			<router-link to="/" class="mt-2 logo">
				<img
					src="https://agilika.io/wp-content/uploads/2020/12/marcaazul-e1607290181295.png"
					alt=""
				/>
			</router-link>

			<v-form class="d-flex search-form">
				<v-text-field label="Another input"></v-text-field>
				<button>
					<v-icon>mdi-magnify</v-icon>
				</button>
			</v-form>

			<div class="cart-logo">
				<router-link to="/basket">
					<v-icon>mdi-cart-variant</v-icon>
					<span>
						Cart
					</span>
				</router-link>
			</div>
		</div>

		<div class="bottom-bar d-flex">
			<ul class="bottom-bar d-flex">
				<li v-for="(item, index) in categories" :key="index">
					{{ item }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			categories: ["Taylor", "Gibson", "Yamaha", "Fender", "Takamine"],
		};
	},
};
</script>

<style scoped>
.main-bar {
	width: 100%;
	height: 15vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom: solid rgb(186, 186, 186) 0.5px;
}

.search-form {
	width: 60%;
}

img {
	width: 80%;
}

.logo {
	width: 20%;
}

.cart-logo {
	width: 20%;
}

.bottom-bar {
	height: 6vh;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	list-style: none;
	border-bottom: solid rgb(186, 186, 186) 0.5px;
}
</style>
