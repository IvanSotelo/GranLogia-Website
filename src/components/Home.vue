<template lang="pug">
main(role="main")
  section#page-home.page.page-home
    .page-home__overlay
      .js-first.page-home__overlay--first
      .js-second.page-home__overlay--second
    .page-home__chapter.is-active
      .page-home__chapter-background
        img(src="https://d1rnu9exaqm00k.cloudfront.net/blue.jpg" data-src="https://d1rnu9exaqm00k.cloudfront.net/blue.jpg" alt="" data-background="#9684c2")
    .page-home__chapter
      .page-home__chapter-background
        img.page-home__chapter-background--image(src="https://d1rnu9exaqm00k.cloudfront.net/bg10.jpg" data-ratio="1.7777" data-src="https://d1rnu9exaqm00k.cloudfront.net/bg10.jpg" alt="" data-background="#9684c2")
    .page-home__transition
      canvas.page-home__transition-main
      img.page-home__transition-sprite(src="https://d1rnu9exaqm00k.cloudfront.net/sprite.png" data-src="https://d1rnu9exaqm00k.cloudfront.net/sprite.png" alt="")
      canvas.page-home__transition-temp
    .vertical-align
      .vertical-align__item
        span
          p.js-slogan.page-home__slogan For the 200ᵀᴴ Anniversary
        span
          h1.js-title.page-home__title Ivan Aivazovsky
        .js-cta.page-home__cta
          p Scroll to explore life
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    this.$store.dispatch('CHANGE_ROUTE', this.$route.name)
    this.$nextTick(() => {
      window.addEventListener('resize', this.imageRetina);
      this.imageRetina()
    })
  },
  methods: {
    imageRetina(event) {
      let t = this.$el.querySelector('.page-home__chapter-background--image')
      let ratio = t.dataset.ratio
      let i = t.parentNode
      let imgWidth = i.getBoundingClientRect().width
      let imgHeight = imgWidth / ratio
      if (imgHeight < i.getBoundingClientRect().height) {
        imgHeight = i.getBoundingClientRect().height
        imgWidth = imgHeight * ratio
      }
      t.style.width = imgWidth + 'px'
      t.style.height = imgHeight + 'px'
      t.style.top = (i.getBoundingClientRect().height - imgHeight) / 2 + 'px'
      this.isMobile ? t.style.left = (i.getBoundingClientRect().width - imgWidth) / 1.6 + 'px' : t.style.left = (i.getBoundingClientRect().width - imgWidth) / 2 + 'px'
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-home {
  span {
    height: auto;
    width: 100%;
    display: block;
    overflow: hidden
  }
  .canvas-overlay {
      position: absolute;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 4
  }
  .page-home__overlay {
      position: absolute;
      width: 100vw;
      height: 100vh;
      z-index: 100;
      pointer-events: none;
      .page-home__overlay--first,
      .page-home__overlay--second {
          position: absolute;
          height: 100%;
          width: 100%;
          will-change: transform;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -ms-perspective: 1000;
          perspective: 1000
      }
      .page-home__overlay--first {
          z-index: 2;
          background: #282830;
          transform: translateY(100%)
      }

      .page-home__overlay--second {
          z-index: 1;
          background: #1a1a1f;
          transform: translateY(100%)
      }

  }
  .page-home__chapter {
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      &:first-of-type {
          background: #00f;
      }
      .page-home__chapter-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-color: #bb8364;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          img {
              position: relative;
              max-width: none;
              opacity: 1!important;
              image-rendering: -moz-crisp-edges;
              image-rendering: -o-crisp-edges;
              image-rendering: -webkit-optimize-contrast;
              image-rendering: crisp-edges;
              -ms-interpolation-mode: nearest-neighbor;
              @media only screen and (max-width:768px) {
                  object-position: 50% 40%;
              }
          }
      }
  }
  .page-home__transition {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 1;
      canvas {
          display: inline-block;
          vertical-align: baseline;
      }
      img {
          max-width: 100%;
          opacity: 0;
          height: auto;
      }
  }
  .vertical-align {
      display: table;
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 50;
      .vertical-align__item {
          display: table-cell;
          vertical-align: middle;
          .page-home__title {
            text-transform: uppercase;
            font-size: 2.5em;
            letter-spacing: .3em;
            font-weight: 100;
            will-change: transform;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -ms-perspective: 1000;
            perspective: 1000;
            @media only screen and (max-width:768px) {
              font-size: 5vw
            }
          }
          .page-home__slogan {
            text-transform: uppercase;
            font-size: .8em;
            letter-spacing: .3em;
            padding-bottom: 1em;
            will-change: transform;
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -ms-perspective: 1000;
            perspective: 1000;
            @media only screen and (max-width:768px) {
              font-size: 2.6vw
            }
          }
          .page-home__cta {
            display: inline-block;
            padding-top: 3vw;
            text-transform: uppercase;
            opacity: 0;
            @media only screen and (max-width:768px) {
              position: relative;
              top: 35vw
            }
            p {
              cursor: pointer;
              color: rgba(255, 255, 255, .49);
              transition: color 1s cubic-bezier(.19, 1, .22, 1);
              &:hover {
                color: #a1907f
              }
            }
          }
      }
  }

}
</style>
