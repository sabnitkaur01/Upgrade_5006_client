<template>    
    <video-embed v-bind:src="productVideoSrc"></video-embed>
</template>
<script>
export default {
    name: "productVideo",    
  data() {
    return {
      productVideoSrc: ""
    };
  },
  created() {
            this.productVideoSrc = this.$route.params.productVideo;
            console.log(this.productVideoSrc);
        },
    
}
</script>