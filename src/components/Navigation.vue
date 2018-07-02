<template lang="pug">
  header
    nav.nav(role="navigation")
      .device-content
        .nav__menu
          p.nav__menu--open(@click="toggleMenu") Menu
        .nav__pagination(itemprop="breadcrumb")
          p
            router-link(to="/") Home
            p *
            a.nav__pagination--crumb(href="")
        .nav__options
          .nav__options_effect
            p Effect • On
          .nav__options_sound
            p Sound • Off
          .nav__options_language
            p.active EN
            p RU
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toggleMenu () {
      this.$store.dispatch('TOGGLE_MENU')
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
    opacity: 0
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
              cursor: pointer;
              padding-left: 2vw;
              p {
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
                .active {
                    color: #978268;
                    pointer-events: none
                }
                @media only screen and (max-width:768px) {
                  padding-left: 7vw
                }
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
              &:last-of-type {
                  pointer-events: none
              }
              &:nth-of-type(3) {
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-width: 40vw;
                  vertical-align: bottom
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