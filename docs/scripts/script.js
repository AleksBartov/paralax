window.addEventListener('load', function(){

  const a = document.getElementById('varvara'),
        b = document.getElementById('ivan'),
        c = document.getElementById('boris'),
        box1 = document.getElementById('container'),
        containerInvi = document.getElementById('container__invi'),
        contPretitle = document.getElementById('pretitle'),
        contTitle = document.getElementById('contTitle'),
        contText = document.getElementById('contText')

  this.setTimeout(function() {
    a.classList.remove('untilLoad')
    b.classList.remove('untilLoad')
    c.classList.remove('untilLoad')
    a.classList.add('photo')
    b.classList.add('photo')
    c.classList.add('photo')
    b.classList.add('back--right')
    c.classList.add('back--right')
  }, 1500)

  this.setTimeout(function() {
    containerInvi.classList.remove('invi')
  }, 2000)
  
  const dataOfTitles = [
    {
      pretitle: 'рождение',
      title: 'ВОДОЮ И ДУХОМ',
      text: '"истинно, истинно говорю тебе, если кто не родится от воды и Духа, не может войти в Царствие Божие. Рожденное от плоти есть плоть, а рожденное от Духа есть дух" (Ин.3,5-6)'
    },
    {
      pretitle: 'прощение',
      title: 'СЛОВОМ',
      text: '"истинно, истинно говорю тебе, если кто не родится от воды и Духа, не может войти в Царствие Божие. Рожденное от плоти есть плоть, а рожденное от Духа есть дух" (Ин.3,5-6)'
    },
    {
      pretitle: 'питание',
      title: 'ТЕЛОМ И КРОВИЮ',
      text: '"истинно, истинно говорю тебе, если кто не родится от воды и Духа, не может войти в Царствие Божие. Рожденное от плоти есть плоть, а рожденное от Духа есть дух" (Ин.3,5-6)'
    }
  ]

  let counter = 0
  contPretitle.innerHTML = dataOfTitles[counter].pretitle
  contTitle.innerHTML = dataOfTitles[counter].title
  contText.innerHTML = dataOfTitles[counter].text

  // прокрутка влево
  
  function scrollToTheLeft () {
    counter++
    contPretitle.innerHTML = dataOfTitles[counter].pretitle
    contTitle.innerHTML = dataOfTitles[counter].title
    contText.innerHTML = dataOfTitles[counter].text

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

    counter--
    contPretitle.innerHTML = dataOfTitles[counter].pretitle
    contTitle.innerHTML = dataOfTitles[counter].title
    contText.innerHTML = dataOfTitles[counter].text

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
