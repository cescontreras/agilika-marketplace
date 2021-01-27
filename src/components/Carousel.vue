<template>
	<v-carousel>
		<v-carousel-item
			v-for="(item, i) in slides"
			:key="i"
			:src="item.src"
			reverse-transition="fade-transition"
			transition="fade-transition"
		></v-carousel-item>
	</v-carousel>
</template>

<script>
export default {
	name: "Carousel",
	data() {
		return {
			slides: [
				{
					src:
						"https://pro2-bar-s3-cdn-cf6.myportfolio.com/b4185279e68e7e78e4d4bad4667983ba/0ad2e5d7-80dc-4f85-8e89-71f08a3662f8_rw_1200.jpeg?h=dd5f348e5d96c0aea038959e6fef7090",
				},
				{
					src:
						"https://binarymusic.com.au/wp-content/uploads/2020/05/Taka-brand-Banner.jpg",
				},
			],
		};
	},
};
</script>

<style></style>
