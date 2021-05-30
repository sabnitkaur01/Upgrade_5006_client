<template>
    <youtube v-bind:video-id="productVideo"></youtube>
</template>
<script>
export default {
    name: "productVideo",
    data() {
    return {
      productVideo: this.$route.params.productVideo,
    };
  },
  computed: {
    // productVideo() {      
      
    //   return this.$route.params.productVideo
    // }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>