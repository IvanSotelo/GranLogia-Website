import Smooth from './module'
import classes from 'dom-classes'

class ParallaxHistory extends Smooth {
  constructor (opt = {}) {
    super(opt)
    this.dom.section = opt.section
    this.items = opt.items || null
    this.aside = opt.aside || null
    this.isMobile = window.innerWidth <= 768
    this.chap = opt.chap || null
    this.getchap = opt.getchap || null
  }

  resize () {
    super.resize()
    var t = 0
    var i = 0

    this.isMobile = window.innerWidth <= 768
    this.chap()
    if (this.isMobile) {
      Array.prototype.slice.call(this.items, 0).forEach((t) => {
        i += t.getBoundingClientRect().height
      })
      this.vars.bounding = i - window.innerHeight / 2
    } else {
      Array.prototype.slice.call(this.items, 0).forEach((e) => {
        var i = parseInt(window.getComputedStyle(e).getPropertyValue('margin-right').replace('px', ''))
        t += e.getBoundingClientRect().width
        t += i
      })
      this.vars.bounding = t - window.innerWidth / 2
    }
  }

  currentValue () {
    return this.vars.current
  }

  run () {
    super.run()
    if (this.isMobile) {
      var t = Math.abs(this.vars.current.toFixed(3)) + window.innerWidth
      this.getchap().forEach((e) => {
        var i = this.dom.listener.querySelector('.mobile-' + e.title)
        var n = this.dom.listener.querySelector('.mobile-' + e.title)
        if (e.topPosition < t && e.bottomPosition > t) {
          classes.add(i, 'active')
          classes.add(n, 'active')
        } else {
          classes.remove(i, 'active')
          classes.remove(n, 'active')
        }
      })
    } else {
      var i = window.innerWidth - this.aside.getBoundingClientRect().width
      var n = Math.abs(this.vars.current.toFixed(3)) + window.innerWidth - i
      this.getchap().forEach((t) => {
        var e = this.dom.listener.querySelector('.side-' + t.title)
        var i = this.dom.listener.querySelector('.main-' + t.title)
        if (t.leftPosition < n && t.rightPosition > n) {
          classes.add(e, 'active')
          classes.add(i, 'active')
        } else {
          classes.remove(e, 'active')
          classes.remove(i, 'active')
        }
      })
    }
    this.isMobile ? this.dom.section.style[this.prefix] = 'translate3d(0,' + -this.vars.current.toFixed(3) + 'px,0)' : this.dom.section.style[this.prefix] = 'translate3d(' + -this.vars.current.toFixed(3) + 'px,0,0)'
  }

  destroy () {
    super.destroy()
  }
}
export default ParallaxHistory
