<template lang="pug">
transition(v-on:enter="zoomIn" v-on:leave="zoomOut" v-bind:css="false" appear)
  .lodge__overlay
    .row
      .col-7
        .lodge__overlay-cover
        .lodge__overlay-counter
          div
            p.lodge__overlay-counter--current {{ current + 1 }}
            span /
            p.lodge__overlay-counter--total {{ total }}
          p.lodge__overlay-counter--next(@click='updateNext') Next
        ul.lodge__overlay-images
          li.image-list(v-for="(n, index) in 2" :key="index"  :class="['' + index]")
            svg.svg(style='width: 100%; height: 100%; top: 0; position: fixed; bottom: 0; left: 0')
              defs
                linearGradient(x2='0%' y2='1' :id="['gradient-' + index]")
                  stop(offset='0.8' stop-color='#fff')
                  stop(offset='1' stop-color='#000')
                mask(maskUnits='objectBoundingBox' maskContentUnits='objectBoundingBox' :id="['gradient-mask-' + index]")
                  rect.image-rect(x='0' :y="[index==0 ? '0' : '-1.3']" width='2' height='1.3' :fill="['url(#gradient-' + index + ')']")
              image.js-images(x='0' y='0' width='100%' height='100%' :xlink:href="['https://d1rnu9exaqm00k.cloudfront.net/map/genova-' + n + '.jpg']" :mask="['url(#gradient-mask-' + index + ')']" preserveAspectRatio='xMidYMid slice')
      .col-5
        .lodge__overlay-close(@click="closeLodge")
        .lodge__overlay-content
          .lodge__overlay-content--text
            h2 Genova
            p In 1879, Aivazovsky went to Genova to collect materials related to the discovery of Christopher Columbus of America. The artist needed this information, since he intended to paint a canvas about Columbus and the discovery of America. Preparing for this work, Aivazovsky very carefully collected information about his hero. In Genova, the artist studied the house where Columbus was born, collected information about him in libraries and museums, studied ancient maps, engravings, suits, and weapons of that time, including descriptions of sea voyages.
</template>

<script>
import {TweenLite, Expo, Linear, TimelineMax} from 'gsap'
import { mapGetters, mapActions } from 'vuex'
import Single from '../smooth/single'

