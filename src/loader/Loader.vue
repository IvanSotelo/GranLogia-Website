<template lang='pug'>
  .loader
    .preloader
      .loader-wrapper
        p.loader-text--model Ivan Sotelo
        .loader-text-outter
          p.loader-text.loader-text--sizing Ivan Sotelo
          .loader-text-inner
            p.loader-text.loader-text--mask Ivan Sotelo
      p.loader-message.mobile {{ $t("lang.loader.loader-message.isMobile") }}
      p.loader-message.audio
        template(v-if="audio==='off'") {{ $t("lang.loader.loader-message.loader-music-text") }}
          span.loader-line
          span.loader-music-switch {{ $t("lang.loader.loader-message.loader-music-switch") }}
</template>

<script>
import ImagePreloader from 'image-preloader'
import {TweenLite, TimelineMax, TweenMax, Expo} from 'gsap'
// import TweenLite from 'gsap'

export default {
  name: 'Loader',
  data () {
    return {
      images: [
        './assets/img/preloader-line.svg',
        'https://d1rnu9exaqm00k.cloudfront.net/sprite.png', 'https://d1rnu9exaqm00k.cloudfront.net/site-menu-0.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/site-menu-1.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/site-menu-2.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/site-menu-3.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/site-menu-4.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/life/childhood.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/life/crimea-and-europe.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/life/feodosia.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/life/imperial-academy-of-arts.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/life/last-years.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/life/return-to-russia.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/bg10.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1839-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1857-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1864-1865-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1864-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1868-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1870-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1874-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1890-1-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1890-2-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1890-3-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1890-4-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1890-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1897-1-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1897-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1898-1-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1898-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1899-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1899-1-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-1-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-2-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-3-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-4-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-5-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-6-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-7-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-8-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-9-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1900-10-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1910-1-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1910-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1934-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1945-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/1990-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/early-20th-century-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/late-19th-century-1-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/late-19th-century-2-thumbnail.jpg', 'https://d1rnu9exaqm00k.cloudfront.net/archive/late-19th-century-thumbnail.jpg'
      ],
      audio: 'off'
    }
  },
  methods: {
    preloadImages: function () {
      const preloader = new ImagePreloader()
      let loaded = 0
      preloader.onProgress = () => {
        var e = Math.abs(++loaded % 200) - 50
        var i = -(Math.abs(loaded % 200) - 50)
        if (Object.is(i, -0)) {
          i = 0
        }
        TweenLite.to(this.$el.querySelector('.loader-text-outter'), 1, {
          x: e
        })
        TweenLite.to(this.$el.querySelector('.loader-text-inner'), 1, {
          x: i
        })
      }
      preloader.preload(this.images)
        .then((status) => {
          let e = this
          TweenMax.delayedCall(1, function () {
            var i = new TimelineMax({
              paused: false,
              onComplete: function () {
                e.isLoaded()
              }
            })
            i.to(e.$el.querySelector('.preloader'), 1, {
              autoAlpha: 0,
              force3D: false,
              ease: Expo.easeOut
            })
          })
        })
    },
    isLoaded: function () {
      this.$store.commit('PRELOADED')
    }
  },
  mounted () {
    this.$el.querySelector('.preloader').style.opacity = 0
    var i = this
    const n = new TimelineMax({
      paused: false,
      onComplete: function () {
        i.preloadImages()
      }
    })
    n.from(this.$el.querySelector('.preloader'), 0, {
      autoAlpha: 0,
      ease: Expo.easeInOut
    }).to(this.$el.querySelector('.preloader'), 3, {
      autoAlpha: 1,
      ease: Expo.easeInOut
    })
  }
}
</script>

<style lang='scss'>
.preloader{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  z-index: 999;

  @media only screen and (max-width:768px) {
    font-size: .9375rem;
  }

  .loader-message {
      letter-spacing: .2vw;
      position: absolute;
      bottom: 2vw;
      right: 0;
      left: 0;
      z-index: 10;
      text-transform: uppercase;
      opacity: .4;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: center;
      justify-content: center;
      -ms-flex-align: center;
      align-items: center;

      @media only screen and (max-width:768px) {
        bottom: 30vw;
      }
      
      
  }

  .mobile {
    display: none;
    @media only screen and (max-width:768px) {
      display: -ms-flexbox;
      display: flex;
    }
  }
  .audio {
    display: -ms-flexbox;
    display: flex;
    @media only screen and (max-width:768px) {
      display: none;
    }
  }
  
  .loader-music-switch {
      cursor: pointer
  }
  
  .loader-line {
      height: 1px;
      width: 5vw;
      display: inline-block;
      background-image: url(./assets/img/preloader-line.svg);
      background-size: cover;
      background-position: 50% 50%;
      margin-right: .3vw;
      opacity: .3;
  }

  .loader-wrapper {
      // font-weight: 700;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      transform: uppercase;
      transition: opacity 1.5s cubic-bezier(.19, 1, .22, 1);

      p {
          font-size: 2.125rem;
          font-family: msd;
          text-transform: none;
          letter-spacing: 0;
          padding: 2vw 0;

          @media only screen and (max-width:768px) {
            font-size: 2.3rem;
          }
      }
  }

  .loader-text--model {
      color: #54535c;
      position: absolute;
  }

  .loader-text-outter {
      position: relative;
      overflow: hidden;
      transform: translateX(-100%);
  }

  .loader-text-inner {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(100%);
  }

  .loader-text--mask {
      color: #fff;
  }

  .loader-text--sizing {
      visibility: hidden;
  }

}
</style>
