<template lang="pug">
main(role="main")
  section#page-history.page.page-history
    .history
      aside.history__aside(v-on:mouseenter="isOpen = true" v-on:mouseleave="isOpen = false" v-bind:class="[isOpen ? 'active' : '']")
        .history__aside-container
          .history__aside-filter
            p.history__aside-filter--title Capitulos
            ul
              li(v-for="(chap, i) in chapters" :key="i" :class="'main-' + chap.title" @click="slideToChapter(i)")
                p {{ chap.text }}
        .history__aside__trigger-wrapper
          div
            p.side-childhood I
            p.side-imperial-academy-of-arts II
      .device-content
        .history__timeline
          .history__timeline-wrapper
            .history__item.childhood
              router-link(to="/history/1817")
                .space
                  .history__item-text
                    p.history__item-text--date 1817
                    p.history__item-text--title Born
                    p.history__item-text--text Born on July 29th in Feodosia, from parents Constantine and Ripsime Aivazovsky
                  .history__item-group
                    .history__item-image--small
                      img(alt="Konstantin G. Aivazovsky" src="https://d1rnu9exaqm00k.cloudfront.net/life/timeline/1817-1.jpg")
                      p Konstantin G. Aivazovsky
                      p 1771- 1841
                    .history__item-image--small.left
                      img(alt="Ripsime Aivazovsky" src="https://d1rnu9exaqm00k.cloudfront.net/life/timeline/1817-2.jpg")
                      p Ripsime Aivazovsky
                      p 1771- 1860
            .history__item
              router-link(to="/history/1831")
                .history__item-wrapper.space
                  .history__item-text
                    p.history__item-text--date 1817
                    p.history__item-text--title Born
                    p.history__item-text--text Born on July 29th in Feodosia, from parents Constantine and Ripsime Aivazovsky
                  img.history__item-image(alt="Konstantin G. Aivazovsky" src="https://d1rnu9exaqm00k.cloudfront.net/life/timeline/1830-1.jpg")
            .history__item
              .history__item-wrapper.space
                .history__item-aside--left
                  span
                    p M.N. Vorobiev
                    p 1787 - 1855
                  img(src="https://d1rnu9exaqm00k.cloudfront.net/life/timeline/1833-2.jpg" alt="M.N. Vorobiev")
            .history__item
              router-link(to="/history/1831")
                .history__item-wrapper.space
                  .history__item-text
                    p.history__item-text--date 1817
                    p.history__item-text--title Born
                    p.history__item-text--text Born on July 29th in Feodosia, from parents Constantine and Ripsime Aivazovsky
                  img.history__item-image(alt="Konstantin G. Aivazovsky" src="https://d1rnu9exaqm00k.cloudfront.net/life/timeline/1830-1.jpg")
            .history__item
              .history__item-wrapper.space
                .history__item-aside--left
                  span
                    p M.N. Vorobiev
                    p 1787 - 1855
                  img(src="https://d1rnu9exaqm00k.cloudfront.net/life/timeline/1833-2.jpg" alt="M.N. Vorobiev")
            .history__item.imperial-academy-of-arts.margin-0
              router-link(to="/history/1831")
                .history__item-wrapper.space
                  .history__item-text
                    p.history__item-text--date 1817
                    p.history__item-text--title Born
                    p.history__item-text--text Born on July 29th in Feodosia, from parents Constantine and Ripsime Aivazovsky
                  .history__item-aside--right.bottom-10
                    img(src="https://d1rnu9exaqm00k.cloudfront.net/life/timeline/1834-1.jpg" alt="Nicholas I")
                    span
                      p M.N. Vorobiev
                      p 1787 - 1855
            .history__item
              router-link(to="/history/1831")
                .history__item-wrapper.space
                  .history__item-text
                    p.history__item-text--date 1817
                    p.history__item-text--title Born
                    p.history__item-text--text Born on July 29th in Feodosia, from parents Constantine and Ripsime Aivazovsky
                  img.history__item-image(alt="Konstantin G. Aivazovsky" src="https://d1rnu9exaqm00k.cloudfront.net/life/timeline/1830-1.jpg")
            .history__item.margin-0
              .history__item-wrapper.space
                .history__item-aside--left
                  span
                    p M.N. Vorobiev
                    p 1787 - 1855
                  img(src="https://d1rnu9exaqm00k.cloudfront.net/life/timeline/1833-2.jpg" alt="M.N. Vorobiev")
      .history__mobile
        ul
          li.history__mobile-chapter(v-for="(chap, i) in chapters" :key="i" :class="'mobile-' + chap.title" @click="slideToChapter(i)")
            p {{ chap.mobile }}