export default {
  name: 'Lodge',
  metaInfo: {
    title: 'Res:. Log:. Simb:. Perseverancia y Lealtad N°12'
  },
  data () {
    return {
      smooth: null,
      slides: 0,
      current: 0,
      total: 0,
      next: null
    }
  },
  mounted () {
    this.startSlideShow()
    this.addSmooth()
    this.setupControls()
  },
  methods: {
    ...mapActions({
      closeLodge: 'TOGGLE_LODGE'
    }),
    setup (el) {
      // this.blank.style.transform = "scale3d(" + r + ", " + n + ", 0)";
      let i = this.$el.getBoundingClientRect()
      let n = i.height / window.innerHeight
      let r = i.width / window.innerWidth
      let o = el.getBoundingClientRect()
      let a = o.left > i.left ? o.left - i.left : i.left - o.left
      let s = o.top > i.top ? o.top - i.top : i.top - o.top
      let l = o.left > i.left ? '-' : ''
      el.style.transform = 'translate3d( ' + l + a + 'px, -' + s + 'px, 0px)  scaleX(' + r + ') scaleY(' + n + ')'
    },
    zoomIn (el, done) {
      this.hideNavFooter(true)
      this.setup(el)
      TweenLite.to(el, 0.5, {
        autoAlpha: 1,
        force3D: true
      })
      TweenLite.to(el, 1, {
        scale: 1,
        ease: Expo.easeOut,
        x: 0,
        force3D: true,
        y: 0,
        delay: 0.4,
        onComplete: done
      })
    },
    zoomOut (el, done) {
      this.hideNavFooter(false)
      TweenLite.to(el, 1.1, {
        autoAlpha: 0,
        ease: Expo.easeInOut,
        clearProps: 'all',
        onComplete: done
      })
    },
    hideNavFooter (t) {
      TweenLite.to(this.$el.parentElement.parentElement.parentElement.querySelector('footer'), t ? 0 : 1, {
        autoAlpha: t ? 0 : 1
      })
      TweenLite.to(this.$el.parentElement.parentElement.parentElement.querySelector('nav'), t ? 0 : 1, {
        autoAlpha: t ? 0 : 1
      })
    },
    addSmooth () {
      let e = new TimelineMax({})
      e.to(this.$el.querySelector('.lodge__overlay-cover'), 1, {
        x: '-100%',
        force3D: !0,
        ease: Expo.easeInOut
      }, 0.2)
      e.to(this.$el.querySelector('.lodge__overlay-content'), 1, {
        autoAlpha: 1,
        force3D: !0,
        ease: Expo.easeInOut
      })
      e.from(this.$el.querySelector('.lodge__overlay-close'), 0.5, {
        autoAlpha: 0
      })
      e.set(this.$el.querySelector('.lodge__overlay-close'), {
        pointerEvents: 'auto'
      })
      setTimeout(() => {
        this.smooth = new Single({
          section: this.$el.querySelector('.lodge__overlay-content'),
          ease: 0.075,
          single: !1,
          map: !0
        })
        this.smooth.init()
        this.smooth.resize()
      }, 1500)
    },
    startSlideShow () {
      this.$el.querySelectorAll('.image-list').forEach((t) => {
        t.style.zIndex = 10
      })
    },
    setupControls () {
      this.slides = this.$el.querySelectorAll('.image-list').length
      this.total = this.slides
      this.slides === this.current + 1 && TweenLite.to(this.$el.querySelector('.lodge__overlay-counter--next'), 1, {
        autoAlpha: 0
      })
    },
    updateNext () {
      this.next = (this.current + 1) % this.slides
      this.animating || this.process()
    },
    process () {
      let t = this
      this.animating = !0
      this.$el.querySelectorAll('.image-list')[this.current].style.zIndex = 20
      this.$el.querySelectorAll('.image-list')[this.current === this.length - 1 ? 0 : this.current + 1].style.zIndex = 30
      console.log(this.$el.querySelectorAll('.image-rect')[this.next])
      TweenLite.to(this.$el.querySelectorAll('.image-rect')[this.next], 1, {
        attr: {
          y: 0
        },
        ease: Linear.easeNone
      })
      TweenLite.delayedCall(1, () => {
        t.animating = !1
        t.siblings(t.$el.querySelectorAll('.image-list')[t.next]).forEach((t) => {
          let e = t.children[0].children[0].children[1].children[0]
          console.log(e)
          TweenLite.set(e, {
            attr: {
              y: -1.5
            }
          })
        })
        t.current + 1 === t.length ? t.current = 0 : ++t.current
      })
    },
    siblings (n) {
      return [...n.parentElement.children].filter(c => c.nodeType === 1 && c !== n)
    }
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  },
  destroyed () {
    this.smooth && this.smooth.destroy()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.lodge__overlay{
  position: absolute;
  background: #fff;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .row {
    height: 100%;
    .col-5,
    .col-7 {
      position: relative
    }
    .col-7 {
      height: 100vh;
      background: #000;
      .lodge__overlay-cover{
        position: absolute;
        height: 100%;
        width: 101%;
        background: #fff;
        z-index: 100;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -ms-perspective: 1000;
        perspective: 1000;
        will-change: transform;
      }
      .lodge__overlay-counter {
        position: absolute;
        z-index: 80;
        bottom: 4vw;
        left: 0;
        div {
          border-bottom: 1px solid #fff;
          padding-left: 5vw;
          padding-bottom: 5%;
        }
        span,
        .lodge__overlay-counter--current,
        .lodge__overlay-counter--total {
          color: #fff;
          display: inline-block;
        }
        .lodge__overlay-counter--current {
            font-size: 2vw;
            font-family: NewBaskervilleC;
        }
        .lodge__overlay-counter--total {
            font-family: NewBaskervilleC;
            font-size: 1.3vw;
        }
        .lodge__overlay-counter--next {
            text-align: right;
            text-transform: uppercase;
            padding: 7% 0;
            cursor: pointer;
        }
      }
      .lodge__overlay-images {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        li {
          z-index: 2;
          width: 100%;
          height: 100%;
          position: absolute
        }
        .svg {
          display: block;
          width: 101%!important;
          margin: 0 auto;
          left: 0!important;
          position: absolute!important
        }
        &:after {
          content: "";
          display: block;
          background: rgba(0, 0, 0, .26);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          z-index: 60
        }
      }
    }
    .col-5 {
      height: 100%;
      .lodge__overlay-close {
        position: absolute;
        right: 3.5vw;
        top: 4vw;
        z-index: 2;
        width: 3vw;
        background-image: url(https://d1rnu9exaqm00k.cloudfront.net/cross.svg);
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: 50% 50%;
        transform: rotate(45deg);
        height: 3vw;
        cursor: pointer;
        transition: opacity 1s cubic-bezier(.19, 1, .22, 1);
        &:hover {
          opacity: .5
        }
      }
      .lodge__overlay-content {
        height: auto;
        opacity: 0;
        .lodge__overlay-content--text {
          text-align: left;
          width: 65%;
          margin: 0 auto;
          padding-top: 15%;
          padding-bottom: 15%;
          h2,
          p {
            letter-spacing: 0;
            color: #000
          }
          h2 {
            color: #a8947d;
            padding: 7% 0;
            font-family: "Playfair Display"
          }

          p {
            font-size: 1vw;
            font-family: PTSerifPro-Book;
            line-height: 1.5;
            padding-bottom: 1vw
          }
        }
      }
    }
  }
}
.vs-scrollbar-single {
   right: 41.4vw;
   width: 6px;
   left: auto;
   transition: opacity 1s cubic-bezier(.19, 1, .22, 1);
}
.vs-scrollbar-single .vs-scrolldrag {
    background: #978268
}
</style>
