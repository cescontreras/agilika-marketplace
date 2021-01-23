<template>
  <div class="d-flex">
    <img src="" alt="">
    <v-divider></v-divider>
    <p>descripcion</p>
    <p>Precio</p>
    <v-rating></v-rating>
    <h2>hola</h2>
    <v-btn
        class="white--text"
        color="teal"
        @click="emitVisibleOverlay"
      >
        Hide Overlay
      </v-btn>
  </div>
</template>

<script>
export default {
  name:"ProductQuick",
  methods: {
    emitVisibleOverlay() {
      this.$emit('overlayIsVisible')
    }
  }
}
</script>

<style>

</style>