</template>

<script>
import {TweenLite, Expo, TimelineMax} from 'gsap'
import ParallaxHistory from '../smooth/history'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'History',
  metaInfo: {
    title: 'Historia'
  },
  data () {
    return {
      isOpen: false,
      smooth: null,
      chapters: [{
        title: 'childhood',
        text: 'Childhood',
        mobile: 'I'
      }, {
        title: 'imperial-academy-of-arts',
        text: 'Imperial academy of arts',
        mobile: 'II'
      }]
    }
  },
  mounted () {
    this.animateIn()
    this.changeRoute(this.$route.name)
    this.addSmooth()
    this.setChapterPositions()
  },
  methods: {
    ...mapActions({
      changeRoute: 'ROUTE_NAME'
    }),
    animateIn () {
      var i = this
      const a = new TimelineMax({
        onComplete: function () {
          if (i.isMobile) {
            TweenLite.to(i.$el.querySelector('.history__mobile'), 1.5, {
              autoAlpha: 1,
              y: '0%',
              ease: Expo.easeInOut
            })
          }
          i.slideToChapter(0)
        }
      })
      a.to(this.$el.querySelector('.page'), 1, {
        autoAlpha: 1,
        ease: Expo.easeInOut
      })
      a.from(this.$el.querySelector('.history__timeline'), this.isMobile ? 1.3 : 1.2, {
        autoAlpha: 0,
        force3D: false,
        ease: Expo.easeInOut,
        delay: this.isMobile ? 0.3 : 0
      })
      a.from(this.$el.querySelector('.history__aside__trigger-wrapper'), 1, {
        x: '-100%',
        ease: Expo.easeInOut
      })
    },
    addSmooth () {
      this.smooth = new ParallaxHistory({
        native: false,
        vs: {
          mouseMultiplier: 0.4
        },
        section: this.$el.querySelector('.history__timeline-wrapper'),
        items: this.$el.querySelectorAll('.history__item'),
        aside: this.$el.querySelector('.history__aside__trigger-wrapper'),
        preload: false,
        chap: this.setChapterPositions,
        getchap: this.getChapterPosition,
        ease: this.isMobile ? 0.13 : 0.075
      })
      this.smooth.init()
    },
    getChapterPosition () {
      return this.chapters
    },
    setChapterPositions () {
      var t = this
      this.chapters.map((e, i) => {
        var n = ++i
        if (t.chapters.length !== n) {
          e.leftPosition = t.$el.querySelector('.' + e.title).offsetLeft
          e.rightPosition = t.$el.querySelector('.' + t.chapters[n].title).offsetLeft
          e.topPosition = t.$el.querySelector('.' + e.title).offsetTop
          e.bottomPosition = t.$el.querySelector('.' + t.chapters[n].title).offsetTop
        } else {
          e.leftPosition = t.$el.querySelector('.' + e.title).offsetLeft
          e.rightPosition = t.$el.querySelector('.' + e.title).offsetLeft + 5 * t.$el.querySelector('.' + e.title).getBoundingClientRect().width
          e.topPosition = t.$el.querySelector('.' + e.title).offsetTop
          e.bottomPosition = t.$el.querySelector('.' + e.title).offsetTop + 5 * t.$el.querySelector('.' + e.title).offsetHeight
        }
      })
      return this.chapters
    },
    slideToChapter (t) {
      this.setChapterPositions()
      var i = this.isMobile ? this.chapters[t].topPosition : this.chapters[t].leftPosition
      this.smooth.scrollTo(i)
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
<style lang="scss" scoped>
.page-history{
  background: #f9f9f9;
  svg{
    position: absolute;
    pointer-events: none;
  }
  .history{
    p{
      color: #000;
    }
    .history__aside {
        position: fixed;
        width: 30vw;
        height: 100vw;
        z-index: 2;
        width: 25vw;
        transform: translateX(-80%);
        transition: transform 1s cubic-bezier(.19, 1, .22, 1);
        .history__aside-container {
            position: absolute;
            left: 0;
            width: 80%;
            background: #000;
            height: 100vh;
            text-align: left;
            p {
                color: #fff;
            }
            .history__aside-filter {
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                .history__aside-filter--title {
                    text-transform: uppercase;
                    padding: 1vw 0;
                    padding: 1vw 2.5vw;
                }
                ul li {
                    padding: .3vw 2.5vw;
                    position: relative;
                    transition: background .7s cubic-bezier(.19, 1, .22, 1);
                    cursor: pointer
                }
                ul li p {
                    display: inline-block;
                    letter-spacing: .3px;
                    transition: color 1s cubic-bezier(.19, 1, .22, 1);
                    pointer-events: none;
                    font-family: PTSerifPro-Book
                }
                ul li:hover p {
                    color: #b5a492
                }
                ul li.active p {
                    color: #b5a492
                }
            }
        }
        .history__aside__trigger-wrapper {
            position: absolute;
            height: 100vh;
            width: 20%;
            padding: 0 1vw;
            background: #f9f9f9;
            right: 0;
            cursor: pointer;
            div {
                position: relative;
                top: 50%;
                transform: translateY(-39%);
                p {
                    transform: rotate(0) translateX(0) translateY(0);
                    transform-origin: 50% 100%;
                    position: relative;
                    top: 32%;
                    padding: .4vw 0;
                    color: #000;
                    font-weight: 600
                }
                p.active {
                    color: #b5a492
                }
            }
            @media only screen and (max-width:768px) {
              display: none;
            }
        }
    }
    .history__aside.active {
        transform: translateX(0)
    }
    .history__timeline {
        height: 100vh;
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        transform: translateX(6%);
        .history__timeline-wrapper {
            white-space: nowrap;
            width: 100%;
            height: 70vh;
            text-align: left;
            position: relative;
            transform: translateZ(0);
            will-change: transform;
            -webkit-backface-visibility: hidden;
            -webkit-transform: translateZ(0);
            -moz-transform-style: flat;
            .history__item {
                width: 29%;
                display: inline-block;
                height: 100%;
                vertical-align: top;
                -moz-transform-style: flat;
                transform: translateZ(0);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                -ms-perspective: 1000;
                perspective: 1000;
                margin-right: 8vw;
                .history__item-wrapper {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    height: 100%;
                }
                .history__item-wrapper.space {
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }
                .history__item-wrapper.normal {
                    -ms-flex-pack: start;
                    justify-content: flex-start;
                }

                .history__item-wrapper.end {
                    -ms-flex-pack: end;
                    justify-content: flex-end;
                }

                .history__item-wrapper.center {
                    -ms-flex-pack: center;
                    justify-content: center;
                }

                .history__item-wrapper.bottom--20 {
                    padding-bottom: 20%;
                }

                .history__item-wrapper.bottom--30 {
                    padding-bottom: 30%;
                }

                .history__item-wrapper.bottom--40 {
                    padding-bottom: 40%;
                }

                .history__item-wrapper.bottom--50 {
                    padding-bottom: 50%;
                }
                .history__item-wrapper.bottom--0,
                .history__item-wrapper.bottom--20,
                .history__item-wrapper.bottom--30,
                .history__item-wrapper.bottom--40,
                .history__item-wrapper.bottom--50 {
                    -ms-flex-pack: end;
                    justify-content: flex-end;
                    @media only screen and (max-width:768px) {
                      padding-bottom: 0
                    }
                }
                .history__item-text--date,
                .history__item-text--text,
                .history__item-text--title {
                    letter-spacing: 0;
                    max-width: 20vw;
                    white-space: nowrap;
                    white-space: initial;
                    @media only screen and (max-width:768px) {
                      max-width: 100vw
                    }

                }
                .history__item-text--date {
                    font-size: 2.3vw;
                    font-family: NewBaskervilleC;
                    padding-bottom: 2.8vw;
                    transition: color .5s cubic-bezier(.19, 1, .22, 1);
                    color: #978268;
                    @media only screen and (max-width:768px) {
                        font-size: 8vw;
                        padding-bottom: 7vw
                    }
                }
                .history__item-text--title {
                    letter-spacing: 0;
                    font-size: 1.2vw;
                    font-style: italic;
                    font-family: "Playfair Display";
                    @media only screen and (max-width:768px) {
                      font-size: 4vw;
                      width: 100%!important
                    }
                }
                .history__item-text--text {
                    letter-spacing: 0;
                    line-height: 1.5;
                    padding: 1vw 0;
                    font-family: PTSerifPro-Book;
                    @media only screen and (max-width:768px) {
                      padding-bottom: 5vw
                    }
                }
                .history__item-image {
                    width: 100%;
                    object-fit: contain;
                    max-height: 40vh;
                    object-position: 0 0
                }
                .history__item-image.modified {
                  @media only screen and (max-width:768px) {
                    width: 100%!important;
                    height: auto!important
                  }
                }
                .history__item-image--small{
                  img {
                      width: 18vh
                  }
                  p {
                      letter-spacing: 0;
                      line-height: 1.3!important;
                      &:first-of-type {
                          color: #b09e89
                      }
                      &p:last-of-type {
                          line-height: 0
                      }
                  }
                }
                .history__item-image--small.left {
                    padding-left: 37%;
                    @media only screen and (max-width:768px) {
                      padding-left: 50%
                    }
                }
                .history__item-aside--bottom,
                .history__item-aside--left,
                .history__item-aside--right{
                  img{
                    @media only screen and (max-width:768px) {
                      height: 50vw!important
                    }
                  }
                  p{
                    &:first-of-type {
                        color: #b09e89
                    }
                  }
                }
                .history__item-aside--left {
                  span {
                      float: left;
                      text-align: right;
                      padding-right: 1vw;
                      @media only screen and (max-width:768px) {
                        padding-right: 6vw
                      }
                      p {
                        letter-spacing: 0;
                        line-height: 1.3!important;
                        @media only screen and (max-width:768px) {
                          text-align: left
                        }
                      }
                  }
                }
                .history__item-aside--right {
                  span {
                    position: relative;
                    left: 1vw;
                    @media only screen and (max-width:768px) {
                      left: 6vw
                    }
                    p {
                       letter-spacing: 0;
                       &:first-of-type {
                           overflow: hidden;
                           white-space: initial;
                           line-height: 1.3
                       }
                       &:last-of-type {
                           line-height: 1.6
                       }
                    }
                  }
                  img {
                      height: 24vw;
                      float: left
                  }
                }
                .history__item-aside--right.bottom-10 {
                  span {
                    top: 19vw
                  }
                }
                .history__item-aside--right {
                  span {
                    p {
                        letter-spacing: 0;
                        line-height: 1.3!important
                    }
                  }
                }
                .history__item-misc {
                  p {
                    letter-spacing: 0;
                    line-height: 2
                  }
                }
                a{
                  &:hover{
                    color: #978268
                  }
                }
                &:last-of-type {
                    padding-right: 16vw
                }
                @media only screen and (max-width:768px) {
                  width: 100%;
                  display: block;
                  height: auto;
                  padding-bottom: 15vw;
                  margin-right: 0
                }
            }
            .history__item.margin-0 {
                margin-right: 0
            }
            @media only screen and (max-width:768px) {
                white-space: normal
            }
        }
        @media only screen and (max-width:768px) {
          width: 80%;
          margin: 0 auto;
          left: 0;
          right: 0;
          transform: translateX(0)!important
        }
    }
    .history__mobile {
        position: fixed;
        bottom: 0;
        width: 100vw;
        background: #f9f9f9;
        height: auto;
        z-index: 1;
        display: none;
        @media only screen and (max-width:768px) {
          display: block;
          opacity: 0;
          transform: translateY(100%)
        }
        ul {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: row;
          flex-direction: row;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          .history__mobile-chapter {
              display: inline-block;
              padding: 6vw 0;
              width: 100%;
              position: relative;
              cursor: pointer;
              transition: all 1s cubic-bezier(.19, 1, .22, 1);
              &:before {
                  content: "";
                  background: #cec4bb;
                  position: absolute;
                  top: 0;
                  height: 1.4vw;
                  left: 0;
                  width: 100%;
                  display: block;
                  opacity: 0
              }
          }
          .active {
              background: #fff;
              &:before {
                  opacity: 1;
              }
          }
        }
        p {
            color: #3f3f3f;
            font-size: 4.5vw;
            pointer-events: none
        }
    }
  }
}
</style>
