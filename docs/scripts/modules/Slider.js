class Slider {
    constructor (order, el) {
        this.manager = document.getElementById('container')
        this.order = order
        this.el = el
        this.slidePhoto()
    }

    slidePhoto () {
        let startx = 0, dist = 0
        const that = this
  
        this.manager.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0]
            startx = parseInt(touchobj.clientX)
            e.preventDefault()
          }, false)
        
        
          this.manager.addEventListener('touchmove', function(e){
            var touchobj = e.changedTouches[0]
            dist = parseInt(touchobj.clientX) - startx
            that.el.style.transform = `translateX(${dist*1.5}px)`
            e.preventDefault()
          }, false)
      
          this.manager.addEventListener('touchend', function(e){
            (dist < -50) ? that.el.classList.add('back--left') : (dist > 50) ? that.el.classList.add('back--right') : that.el.classList.remove('back--right', 'back--left')
          }, false)
    }
}