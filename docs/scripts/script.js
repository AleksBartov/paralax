window.addEventListener('load', function(){

  const a = document.getElementById('varvara'),
        b = document.getElementById('ivan'),
        c = document.getElementById('boris'),
        box1 = document.getElementById('container')

  this.setTimeout(function() {
    a.classList.remove('untilLoad')
    b.classList.remove('untilLoad')
    c.classList.remove('untilLoad')
    a.classList.add('photo')
    b.classList.add('photo')
    c.classList.add('photo')
    b.classList.add('back--right')
    c.classList.add('back--right')
  }, 1000)
  
  


  // прокрутка влево
  
  function scrollToTheLeft () {
    if ( !a.classList.contains('back--left') && !a.classList.contains('back--right') ) {
              a.classList.add('back--left')
              c.classList.remove('back--left')
              c.classList.add('back--right')
              b.classList.remove('back--right')
         } else if ( a.classList.contains('back--left') ) {
              a.classList.remove('back--left')
              a.classList.add('back--right')
              c.classList.remove('back--right')
              b.classList.add('back--left')
         } else {
              a.classList.remove('back--right')
              c.classList.add('back--left')
              b.classList.remove('back--left')
              b.classList.add('back--right')
        }
      }
  
  // прокрутка вправо
  
  function scrollToTheRight () {
    if ( !a.classList.contains('back--left') && !a.classList.contains('back--right') ) {
              a.classList.add('back--right')
              c.classList.remove('back--left')
              b.classList.remove('back--right')
              b.classList.add('back--left')
         } else if ( a.classList.contains('back--left') ) {
              a.classList.remove('back--left')
              c.classList.remove('back--right')
              c.classList.add('back--left')
              b.classList.add('back--right')
         } else {
              a.classList.remove('back--right')
              a.classList.add('back--left')
              c.classList.add('back--right')
              b.classList.remove('back--left')
        }
      }

  // выбор статьи

  function toChoose () {
    if ( !a.classList.contains('back--left') && !a.classList.contains('back--right') ) {
            a.classList.add('chosen')
      } else if ( !b.classList.contains('back--left') && !b.classList.contains('back--right') ) {
            b.classList.add('chosen')
      } else {
            c.classList.add('chosen')
      }
  }
  
  // код чтения событий косания ( право/ лево )
  
  var startx = 0, dist = 0
  
  box1.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0]
      startx = parseInt(touchobj.clientX)
      e.preventDefault()
    }, false)
  
  
  box1.addEventListener('touchmove', function(e){
      var touchobj = e.changedTouches[0]
      dist = parseInt(touchobj.clientX) - startx
      e.preventDefault()
    }, false)

  box1.addEventListener('touchend', function(e){
      if ( dist > 10 ) {
        scrollToTheRight()
      } else if ( dist < 10 && dist > -10 ) {
        toChoose()
      } else {
        scrollToTheLeft()
      }
      e.preventDefault()
    }, false)

  },
  
  
  false);
