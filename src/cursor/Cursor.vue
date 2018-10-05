<template lang='pug'>
  .s-cursor
    .c-pointer
      svg(xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20')
        circle(cx='10' cy='10' r='8' style='stroke: rgb(161, 144, 127);')
</template>

<script>
import {TweenLite} from 'gsap'

export default {
  name: 'SCursor',
  methods: {
    onMouseMove (t) {
      TweenLite.set(this.$el, {
        x: t.clientX,
        y: t.clientY
      })
      //   TweenLite.to(this.$el, 0.5, {
      //     scale: 0.5
      //   })
      // }
    },
    onMouseOver (t) {
      TweenLite.to(this.$el.querySelector('.c-pointer'), 0.1, {
        scale: 1.6
      })
    },
    onMouseLeave (t) {
      TweenLite.to(this.$el.querySelector('.c-pointer'), 0.1, {
        scale: 1
      })
    }
  },
  mounted: function () {
    var t = this
    window.addEventListener('mousemove', event => this.onMouseMove(event))
    document.querySelectorAll('a[href]').forEach((e) => {
      e.addEventListener('mouseover', event => t.onMouseOver(event))
      e.addEventListener('mouseleave', event => t.onMouseLeave(event))
    })
  }
}
</script>

<style lang='scss'>
body{
  cursor: none!important;
}
a{
  &:hover{
    cursor: none!important;
  }
}
.s-cursor{
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  .c-pointer{
    height: 1em;
    opacity: 1;
    position: absolute;
    -webkit-transform: translateZ(0) scale(1);
    -moz-transform: translateZ(0) scale(1);
    -ms-transform: translateZ(0) scale(1);
    -o-transform: translateZ(0) scale(1);
    transform: translateZ(0) scale(1);
    -webkit-transition: -webkit-transform .75s cubic-bezier(.175,.885,.32,1.275);
    -moz-transition: -moz-transform .75s cubic-bezier(.175,.885,.32,1.275);
    -o-transition: -o-transform .75s cubic-bezier(.175,.885,.32,1.275);
    transition: transform .75s cubic-bezier(.175,.885,.32,1.275);
    -webkit-transition-property: opacity,-webkit-transform;
    -moz-transition-property: opacity,-moz-transform;
    -o-transition-property: opacity,-o-transform;
    transition-property: opacity,transform;
    width: 1em;
    svg{
      display: block;
      fill: none;
      stroke: #a1907f;
      stroke-width: 3;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
