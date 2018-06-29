<template lang="pug">
  aside.site-menu(role="list", v-bind:class="[menuOpen ? 'active' : '']")
    p.site-menu--close._close(@click="toggleMenu()") Close
    ._col.site-menu__item(role="listitem", v-if="isMobile")
      router-link(to="/")
        p.site-menu__item--title Home
        .site-menu__item--bg
    ._col.site-menu__item(role="listitem")
      router-link(to="/works")
        p.site-menu__item--title Works
        .site-menu__item--bg(style="background-image: url(https://d1rnu9exaqm00k.cloudfront.net/site-menu-0.jpg);")
    ._col.site-menu__item(role="listitem")
      router-link(to="/works")
        p.site-menu__item--title Life
        .site-menu__item--bg(style="background-image: url(https://d1rnu9exaqm00k.cloudfront.net/site-menu-1.jpg);")
    ._col.site-menu__item(role="listitem")
      router-link(to="/works")
        p.site-menu__item--title Hola
        .site-menu__item--bg(style="background-image: url(https://d1rnu9exaqm00k.cloudfront.net/site-menu-2.jpg);")
    ._col.site-menu__item(role="listitem")
      router-link(to="/works")
        p.site-menu__item--title Awwards
        .site-menu__item--bg(style="background-image: url(https://d1rnu9exaqm00k.cloudfront.net/site-menu-3.jpg);")
    ._col.site-menu__item(role="listitem", v-if="!isMobile")
      router-link(to="/works")
        p.site-menu__item--title Map
        .site-menu__item--bg(style="background-image: url(https://d1rnu9exaqm00k.cloudfront.net/site-menu-4.jpg);")
    ._col.site-menu__item(role="listitem", v-if="isMobile")
      router-link(to="/about")
        p.site-menu__item--title About
        .site-menu__item--bg
    ._col.site-menu__item(role="listitem", v-if="isMobile")
      router-link(to="/credits")
        p.site-menu__item--title Credits
        .site-menu__item--bg
</template>

<script>
import {TimelineMax, Expo} from 'gsap'

export default {
  name: 'SiteMenu',
  data: function () {
    return {
      menu_items: null
    }
  },
  mounted () {
    this.menu_items = this.$el.querySelectorAll('.site-menu__item')
  },
  methods: {
    animateMenuIn: function () {
      this.menu_items.forEach(function (t) {
        return (t.style.pointerEvents = 'auto')
      })
      let t = new TimelineMax()
      t.to(this.$el, this.isMobile ? 0.7 : 0.8, {
        x: '0%',
        force3D: false,
        ease: Expo.easeInOut
      })
      t.to(this.$el.parentElement.querySelector('main'), this.isMobile ? 0.7 : 0.8, {
        x: '25%',
        force3D: false,
        ease: Expo.easeInOut
      }, this.isMobile ? '-=0.7' : '-=0.8')
    },
    animateMenuOut: function () {
      this.menu_items.forEach(function (t) {
        return (t.style.pointerEvents = 'none')
      })
      let t = new TimelineMax()
      t.to(this.$el.parentElement.querySelector('main'), this.isMobile ? 0.7 : 0.8, {
        x: '0%',
        ease: Expo.easeInOut,
        force3D: false
      })
      t.to(this.$el, this.isMobile ? 0.7 : 0.8, {
        x: '-100%',
        force3D: false,
        ease: Expo.easeInOut
      }, '-=0.8')
    },
    toggleMenu () {
      this.$store.dispatch('TOGGLE_MENU')
    }
  },
  computed: {
    isMobile () {
      return this.$store.getters.isMobile
    },
    menuOpen () {
      return this.$store.getters.menuOpen
    }
  },
  watch: {
    menuOpen: function (menuOpen) {
      menuOpen ? this.animateMenuIn() : this.animateMenuOut()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.site-menu {
    background: #282830;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    z-index: 100;
    overflow: hidden;
    will-change: transform;
    transform: translate3d(-100%, 0, 0);
    @media only screen and (max-width:768px) {
      background: #24242b
    }
    ._close {
        text-transform: uppercase;
        left: 2.5%;
        top: 3.6%;
        position: absolute;
        z-index: 3;
        cursor: pointer;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -ms-perspective: 1000;
        perspective: 1000;
        transition: color 1s cubic-bezier(.19, 1, .22, 1);
        @media only screen and (max-width:768px) {
          left: 3.9%;
          padding: 4vw;
          top: 1.3%
        }
        &:hover {
            color: #978268;
            @media only screen and (max-width:768px) {
              background: rgba(0, 0, 0, .37)
            }
        }
    }
    ._col {
        width: 20%;
        position: absolute;
        height: 100%;
        overflow: hidden;
        &:not(:last-of-type) {
            border-right: 1px solid rgba(255, 255, 255, .09);
            @media only screen and (max-width:768px) {
                    border-right: 0
            }
        }
        &:hover{
          a {
            div {
                opacity: 1;
                transform: translate3d(-10%, 0, 0);
                @media only screen and (max-width:768px) {
                  opacity: 0
                }
            }
          }
        }
        a {
          display: block;
          width: 100%;
          text-align: center;
          height: 100%;
          p {
              position: relative;
              top: 50%;
              z-index: 2;
              opacity: 1;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              -ms-perspective: 1000;
              perspective: 1000;
              text-transform: uppercase;
              @media only screen and (max-width:768px) {
                left: 8vw;
                font-size: 4.5vw;
                letter-spacing: .7vw
              }
          }
          div {
              width: 115%;
              height: 100%;
              background-size: cover;
              background-position: 50% 50%;
              z-index: 1;
              position: absolute;
              top: 0;
              opacity: 0;
              transition: all 1s cubic-bezier(.19, 1, .22, 1);
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              -ms-perspective: 1000;
              perspective: 1000;
              &:after {
                  content: "";
                  display: block;
                  width: 100%;
                  height: 100%;
                  background: #000;
                  opacity: .2
              }
          }
          &:active {
            p {
              @media only screen and (max-width:768px) {
                color: rgba(0, 0, 0, .37)
              }
            }
          }
          @media only screen and (max-width:768px) {
            text-align: left
          }
        }
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(4),
        &:nth-of-type(5),
        &:nth-of-type(6),
        &:nth-of-type(7) {
          @media only screen and (max-width:768px) {
            left: 0 !important
          }
        }
        &:nth-of-type(1) {
          @media only screen and (max-width:768px) {
            top: 10%
          }
        }
        &:nth-of-type(2) {
            left: 20%;
            @media only screen and (max-width:768px) {
              top: 18%
            }
        }
        &:nth-of-type(3) {
            left: 40%;
            @media only screen and (max-width:768px) {
              top: 26%
            }
        }
        &:nth-of-type(4) {
            left: 60%;
            @media only screen and (max-width:768px) {
              top: 34%
            }
        }
        &:nth-of-type(5) {
            left: 80%;
            @media only screen and (max-width:768px) {
              top: 42%
            }
        }
        &:nth-of-type(6) {
          @media only screen and (max-width:768px) {
            top: 50%
          }
        }
        &:nth-of-type(7){
          @media only screen and (max-width:768px) {
              top: 58%
          }
        }
        @media only screen and (max-width:768px) {
          width: 100%;
          height: 8%
        }
    }
    nav{
      a,
      p {
        color: #fff
      }
    }
}
</style>
