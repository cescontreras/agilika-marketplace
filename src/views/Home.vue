<template>
  <div class="home">

      <Carousel />
      <div class="container top-products">
        top products
      </div>

  </div>
</template>

<script>
import Carousel from "../components/Carousel";

export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>
