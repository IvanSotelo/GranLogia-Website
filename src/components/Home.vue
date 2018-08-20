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
          p.page-home__slogan For the 200ᵀᴴ Anniversary
        span
          h1.page-home__title Ivan Aivazovsky
        .page-home__cta
          p Scroll to explore life
</template>

<script>
import {TweenLite, Expo, TimelineMax} from 'gsap'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Respetable Logia Simbólica Paquime 84',
    titleTemplate: null
  },
  data () {
    return {
      bgMainCanvas: null,
      bgTempCanvas: null,
      bgMainContext: null,
      bgTempContext: null,
      bgSprite: null,
      bgSpriteX: 0,
      bgSpriteY: 0,
      bgFrameWidth: 480,
      bgFrameHeight: 270,
      bgSpriteFrames: 137,
      bgSpriteCol: 46,
      bgSpriteRow: 3,
      bgSpriteRate: (this.isMobile, 1),
      bgSpriteFrame: 1,
      bgSpriteThen: Date.now(),
      bgNextImage: null,
      bgCurrentImage: null,
      bgCanvasRenderStop: false,
      ratio: window.devicePixelRatio || 1
    }
  },
  mounted: function () {
    this.canvasInit()
    this.globalResize()
    this.animateIn()
    this.$nextTick(() => {
      window.addEventListener('resize', this.imageRetina)
      this.imageRetina()
    })
    this.changeRoute(this.$route.name)
  },
  methods: {
    ...mapActions({
      changeRoute: 'ROUTE_NAME'
    }),
    imageRetina () {
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
      this.globalResize()
    },
    canvasInit () {
      this.$el.querySelector('.page-home__transition')
      this.bgMainCanvas = this.$el.querySelector('.page-home__transition-main')
      this.bgMainContext = this.bgMainCanvas.getContext('2d')
      this.bgTempCanvas = this.$el.querySelector('.page-home__transition-temp')
      this.bgTempContext = this.bgTempCanvas.getContext('2d')
      this.bgTempContext.mozImageSmoothingEnabled = false
      this.bgTempContext.webkitImageSmoothingEnabled = false
      this.bgTempContext.msImageSmoothingEnabled = false
      this.bgTempContext.imageSmoothingEnabled = false
      let t = (this.bgTempContext.width, this.bgTempContext.height)
      this.bgTempContext.height = t * this.ratio
      this.bgTempContext.scale(this.ratio, this.ratio)
      this.bgSprite = this.$el.querySelector('.page-home__transition-sprite')
    },
    globalResize () {
      this.$el.querySelector('.page-home__transition-main').width = window.innerWidth
      this.$el.querySelector('.page-home__transition-main').height = window.innerHeight
      this.$el.querySelector('.page-home__transition-temp').width = window.innerWidth
      this.$el.querySelector('.page-home__transition-temp').height = window.innerHeight
    },
    animateIn () {
      let t = this
      TweenLite.to(this.$el.querySelector('.page'), 1.3, {
        autoAlpha: 1,
        delay: 0.2,
        ease: Expo.easeInOut,
        onComplete: function () {
        }
      })
      t.canvasTransition()
      TweenLite.from(this.$el.querySelector('.page-home__title'), 2, {
        autoAlpha: 0,
        y: '-100%',
        ease: Expo.easeOut,
        delay: (this.isSafari ? 4 : 0.5)
      })
      TweenLite.from(this.$el.querySelector('.page-home__slogan'), 2, {
        autoAlpha: 0,
        y: '100%',
        ease: Expo.easeOut,
        delay: (this.isSafari ? 4 : 0.5)
      })
      TweenLite.to(this.$el.querySelector('.page-home__cta'), 2, {
        autoAlpha: 1,
        delay: (this.isSafari ? 5 : 1.5)
      })
      TweenLite.to(this.$el.parentElement.querySelector('nav'), 2, {
        autoAlpha: 1,
        delay: 3
      })
      TweenLite.to(this.$el.parentElement.querySelector('footer'), 2, {
        autoAlpha: 1,
        delay: 3
      })
    },
    canvasTransition () {
      let t = this
      let e = this.$el.querySelectorAll('.page-home__chapter')[0]
      let i = this.$el.querySelectorAll('.page-home__chapter')[1]
      let n = e.children[0]
      let r = i.children[0]
      let o = this.$el.querySelector('.page-home__transition')
      this.bgCurrentImage = n.children[0]
      this.bgNextImage = r.children[0]
      this.bgSpriteX = 0
      this.bgSpriteY = 0
      this.bgSpriteFrame = 1
      this.bgCanvasRenderStop = !1
      this.bgTempContext.rect(0, 0, this.bgTempCanvas.width, this.bgTempCanvas.height)
      this.bgTempContext.fillStyle = this.bgNextImage.dataset.background
      this.bgTempContext.fill()
      setTimeout(function () {
        i.style.zIndex = 4
        o.style.opacity = 1
        o.style.zIndex = 4
        i.style.zIndex = 4
        i.style.top = 0
        i.style.left = 0
        t.bgCanvasRender(true)
      }, 250)
    },
    bgCanvasRender (t) {
      let e = this
      if (!this.bgCanvasRenderStop && (this.bgMainContext.clearRect(0, 0, this.bgMainCanvas.width, this.bgMainCanvas.height), this.bgTempContext.clearRect(0, 0, this.bgTempCanvas.width, this.bgTempCanvas.height), this.bgTempContext.globalCompositeOperation = 'source-over', this.bgMainContext.globalCompositeOperation = 'source-over', t)) {
        this.bgTempContext.drawImage(this.bgSprite, this.bgFrameWidth * this.bgSpriteX, this.bgFrameHeight * this.bgSpriteY, this.bgFrameWidth, this.bgFrameHeight, 0, 0, this.bgTempCanvas.width, this.bgTempCanvas.height + 2)
        this.bgTempContext.globalCompositeOperation = 'source-out'
        this.bgTempContext.drawImage(this.bgNextImage, this.bgNextImage.getBoundingClientRect().left, this.bgNextImage.getBoundingClientRect().top, this.bgNextImage.getBoundingClientRect().width, this.bgNextImage.getBoundingClientRect().height)
        this.bgMainContext.drawImage(this.bgCurrentImage, this.bgCurrentImage.getBoundingClientRect().left, this.bgCurrentImage.getBoundingClientRect().top, this.bgCurrentImage.getBoundingClientRect().width, this.bgCurrentImage.getBoundingClientRect().height)
        this.bgMainContext.globalCompositeOperation = 'source-over'
        this.bgMainContext.drawImage(this.bgTempCanvas, 0, 0)
        let i = Date.now()
        let n = i - this.bgSpriteThen
        if (n > this.bgSpriteRate) {
          this.bgCanvasSpriteNextFrame(t)
          this.bgSpriteThen = i - n % this.bgSpriteRate
        }
        requestAnimationFrame(function () {
          e.bgCanvasRender(t)
        })
      }
    },
    bgCanvasSpriteNextFrame (t) {
      if (this.bgSpriteFrame >= this.bgSpriteFrames) {
        this.bgCanvasRenderStop = true
      } else {
        if (t) {
          this.bgSpriteX++
          if (this.bgSpriteX >= this.bgSpriteCol) {
            this.bgSpriteX = 0
            this.bgSpriteY++
          }
        } else {
          this.bgSpriteX--
          if (this.bgSpriteX < 0) {
            this.bgSpriteX = this.bgSpriteCol - 1
            this.bgSpriteY--
          }
        }
        this.bgSpriteFrame++
      }
    }
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  },
  beforeRouteLeave (to, from, next) {
    let i = new TimelineMax({})
    i.to(this.$el.querySelector('.js-second'), 0.7, {
      y: 0,
      ease: Expo.easeInOut
    })
    i.to(this.$el.querySelector('.js-first'), 0.7, {
      y: 0,
      ease: Expo.easeInOut
    }, 0.3)
    i.to(this.$el.querySelector('.page'), 0.5, {
      autoAlpha: 0,
      ease: Expo.easeInOut,
      onComplete: next
    }, '-=0.1')
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
