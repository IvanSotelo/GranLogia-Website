<template lang="pug">
main(role="main")
  transition(v-on:enter="animateIn" v-on:leave="leave" v-bind:css="false" appear)
    section#page-freemasonry.page.page-freemasonry
      .page-freemasonry__background
      .vertical-align
        .vertical-align__item
          p.text {{ text }}
</template>

<script>
import {TweenLite, Expo, TimelineMax} from 'gsap'
import { mapGetters, mapActions } from 'vuex'
import classes from 'dom-classes'
import SplitText from '../pluggins/SplitText'

export default {
  name: 'Freemasonry',
  metaInfo: {
    title: 'Masoneria'
  },
  data () {
    return {
      split: null,
      text: 'July 29th is the 200th anniversary of the birth of Ivan Aivazvsky. He early showed a special attraction to the sea and was the most brilliant consistent representative seascape painter throughout the XIX century. Aivazovskys creativity deep roots connected with Russian Art of the late XVIII and XIX centuries, and in turn impacted on him fruitfully. He was keenly aware of the charm of the changing sea elements and diversity, this greatly reflected his work. He studied the sea, he kenw it by heart, and with extraordinary ease, he portrayed it.'
    }
  },
  mounted () {
    this.splitText()
    this.changeRoute(this.$route.name)
  },
  methods: {
    ...mapActions({
      changeRoute: 'ROUTE_NAME'
    }),
    splitText () {
      this.split = new SplitText(
        this.$el.querySelector('.text'),
        {type: 'words, chars', wordsClass: 'word'}
      )
      !this.isMobile && this.split.words.forEach((t) => {
        return classes.add(t, 'is-hidden')
      })
    },
    introAnimation () {
      const n = new TimelineMax({})
      if (this.isMobile) {
        n.to(this.$el.querySelector('.text'), 1, {
          autoAlpha: 1,
          delay: 1,
          ease: Expo.easeInOut
        })
      } else {
        n.staggerTo(this.split.words, 0.1, {
          className: '-=is-hidden'
        }, 0.1)
      }
    },
    animateIn (el, done) {
      let t = this
      TweenLite.to(this.$el.querySelector('.page'), 1, {
        autoAlpha: 1,
        ease: Expo.easeOut,
        delay: 1
      })
      TweenLite.to(this.$el.querySelector('.page-freemasonry__background'), 1.3, {
        autoAlpha: 1,
        ease: Expo.easeInOut,
        delay: 1,
        onComplete: function () {
          t.introAnimation()
          done()
        }
      })
    },
    leave: function (el, done) {
      console.log(el, done)
    }
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.page-freemasonry{
  .page-freemasonry__background {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 0;
      background-image: url(https://d1rnu9exaqm00k.cloudfront.net/about-bg.jpg);
      background-size: cover;
      background-position: 50% 50%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -ms-perspective: 1000;
      perspective: 1000;
      will-change: opacity;
      opacity: 0;
      @media only screen and (max-width:768px) {
          background-position: 80% 50%
      }
  }
  img {
      position: absolute;
      object-fit: contain;
      height: 95vh;
      bottom: 0;
      opacity: .4;
      right: 5vw
  }
  p {
      width: 50vw;
      margin: 0 auto;
      text-align: left;
      letter-spacing: 0;
      font-size: 1.125rem;
      font-family: "Playfair Display";
      line-height: 1.4;
      color: #69697d;
      .word {
        opacity: 1;
        filter: blur(0);
        transform: translate3d(0, 0, 0);
        transition: opacity .3s ease-out, filter .3s ease-out, transform .3s ease-out;
      }
      .is-hidden {
        opacity: 0;
        filter: blur(5px);
        transform: translate3d(-10px, 0, 0);
        transition-duration: 0s;
      }
      .word:nth-of-type(1),
      .word:nth-of-type(11),
      .word:nth-of-type(12),
      .word:nth-of-type(2),
      .word:nth-of-type(29),
      .word:nth-of-type(33),
      .word:nth-of-type(35),
      .word:nth-of-type(41),
      .word:nth-of-type(42) .word:nth-of-type(67),
      .word:nth-of-type(5),
      .word:nth-of-type(87) {
        color: #fff;
      }
      @media only screen and (max-width:768px) {
        width: 85vw;
        color: #85859e;
        font-size: 1em;
        opacity: 0
      }
  }
}
</style>
