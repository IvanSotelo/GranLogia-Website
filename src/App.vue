<template lang="pug">
#app(v-bind:class="[isLoading ? 'is-loading' : 'is-loaded' , routeName]")
  navigation
  SiteMenu
  FooterView
  router-view(v-cloak, v-if="!isLoading")
  loader(v-if="isLoading")
</template>

<script>
import Loader from '@/loader/Loader'
import Navigation from '@/components/Navigation'
import FooterView from '@/components/FooterView'
import SiteMenu from '@/components/SiteMenu'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'granlogia-website',
  metaInfo: {
    titleTemplate: 'Respetable Logia Simbólica Paquime 84 | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: "Respetable Logia Simbólica Paquime - 84 jurisdiccionada a la Muy Respetable Gran Logia 'Cosmos' del Estado de Chihuahua." }
    ]
  },
  components: {
    Loader,
    Navigation,
    FooterView,
    SiteMenu
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'routeName'
    ])
  },
  methods: {
    ...mapActions([
      'DEVICE_SIZE'
    ])
  },
  updated: function () {
    let isMobile = window.innerWidth <= 768
    this.DEVICE_SIZE(isMobile)
  }
}
</script>
<style lang="scss">
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent
  }

  ul {
      list-style-type: none
  }

  a,
  p {
      font: .6875rem/1.563rem NewBaskervilleExpOdC;
      letter-spacing: .2vw
  }

  h2 {
      font-weight: 100
  }

  a,
  h1,
  h2,
  h3,
  h4,
  p {
      color: #fff
  }

  html {
      font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      font: 100%/1.5 NewBaskervilleExpOdC;

      @media only screen and (max-width:768px) {
        font: 80%/1.5 NewBaskervilleExpOdC
      }

      @media only screen and (min-width:769px) and (max-width:1024px) {
        font: 90%/1.5 NewBaskervilleExpOdC
      }

      @media only screen and (min-width:1025px) and (max-width:1128px) {
        font: 95%/1.5 NewBaskervilleExpOdC
      }
  }

  body,
  html {
      overflow: hidden;
      background: $background-color;
  }

  body {
      margin: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
      display: block
  }

  audio,
  canvas,
  progress,
  video {
      display: inline-block;
      vertical-align: baseline
  }

  audio:not([controls]) {
      display: none;
      height: 0
  }

  [hidden],
  template {
      display: none
  }

  a {
    color: #fff;
    text-decoration: none;
    background: 0 0;

    &:hover {
      color: #a1907f
    }

    &:active, &:hover {
      outline: 0
    }
  }

  abbr[title] {
      border-bottom: 1px dotted
  }

  b,
  strong {
      font-weight: 700
  }

  dfn {
      font-style: italic
  }

  mark {
      background: #ff0;
      color: #000
  }

  small {
      font-size: 80%
  }

  sub,
  sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline
  }

  sup {
      top: -.5em
  }

  sub {
      bottom: -.25em
  }

  img {
      border: 0;

      .scale-with-grid {
          width: 100%;
          height: auto;
          display: block
      }
  }

  svg:not(:root) {
      overflow: hidden
  }

  hr {
      height: 0
  }

  pre {
      overflow: auto
  }

  code,
  kbd,
  pre,
  samp {
      font-family: monospace, monospace;
      font-size: 1em
  }

  button,
  input,
  optgroup,
  select,
  textarea {
      color: inherit;
      font: inherit;
      margin: 0
  }

  button {
      overflow: visible
  }

  button,
  select {
      text-transform: none
  }

  button,
  html input[type=button],
  input[type=reset],
  input[type=submit] {
      -webkit-appearance: button;
      cursor: pointer
  }

  button[disabled],
  html input[disabled] {
      cursor: default
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
      border: 0;
      padding: 0
  }

  input {
      line-height: normal
  }

  input[type=checkbox],
  input[type=radio] {
      box-sizing: border-box;
      padding: 0
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      height: auto
  }

  input[type=search] {
      -webkit-appearance: textfield;
      box-sizing: content-box
  }

  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration {
      -webkit-appearance: none
  }

  fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: .35em .625em .75em
  }

  legend {
      border: 0;
      padding: 0
  }

  textarea {
      overflow: auto
  }

  optgroup {
      font-weight: 700
  }

  table {
      border-collapse: collapse;
      border-spacing: 0
  }

  td,
  th {
      padding: 0
  }

  .unselectable {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none
  }


  main {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 100%;
      height: 100%;
      will-change: transform;
      .page {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 100%;
        height: 100%;
        opacity: 0;
        visibility: hidden;
        text-align: center;
        will-change: transform
      }
  }

  .container {
    margin-right: auto;
    margin-left: auto;

    @media only screen and (max-width:768px) {
      width: 49rem;
    }

    @media only screen and (min-width:769px) and (max-width:1024px) {
      width: 65rem
    }

    @media only screen and (min-width:1025px) and (max-width:1128px) {
      width: 76rem
    }

  }

  .row--float {
      zoom: 1;

      &:after{
        clear: both
      }

      &:after,
      &:before {
          content: '\0020';
          display: block;
          overflow: hidden;
          visibility: hidden;
          width: 0;
          height: 0
      }
  }

  .device-content {
      position: relative;
      width: 95%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      @media only screen and (max-width:768px) {
          width: 85%
      }
      @media only screen and (min-width:769px) and (max-width:1024px) {
          width: 95%
      }
  }

  .column {
      display: block;
      float: left
  }

  .col-1 {
      width: 8.33333333%
  }

  .col-2 {
      width: 16.66666667%
  }

  .col-2__offset {
      width: 20%
  }

  .col-3 {
      width: 25%
  }

  .col-4 {
      width: 33.33333333%
  }

  .col-5 {
      width: 41.66666667%
  }

  .col-6 {
      width: 50%
  }

  .col-7 {
      width: 58.33333333%
  }

  .col-8 {
      width: 66.66666667%
  }

  .col-9 {
      width: 75%
  }

  .col-10 {
      width: 83.33333333%
  }

  .col-11 {
      width: 91.66666667%
  }

  .col-12 {
      width: 100%
  }


  .container-fluid {
      margin-right: auto;
      margin-left: auto;
      padding-right: 2rem;
      padding-left: 2rem
  }

  .row {
      box-sizing: border-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
  }

  .row.reverse:not(.reverse--not-m) {
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse
  }

  // @include breakpoint(medium) {
  //     flex-direction: row-reverse
  // }

  .col-xs,
  .col-xs-1,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-offset-0,
  .col-xs-offset-1,
  .col-xs-offset-10,
  .col-xs-offset-11,
  .col-xs-offset-12,
  .col-xs-offset-2,
  .col-xs-offset-3,
  .col-xs-offset-4,
  .col-xs-offset-5,
  .col-xs-offset-6,
  .col-xs-offset-7,
  .col-xs-offset-8,
  .col-xs-offset-9 {
      box-sizing: border-box;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto
  }

  .col-xs {
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%
  }

  .col-xs-1 {
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%
  }

  .col-xs-2 {
      -ms-flex-preferred-size: 16.666%;
      flex-basis: 16.666%;
      max-width: 16.666%
  }

  .col-xs-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%
  }

  .col-xs-4 {
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%
  }

  .col-xs-5 {
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%
  }

  .col-xs-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%
  }

  .col-xs-7 {
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%
  }

  .col-xs-8 {
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%
  }

  .col-xs-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%
  }

  .col-xs-10 {
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%
  }

  .col-xs-11 {
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%
  }

  .col-xs-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%
  }

  .col-xs-offset-0 {
      margin-left: 0
  }

  .col-xs-offset-1 {
      margin-left: 8.333%
  }

  .col-xs-offset-2 {
      margin-left: 16.666%
  }

  .col-xs-offset-3 {
      margin-left: 25%
  }

  .col-xs-offset-4 {
      margin-left: 33.333%
  }

  .col-xs-offset-5 {
      margin-left: 41.667%
  }

  .col-xs-offset-6 {
      margin-left: 50%
  }

  .col-xs-offset-7 {
      margin-left: 58.333%
  }

  .col-xs-offset-8 {
      margin-left: 66.667%
  }

  .col-xs-offset-9 {
      margin-left: 75%
  }

  .col-xs-offset-10 {
      margin-left: 83.333%
  }

  .col-xs-offset-11 {
      margin-left: 91.667%
  }

  .start-xs {
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start
  }

  .center-xs {
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center
  }

  .end-xs {
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end
  }

  .top-xs {
      -ms-flex-align: start;
      align-items: flex-start
  }

  .middle-xs {
      -ms-flex-align: center;
      align-items: center
  }

  .bottom-xs {
      -ms-flex-align: end;
      align-items: flex-end
  }

  .around-xs {
      -ms-flex-pack: distribute;
      justify-content: space-around
  }

  .between-xs {
      -ms-flex-pack: justify;
      justify-content: space-between
  }

  .first-xs {
      -ms-flex-order: -1;
      order: -1
  }

  .last-xs {
      -ms-flex-order: 1;
      order: 1
  }

  .not-mobile {
    @media only screen and (max-width:768px) {
      display: none
    }
  }

  .not-tablet {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      display: none
    }
  }

  .not-desktop {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      display: none
    }
  }

  .col-sm,
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-offset-0,
  .col-sm-offset-1,
  .col-sm-offset-10,
  .col-sm-offset-11,
  .col-sm-offset-12,
  .col-sm-offset-2,
  .col-sm-offset-3,
  .col-sm-offset-4,
  .col-sm-offset-5,
  .col-sm-offset-6,
  .col-sm-offset-7,
  .col-sm-offset-8,
  .col-sm-offset-9 {
    @media only screen and (max-width:768px) {
      box-sizing: border-box;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto
    }
  }

  .col-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%
    }
  }
  .col-sm-1 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%
    }
  }
  .col-sm-2 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 16.666%;
      flex-basis: 16.666%;
      max-width: 16.666%
    }
  }
  .col-sm-3 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%
    }
  }
  .col-sm-4 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%
    }
  }
  .col-sm-5 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%
    }
  }
  .col-sm-6 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%
    }
  }
  .col-sm-7 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%
    }
  }
  .col-sm-8 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%
    }
  }
  .col-sm-9 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%
    }
  }
  .col-sm-10 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%
    }
  }
  .col-sm-11 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%
    }
  }
  .col-sm-12 {
    @media only screen and (max-width:768px) {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%
    }
  }
  .col-sm-offset-0 {
    @media only screen and (max-width:768px) {
      margin-left: 0
    }
  }
  .col-sm-offset-1 {
    @media only screen and (max-width:768px) {
      margin-left: 8.333%
    }
  }
  .col-sm-offset-2 {
    @media only screen and (max-width:768px) {
      margin-left: 16.666%
    }
  }
  .col-sm-offset-3 {
    @media only screen and (max-width:768px) {
      margin-left: 25%
    }
  }
  .col-sm-offset-4 {
    @media only screen and (max-width:768px) {
      margin-left: 33.333%
    }
  }
  .col-sm-offset-5 {
    @media only screen and (max-width:768px) {
      margin-left: 41.667%
    }
  }
  .col-sm-offset-6 {
    @media only screen and (max-width:768px) {
      margin-left: 50%
    }
  }
  .col-sm-offset-7 {
    @media only screen and (max-width:768px) {
      margin-left: 58.333%
    }
  }
  .col-sm-offset-8 {
    @media only screen and (max-width:768px) {
      margin-left: 66.667%
    }
  }
  .col-sm-offset-9 {
    @media only screen and (max-width:768px) {
      margin-left: 75%
    }
  }
  .col-sm-offset-10 {
    @media only screen and (max-width:768px) {
      margin-left: 83.333%
    }
  }
  .col-sm-offset-11 {
    @media only screen and (max-width:768px) {
      margin-left: 91.667%
    }
  }
  .start-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start
    }
  }
  .center-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center
    }
  }
  .end-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end
    }
  }
  .top-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-align: start;
      align-items: flex-start
    }
  }
  .middle-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-align: center;
      align-items: center
    }
  }
  .bottom-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-align: end;
      align-items: flex-end
    }
  }
  .around-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-pack: distribute;
      justify-content: space-around
    }
  }
  .between-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-pack: justify;
      justify-content: space-between
    }
  }
  .first-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-order: -1;
      order: -1
    }
  }
  .last-sm {
    @media only screen and (max-width:768px) {
      -ms-flex-order: 1;
      order: 1
    }
  }

  .col-md,
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-offset-0,
  .col-md-offset-1,
  .col-md-offset-10,
  .col-md-offset-11,
  .col-md-offset-12,
  .col-md-offset-2,
  .col-md-offset-3,
  .col-md-offset-4,
  .col-md-offset-5,
  .col-md-offset-6,
  .col-md-offset-7,
  .col-md-offset-8,
  .col-md-offset-9 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      box-sizing: border-box;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto
    }
  }

  .col-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%
    }
  }
  .col-md-1 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%
    }
  }
  .col-md-2 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 16.666%;
      flex-basis: 16.666%;
      max-width: 16.666%
    }
  }
  .col-md-3 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%
    }
  }
  .col-md-4 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%
    }
  }
  .col-md-5 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%
    }
  }
  .col-md-6 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%
    }
  }
  .col-md-7 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%
    }
  }
  .col-md-8 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%
    }
  }
  .col-md-9 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%
    }
  }
  .col-md-10 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%
    }
  }
  .col-md-11 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%
    }
  }
  .col-md-12 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%
    }
  }
  .col-md-auto {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
      max-width: auto
    }
  }
  .col-md-offset-0 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 0
    }
  }
  .col-md-offset-1 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 8.333%
    }
  }
  .col-md-offset-2 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 16.666%
    }
  }
  .col-md-offset-3 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 25%
    }
  }
  .col-md-offset-4 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 33.333%
    }
  }
  .col-md-offset-5 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 41.667%
    }
  }
  .col-md-offset-6 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 50%
    }
  }
  .col-md-offset-7 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 58.333%
    }
  }
  .col-md-offset-8 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 66.667%
    }
  }
  .col-md-offset-9 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 75%
    }
  }
  .col-md-offset-10 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 83.333%
    }
  }
  .col-md-offset-11 {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      margin-left: 91.667%
    }
  }
  .start-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start
    }
  }
  .center-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center
    }
  }
  .end-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end
    }
  }
  .top-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-align: start;
      align-items: flex-start
    }
  }
  .middle-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-align: center;
      align-items: center
    }
  }
  .bottom-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-align: end;
      align-items: flex-end
    }
  }
  .around-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-pack: distribute;
      justify-content: space-around
    }
  }
  .between-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-pack: justify;
      justify-content: space-between
    }
  }
  .first-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-order: -1;
      order: -1
    }
  }
  .last-md {
    @media only screen and (min-width:769px) and (max-width:1024px) {
      -ms-flex-order: 1;
      order: 1
    }
  }

  .col-lg,
  .col-lg-1,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-offset-0,
  .col-lg-offset-1,
  .col-lg-offset-10,
  .col-lg-offset-11,
  .col-lg-offset-12,
  .col-lg-offset-2,
  .col-lg-offset-3,
  .col-lg-offset-4,
  .col-lg-offset-5,
  .col-lg-offset-6,
  .col-lg-offset-7,
  .col-lg-offset-8,
  .col-lg-offset-9 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      box-sizing: border-box;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto
    }
  }
  .col-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%
    }
  }
  .col-lg-1 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%
    }
  }
  .col-lg-2 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 16.666%;
      flex-basis: 16.666%;
      max-width: 16.666%
    }
  }
  .col-lg-3 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%
    }
  }
  .col-lg-4 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%
    }
  }
  .col-lg-5 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%
    }
  }
  .col-lg-6 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%
    }
  }
  .col-lg-7 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%
    }
  }
  .col-lg-8 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%
    }
  }
  .col-lg-9 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%
    }
  }
  .col-lg-10 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%
    }
  }
  .col-lg-11 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%
    }
  }
  .col-lg-12 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%
    }
  }
  .col-lg-offset-0 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 0
    }
  }
  .col-lg-offset-1 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 8.333%
    }
  }
  .col-lg-offset-2 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 16.666%
    }
  }
  .col-lg-offset-3 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 25%
    }
  }
  .col-lg-offset-4 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 33.333%
    }
  }
  .col-lg-offset-5 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 41.667%
    }
  }
  .col-lg-offset-6 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 50%
    }
  }
  .col-lg-offset-7 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 58.333%
    }
  }
  .col-lg-offset-8 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 66.667%
    }
  }
  .col-lg-offset-9 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 75%
    }
  }
  .col-lg-offset-10 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 83.333%
    }
  }
  .col-lg-offset-11 {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      margin-left: 91.667%
    }
  }
  .start-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start
    }
  }
  .center-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center
    }
  }
  .end-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end
    }
  }
  .top-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-align: start;
      align-items: flex-start
    }
  }
  .middle-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-align: center;
      align-items: center
    }
  }
  .bottom-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-align: end;
      align-items: flex-end
    }
  }
  .around-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-pack: distribute;
      justify-content: space-around
    }
  }
  .between-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-pack: justify;
      justify-content: space-between
    }
  }
  .first-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-order: -1;
      order: -1
    }
  }
  .last-lg {
    @media only screen and (min-width:1025px) and (max-width:1128px) {
      -ms-flex-order: 1;
      order: 1
    }
  }

  @keyframes spin {
      from {
          transform: rotate(0)
      }
      to {
          transform: rotate(360deg)
      }
  }

  @keyframes whiteToBlack {
      0% {
          color: #fff
      }
      100% {
          color: #000
      }
  }

  @keyframes blackToWhite {
      0% {
          color: #000
      }
      100% {
          color: #fff
      }
  }

  @keyframes fadeIn {
      0% {
          opacity: 0
      }
      100% {
          opacity: 1
      }
  }

  @keyframes fadeOut {
      0% {
          opacity: 1
      }
      100% {
          opacity: 0
      }
  }
</style>
