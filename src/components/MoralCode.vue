<template lang="pug">
main(role="main")
  transition(v-on:enter="animateIn" v-bind:css="false" appear)
    section#page-moral-code.page.page-moral-code
      .moral-code
        ul.js-moral-code
          li.js-moral-code-list(v-for="(n, i) in 10" :key="i")
            p 1835
            p Saint-Petersburg
</template>

<script>
import {TweenLite, Expo, TimelineMax} from 'gsap'
import { mapGetters, mapActions } from 'vuex'
import Single from '../smooth/single'
// import SplitText from '../pluggins/SplitText'

export default {
  name: 'MoralCode',
  metaInfo: {
    title: 'Código moral masónico'
  },
  data () {
    return {
      smooth: null
    }
  },
  beforeRouteLeave (to, from, next) {
    TweenLite.to(this.$el.querySelector('.page'), 1, {
      autoAlpha: 0,
      ease: Expo.easeInOut,
      clearProps: 'all',
      onComplete: next
    })
  },
  mounted () {
    this.changeRoute(this.$route.name)
    this.addSmooth()
  },
  methods: {
    ...mapActions({
      changeRoute: 'ROUTE_NAME'
    }),
    animateIn (el, done) {
      let i = new TimelineMax({
        onComplete: done
      })
      i.to(this.$el.querySelector('.page'), 1, {
        autoAlpha: 1,
        ease: Expo.easeInOut
      }, 1)
      i.staggerTo(this.$el.querySelectorAll('.js-moral-code-list'), 1, {
        y: 0,
        autoAlpha: 1
      }, 0.1, '-=1.0')
    },
    addSmooth () {
      this.smooth = new Single({
        native: false,
        section: this.$el.querySelector('.js-moral-code'),
        ease: 0.075
      })
      this.smooth.init()
    }
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  },
  destroyed () {
    this.smooth.destroy()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.page-moral-code{
  .moral-code{
    text-align: left;
    width: 60%;
    margin: 0 auto;
    left: 0;
    right: 0;
    ul {
        padding-top: 7.5rem;
        padding-bottom: 5%;
        li {
            transform: translateY(100%);
            opacity: 0;
            display: -ms-flexbox;
            display: flex;
            p {
              display: inline-block;
              letter-spacing: 0;
              &:first-of-type {
                  padding-right: 5vw;
                  font-family: "Playfair Display";
                  font-style: italic
              }
              &:last-of-type {
                  font-family: PTSerifPro-Book
              }
            }
        }
        @media only screen and (max-width:768px) {
          padding-bottom: 35%
        }
    }
  }
}
</style>
