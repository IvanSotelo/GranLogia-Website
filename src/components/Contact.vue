<template lang="pug">
main(role="main")
  transition(v-on:enter="animateIn" v-bind:css="false" appear)
    section#page-contact.page.page-contact
      .contact
        .device-content
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
              p {{ $t("lang.contact.development") }}
            .col-6
              p
                a(href="http://ivansotelo.me" target="_blank") Ivan Sotelo
          .row
            .col-6
              p {{ $t("lang.contact.design") }}
            .col-6
              p
                a(href="https://www.behance.net/IvanSotelo" target="_blank") Ivan Sotelo
          .row
            .col-6
            .col-6
              span.made-with-heart(style='color: white;')
                svg.octicon.octicon-code(viewbox='0 0 14 16' version='1.1' width='14' height='16' aria-hidden='true' style='display: inline-block; vertical-align: text-bottom; fill: currentColor;')
                  path(fill-rule='evenodd' d='M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z') with
                svg.octicon.octicon-heart(viewbox='0 0 12 16' version='1.1' width='12' height='16' aria-hidden='true' style='color: #ff0d1c;display: inline-block;vertical-align: text-bottom;fill: currentColor;')
                  path(fill-rule='evenodd' d='M11.2 3c-.52-.63-1.25-.95-2.2-1-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-.95.05-1.69.38-2.2 1-.52.61-.78 1.28-.8 2 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.02-.72-.28-1.39-.8-2.02V3z') by
                a(href='http://deskode.com' style='vertical-align: text-bottom; color: currentColor;')
                  svg(version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewbox='0 0 960 560' style='fill: currentColor;height: 50px;position: absolute;margin-top: -16px;margin-left: -4px;')
                    path.st0(d='M189.3,227.1c12.7,11.5,19.1,27.6,19.1,48.2c0,20.6-6.2,36.8-18.5,48.8c-12.4,12-31.3,18-56.8,18H89.2V209.8h45.4C158.3,209.8,176.5,215.6,189.3,227.1z M185.9,275.9c0-30.3-17.3-45.4-52-45.4h-22.3v90.7h24.8c16,0,28.3-3.8,36.8-11.5C181.6,302,185.9,290.8,185.9,275.9z')
                    path.st0(d='M320.3,301h-78.9c0.5,7.3,3.8,13.2,10,17.7c6.2,4.5,13.2,6.7,21.2,6.7c12.6,0,22.2-4,28.8-11.9l12.1,13.2c-10.9,11.2-25,16.8-42.4,16.8c-14.1,0-26.2-4.7-36.1-14.1c-9.9-9.4-14.9-22-14.9-37.9c0-15.8,5-28.4,15.1-37.8c10.1-9.3,22-14,35.7-14c13.7,0,25.3,4.1,34.9,12.4c9.6,8.3,14.4,19.7,14.4,34.2V301z M241.3,284.4h57.7c0-8.5-2.6-15-7.9-19.5s-11.8-6.8-19.6-6.8s-14.7,2.4-20.9,7.1C244.4,269.9,241.3,276.3,241.3,284.4z')
                    path.st1(d='M329.7,270.6c0-8.5,3.6-15.7,10.7-21.6c7.2-5.9,16.6-8.8,28.2-8.8s20.9,2.9,27.8,8.6c6.9,5.8,10.5,13.6,11,23.6h-21.3c-0.4-5-2.1-8.9-5.2-11.6c-3.1-2.8-7.4-4.2-13-4.2c-5.6,0-10,1.2-13.1,3.7c-3.2,2.5-4.7,5.8-4.7,9.8c0,4.1,2,7.3,6,9.6c4,2.3,8.9,4,14.7,5.1c5.8,1.1,11.5,2.4,17.3,4c5.8,1.6,10.6,4.5,14.7,8.6c4,4.2,6,9.8,6,16.8c0,8.7-3.7,15.8-11,21.3c-7.3,5.5-16.8,8.2-28.3,8.2c-11.5,0-20.9-2.8-28-8.4c-7.2-5.6-11.1-13.5-11.8-23.8H351c0.4,5,2.2,8.9,5.5,11.6c3.3,2.8,7.7,4.2,13.4,4.2s10.1-1.2,13.5-3.7c3.3-2.5,5-5.8,5-9.9c0-4.1-2-7.3-6-9.6c-4-2.3-8.9-4-14.7-5.2c-5.8-1.2-11.5-2.5-17.3-4c-5.8-1.5-10.6-4.3-14.7-8.3S329.7,277.3,329.7,270.6z')
                    path.st0(d='M447.1,342.1h-21.2V201.7h21.2v82.5l40.9-42.8h27.3L477,281.4l41.1,60.8h-25.7L462.4,298l-15.3,15.5V342.1z')
                    path.st0(d='M607.8,328.6c-10.1,10-22.7,15-37.9,15s-27.8-5-37.9-15c-10.1-10-15.1-22.3-15.1-36.8c0-14.5,5-26.8,15.1-36.8c10.1-10,22.7-15,37.9-15s27.8,5,37.9,15c10.1,10,15.1,22.3,15.1,36.8C622.9,306.3,617.8,318.6,607.8,328.6z M547.1,315.5c6,6.1,13.6,9.2,22.8,9.2c9.2,0,16.8-3.1,22.8-9.2c6-6.1,9-14,9-23.8c0-9.7-3-17.6-9-23.8c-6-6.1-13.6-9.2-22.8-9.2c-9.2,0-16.8,3.1-22.8,9.2c-6,6.1-9,14-9,23.8C538.1,301.5,541.1,309.4,547.1,315.5z')
                    path.st0(d='M647.1,329.2c-9.5-9.6-14.2-22.2-14.2-37.9c0-15.6,4.9-28.1,14.6-37.5c9.7-9.3,21.3-14,34.7-14s24.3,5.7,32.5,17v-55.3h21.2v140.4h-21.2V327c-7.8,11.1-19.2,16.7-34.3,16.7C667.7,343.6,656.6,338.8,647.1,329.2z M654.1,292.2c0,9.7,3.1,17.5,9.3,23.6c6.2,6.1,13.4,9.1,21.8,9.1c8.3,0,15.4-3.1,21.2-9.2c5.8-6.1,8.7-14,8.7-23.6c0-9.6-2.9-17.6-8.7-24c-5.8-6.4-12.9-9.7-21.4-9.7c-8.5,0-15.7,3.2-21.8,9.7C657.1,274.6,654.1,282.6,654.1,292.2z')
                    path.st0(d='M852.7,301h-78.9c0.5,7.3,3.8,13.2,10,17.7c6.2,4.5,13.2,6.7,21.2,6.7c12.6,0,22.2-4,28.8-11.9l12.1,13.2c-10.9,11.2-25,16.8-42.4,16.8c-14.1,0-26.2-4.7-36.1-14.1c-9.9-9.4-14.9-22-14.9-37.9c0-15.8,5-28.4,15.1-37.8c10.1-9.3,22-14,35.7-14c13.7,0,25.3,4.1,34.9,12.4c9.6,8.3,14.4,19.7,14.4,34.2V301z M773.7,284.4h57.7c0-8.5-2.6-15-7.9-19.5c-5.3-4.5-11.8-6.8-19.6-6.8s-14.7,2.4-20.9,7.1C776.8,269.9,773.7,276.3,773.7,284.4z')
                    path.st2(d='M868.5,338.8c-3.2-3.2-4.8-7.2-4.8-11.8c0-4.7,1.6-8.6,4.8-11.8c3.2-3.2,7.2-4.8,11.8-4.8c4.7,0,8.6,1.6,11.8,4.8c3.2,3.2,4.8,7.2,4.8,11.8c0,4.7-1.6,8.6-4.8,11.8c-3.2,3.2-7.2,4.8-11.8,4.8C875.6,343.6,871.7,342,868.5,338.8z')
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
.st0{stroke:currentColor;stroke-width:4;stroke-miterlimit:10;}
.st1{stroke:currentColor;stroke-width:5;stroke-miterlimit:10;}
.st2{}
</style>
