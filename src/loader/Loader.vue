<template lang="pug">
  .loader
    fingerprint-spinner(:animation-duration="1500" :size="64" color="#ff1d5e")
</template>

<script>
import { FingerprintSpinner } from 'epic-spinners'
import ImagePreloader from 'image-preloader'

export default {
  name: 'Loader',
  components: {
    FingerprintSpinner
  },
  data () {
    return {
      images: [
        'https://d1rnu9exaqm00k.cloudfront.net/sprite.png',
        'https://d1rnu9exaqm00k.cloudfront.net/site-menu-0.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/site-menu-1.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/site-menu-2.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/site-menu-3.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/site-menu-4.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/life/childhood.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/life/crimea-and-europe.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/life/feodosia.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/life/imperial-academy-of-arts.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/life/last-years.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/life/return-to-russia.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/bg10.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/archive/1839-thumbnail.jpg',
        'https://d1rnu9exaqm00k.cloudfront.net/archive/1857-thumbnail.jpg'
      ]
    }
  },
  created () {
    const preloader = new ImagePreloader()
    let loaded = 0
    // let total = this.images.length

    preloader.onProgress = () => {
      // console.log(parseInt(100 / total * ++loaded) + '%')
      console.log(Math.abs(++loaded % 200) - 100)
      console.log(-(Math.abs(++loaded % 200) - 100) < 0 ? 0 : -(Math.abs(++loaded % 200) - 100))
    }
    preloader.preload(this.images)
      .then((status) => {
        this.$store.commit('PRELOADED')
        // this.$store.dispatch('PRELOAD_STATE')
      })
  }
}
</script>

<style lang="scss">
.loader{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-image: $background-preloader;
  z-index: 999;
  .fingerprint-spinner{
    position: initial !important;
  }
}
</style>
