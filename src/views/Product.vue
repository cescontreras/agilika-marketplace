<template>
<div>
  <h1>Hola</h1>
  <p>{{ $route.params.id }}</p>
  <h1>{{ product.name }}</h1>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['product'])
  },
  methods: {
    ...mapActions(['getProduct'])
  },
  created() {
    this.getProduct(this.$route.params.id)
  }
}
</script>

<style>

</style>