<template>
  <div class="home">

      <Carousel />
      <!-- <div class="container"> -->
        <ProductsContainer />
      <!-- </div> -->

  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import ProductsContainer from "../components/topProducts/ProductsContainer";

export default {
  name: 'Home',
  components: {
    Carousel,
    ProductsContainer
  }
}
</script>
