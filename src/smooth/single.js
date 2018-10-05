import Smooth from './module'
import classes from 'dom-classes'

class Single extends Smooth {
  constructor (opt = {}) {
    super(opt)
    this.dom.section = opt.section
    this.single = opt.single || null
    this.boxInfo = opt.boxInfo || null
    this.boxCategory = opt.boxCategory || null
    this.map = opt.map || null
    this.chronology = opt.chronology || null
    this.items = opt.items || null
    this.count = 0
  }

  resize () {
    super.resize()
    let t = this.chronology ? this.dom.section.getBoundingClientRect().top : 0
    this.single ? (this.vars.bounding = this.dom.section.getBoundingClientRect().height - this.boxInfo.getBoundingClientRect().height - this.boxCategory.getBoundingClientRect().height) : (this.vars.bounding = this.dom.section.getBoundingClientRect().height - this.vars.height + t)
    this.map && (this.one_fourth = window.innerHeight / 4 * 2.55)
  }

  clamp (t, e, i) {
    return Math.max(e, Math.min(i, t))
  }

  siblings (t) {
    var e = (e) => {
      var i = []
      var n = t
      for (; n; n = n.previousElementSibling) i.push(n)
      return i
    }
    var i = (e) => {
      var i = []
      var n = t
      for (; n; n = n.nextElementSibling) i.push(n)
      return i
    }
    return e.concat(i)
  }

  run () {
    super.run()
    var t = this
    if (this.single) {
      var i = this.clamp(0, 1 - this.vars.current / (0.1 * this.vars.height), 1)
      this.boxInfo.style.opacity = i
      this.boxCategory.style.opacity = i
    }
    this.items && this.items.forEach((e) => {
      e.getBoundingClientRect().top < t.one_fourth ? !classes.has(e, 'visible') && classes.add(e, 'visible') : classes.has(e, 'visible') && classes.remove(e, 'visible')
      var i = Number(this.dom.listener.querySelector('.lodge__overlay-counter--current').innerHTML)
      var n = this.dom.listener.getElementsByClassName('visible').length
      if (i !== n) {
        this.dom.listener.querySelector('.lodge__overlay-counter--current').innerHTML = this.dom.listener.getElementsByClassName('visible').length
        var r = this.dom.listener.querySelectorAll('.lodge__overlay-image')[n - 1 || 0]
        !classes.has(r, 'active') && classes.add(r, 'active')
        this.siblings(r).forEach((t) => {
          classes.has(t, 'active') && classes.remove(t, 'active')
        })
      }
    })
    this.dom.section.style[this.prefix] = 'translate3d(0,' + -this.vars.current.toFixed(3) + 'px,0)'
  }

  destroy () {
    super.destroy()
  }
}
export default Single
