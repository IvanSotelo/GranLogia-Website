<template lang="pug">
main(role="main")
  transition(v-on:enter="animateIn" v-bind:css="false" appear)
    section#page-contact.page.page-contact
      .contact
        .device-content
          .row
            .col-6
              p {{ $t("lang.contact.contact-us") }}
            .col-6
              p
                a(href="mailto:hi@kirillpritula.com") hi@kirillpritula.com
          .row
            .col-6
              p {{ $t("lang.contact.archive-materials") }}
            .col-6
              p
              p Barsamov N.S. Ivan Aivazovsky, 1817-1900. - M:. Art 1962
              p Wagner L.A., Grigorovich N.S. Tale of the painter Aivazovsky. - M:. SPH 1958
              p Andreeva Y.I. Aivazovsky. - M:. Veche 2013
              P
                a(href="http://www.tretyakovgallerymagazine.com/" target="_blank") The Tretyakov Gallery Magazine
          .row
            .col-6
              p {{ $t("lang.contact.music") }}
            .col-6
              p
                a(href="http://www.johannjohannsson.com" target="_blank") Jóhann Jóhannsson - McCanick
          .row
            .col-6
              p {{ $t("lang.contact.development-design") }}
            .col-6
              p
                a(href="https://www.behance.net/IvanSotelo" target="_blank") Ivan Sotelo
          .row
            .col-6
            .col-6
              .made-with-heart
                span.deskode-code
                |  with
                span.deskode-heart
                |  by
                a(href="https://www.deskode.com" target="_blank")
                  span.deskode-logo
          .row
            .col-6
            .col-6
              p This site is a passion/side project that was built in collaboration with Eugene Lee &amp; Diana Dubina.  It is a non-commercial site, and we do not make any profits. We do not claim any document accuracy on this site, there may potentially be inaccurate text.  Most of the text that are in english were translated from Russian via Google Translate, so there may be grammatical/spelling errors.
</template>

<script>
import {TweenLite, Expo, TimelineMax} from 'gsap'
import { mapActions } from 'vuex'

export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contacto'
  },
  beforeRouteLeave (to, from, next) {
    TweenLite.to(this.$el.querySelector('.page'), 0.7, {
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
      changeRoute: 'ROUTE_NAME'
    }),
    animateIn (el, done) {
      let i = new TimelineMax({
        onComplete: done
      })
      i.to(el, 1, {
        autoAlpha: 1,
        delay: 0.5,
        ease: Expo.easeInOut
      }, 1)
      i.staggerFrom(this.$el.querySelectorAll('.row'), 1.5, {
        autoAlpha: 0,
        y: 50,
        ease: Expo.easeInOut
      }, 0.1, '-=1.0')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.contact {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100vh;
  .made-with-heart{
    color: #fff;
  }
  .row {
    width: 80%;
    padding: .4vw 0;
    @media only screen and (max-width: 768px) {
      padding: 2vw 0;
      width: 90%
    }
    .col-6 {
      a, p {
        color: #fff;
        letter-spacing: 0;
        font-family: PTSerifPro-Book;
        @media only screen and (max-width: 768px) {
          line-height: 1.4
        }
      }
      &:first-of-type {
        font-size: 1.2vw;
        font-style: italic;
        font-family: "Playfair Display";
        @media only screen and (max-width: 768px) {
          font-size: 5vw
        }
      }
      a {
        transition: color 1s cubic-bezier(.19, 1, .22, 1);
        &:hover {
          color: #978268
        }
      }
      &:first-of-type {
        text-align: right;
        padding-right: 5%;
        a, p {
          font-size: 1.2vw;
          font-style: italic;
          font-family: "Playfair Display";
          @media only screen and (max-width: 768px) {
            font-size: 5vw
          }
        }
        @media only screen and (max-width:768px) {
          text-align: left
        }
      }
      @media only screen and (max-width:768px) {
        width: 100%
      }
      &:last-of-type {
        text-align: left;
        font: .6875rem/1.563rem NewBaskervilleExpOdC;
      }
    }
    &:first-of-type {
      a, p {
        font-size: 1.2vw;
        font-style: italic;
        font-family: "Playfair Display";
        @media only screen and (max-width: 768px) {
          font-size: 5vw
        }
      }
    }
    &:last-of-type {
      text-align: left;
      a, p {
        width: 80%;
        line-height: 1.6;
        color: rgba(255, 255, 255, .37);
        @media only screen and (max-width: 768px) {
          a, p {
            width: 100%
          }
        }
      }
    }
  }

  @media only screen and (max-width:768px) {
    height: 90vh
  }
}
</style>
