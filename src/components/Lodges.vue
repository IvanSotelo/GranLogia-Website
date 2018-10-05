<template lang="pug">
main(role="main")
  transition(v-on:enter="animateIn" v-bind:css="false" appear)
    section#page-lodges.page.page-lodges
      .lodges__mobile
        p(@click="openLodge") Viewable only on Desktop
      Lodge(v-if="showLodge")
      .map__container
</template>

<script>
import {TweenLite, Expo, TimelineMax} from 'gsap'
import { mapGetters, mapActions } from 'vuex'
import Lodge from './Lodge'

export default {
  name: 'Lodges',
  metaInfo: {
    title: 'Logias Jurisdiccionadas'
  },
  components: {
    Lodge
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
  },
  methods: {
    ...mapActions({
      changeRoute: 'ROUTE_NAME',
      openLodge: 'TOGGLE_LODGE'
    }),
    animateIn (el, done) {
      let i = new TimelineMax({
        onComplete: done
      })
      i.to(this.$el.querySelector('.page'), 1, {
        autoAlpha: 1,
        ease: Expo.easeInOut
      }, 1)
      i.staggerTo(this.$el.querySelectorAll('.js-lodges-list'), 1, {
        y: 0,
        autoAlpha: 1
      }, 0.1, '-=1.0')
    }
  },
  computed: {
    ...mapGetters([
      'isMobile',
      'showLodge'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.page-lodges{
  .lodges__mobile {
      position: absolute;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #282830;
      z-index: 10;
      p {
          letter-spacing: 0;
          text-transform: uppercase;
          transform: translateY(-50%);
          position: relative;
          top: 50%;
          letter-spacing: .6vw
      }
  }
}
</style>
