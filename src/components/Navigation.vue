<template lang="pug">
  header
    nav.nav(role="navigation")
      .device-content
        .nav__menu
          p.nav__menu--open(@click="toggleMenu") Menu
        .nav__pagination(itemprop="breadcrumb")
          p
            router-link(to="/") {{ $t("lang.navigation.home") }}
            a.nav__pagination--crumb(href="") &nbsp;•&nbsp;{{ $t("lang.route[" + $route.meta.index + "]") }}
        .nav__options
          .nav__options_sound
            p(@click="toggleSound" v-if="audio") {{ $t("lang.navigation.sound") }} • {{audio}}
            p(@click="toggleSound" v-else) {{ $t("lang.navigation.sound") }} • on
          .nav__options_language
            p(@click="change_lang('es')" v-bind:class="[$i18n.locale=='es' ? 'active' : '']") ES
            p(@click="change_lang('en')" v-bind:class="[$i18n.locale=='en' ? 'active' : '']") EN
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Howl } from 'howler'

export default {
  name: 'Navigation',
  data () {
    return {
      sound: null
    }
  },
  methods: {
    ...mapActions({
      toggleMenu: 'TOGGLE_MENU',
      toggleSound: 'TOGGLE_SOUND',
      toggleLanguage: 'TOGGLE_LANGUAGE'
    }),
    change_lang (lang) {
      this.$store.commit('PRELOADED')
      this.$el.querySelector('nav').removeAttribute('style')
      this.$el.parentElement.querySelector('footer').removeAttribute('style')
      this.$i18n.locale = lang
      this.toggleLanguage()
    },
    loadAudio () {
      !this.isMobile && this.audio ? this.audio === 'on' && this.playAudio() : this.playAudio()
    },
    playAudio () {
      this.sound ? this.sound.play() : this.sound = new Howl({
        src: ['http://d1rnu9exaqm00k.cloudfront.net/audio/johann-johannsson-mccanick-2.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.5
      })
      this.sound.play()
    },
    stopAudio () {
      this.sound && this.sound.stop()
    }
  },
  computed: {
    ...mapGetters([
      'audio',
      'isMobile',
      'isLoading'
    ])
  },
  watch: {
    audio: function (audio) {
      audio === 'on' ? this.playAudio() : this.stopAudio()
    },
    isLoading: function (isLoading) {
      isLoading || this.loadAudio()
      isLoading && this.stopAudio()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.is-loaded{
  nav {
    opacity: 1
  }
}

.is-home,
.is-loading{
  .nav__pagination {
    opacity: 0;
    a{
    }
  }
}

.is-history{
  a:not(.active),
  p:not(.active) {
      color: #000;
  }
  a{
    &:hover {
        color: #978268
    }
  }
}

.nav {
  padding: 2vw 0;
  position: relative;
  z-index: 2;
  opacity: 0;
  transition: opacity 1.5s cubic-bezier(.19, 1, .22, 1);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media only screen and (max-width:768px) {
    padding: 6vw 0;
    position: fixed;
    top: 0;
    width: 100%
  }

  .device-content {
      display: block;

      .nav__menu,
      .nav__options {
          position: relative;
          z-index: 1;
      }

      .nav__menu--open {
          cursor: pointer;
          @media only screen and (max-width:768px) {
            padding: 3vw;
            position: absolute;
            left: -2.6vw;
            top: -6.4vw;
            &:active {
                      background: rgba(0, 0, 0, .37)
            }
          }
      }

      .nav__options {
          float: right;
          .nav__options_effect {
            transition: opacity 1s cubic-bezier(.19, 1, .22, 1);
            visibility: hidden;
            cursor: pointer;

            &:not(.is-home){
              opacity: 0;
              transition: opacity 1s cubic-bezier(.19, 1, .22, 1)
            }

            @media only screen and (max-width:768px) {
              display: none!important
            }
          }

          .nav__options_sound {
              padding-left: 2vw;
              p {
                cursor: pointer;
                font-style: italic
              }
              @media only screen and (max-width:768px) {
                display: none!important
              }
          }

          .nav__options_language {
              padding-left: 1vw;
              p {
                cursor: pointer;
                padding-left: 1vw;
                @media only screen and (max-width:768px) {
                  padding-left: 7vw
                }
              }
              .active {
                color: #978268;
                pointer-events: none
              }
          }
      }

      .nav__pagination {
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: center;
          z-index: 0;
          transition: opacity 2s cubic-bezier(.19, 1, .22, 1);

          a {
              transition: all 2s cubic-bezier(.19, 1, .22, 1);
              &:nth-of-type(3) {
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-width: 40vw;
                  vertical-align: bottom
              }
              &:last-of-type {
                pointer-events: none;
              }
          }

          @media only screen and (max-width:768px) {
                display: none!important
          }
      }
      @media only screen and (max-width:768px) {
          width: 85%
      }
      @media only screen and (min-width:769px) and (max-width:1024px) {
          width: 95%
      }
  }

  a,
  div,
  p {
      display: inline-block;
      text-transform: uppercase
  }

  a,
  p {
      transition: color 1s cubic-bezier(.19, 1, .22, 1);

      &:hover {
          color: #a1907f
      }
  }

}
</style>
