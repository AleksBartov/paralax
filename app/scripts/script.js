addEventListener('load', function(e){


  var title = document.getElementsByTagName('h4')[0],
  
  pOne = document.getElementsByTagName('p')[0],
  
  pTwo = document.getElementsByTagName('p')[1],
  
  firBtn = document.getElementById('firstBtn'),
  
  neareFon = document.getElementById('nearFon'),

  neareFonTwo = document.getElementById('nearFonTwo'),
  
  fonForTitle = document.getElementById('spanTitle'),

  fonForPreTitle = document.getElementById('spanPreTitle'),

  fonForFromNT = document.getElementById('spanFromNT'),
  
  blFon = document.getElementById('blackFon'),
  
  mainF = document.getElementById('mainFrame'),
  
  allPhotos = document.getElementsByClassName('photo')
  
  
  var allPhotosArray = [
  
    allPhotos[0],
  
    allPhotos[1],
  
    allPhotos[2],
  
    allPhotos[3],
  
    allPhotos[4],
  
    allPhotos[5],
  
    allPhotos[6]
  
   ]
  
  
  var urlForPhotos = [
  
    './images/priest.jpg',
  
    './images/priest.jpg',
  
    './images/priest.jpg',
  
    './images/venchanie.jpg',
  
    './images/priest.jpg',
  
    './images/priest.jpg',
  
    './images/evharistia.jpg'
  
   ]
  
  
  var themes = [
  
     {
  
       mainTitle: 'крещении',
       preTitle: 'узнай о',
       fromNT: 'Научите вся языки, крестяще их во имя Отца и Сына, и Святаго Духа (Мф, 25.17)'
  
     },
  
     {
  
       mainTitle: 'миропомазании',
       preTitle: 'узнай о',
       fromNT: 'Дух Святый наставит вас на всякую истину (Мф, 25.17)'
  
     },
  
     {
  
       mainTitle: 'покаянии',
       preTitle: 'узнай о',
       fromNT: 'Покайтесь и веруйте во Евангелие (Мф, 25.17)'
  
     },
  
     {
  
       mainTitle: 'браке',
       preTitle: 'узнай о',
       fromNT: 'Что Бог сочетал, человек да не разлучает (Мф, 25.17)'
  
     },
  
     {
  
       mainTitle: 'священстве',
       preTitle: 'узнай о',
       fromNT: 'Имже отпустите грехи, отпустятся им (Мф, 25.17)'
  
     },
  
     {
  
       mainTitle: 'соборовании',
       preTitle: 'узнай о',
       fromNT: 'И мазали больных маслом (Мф, 25.17)'
  
     },
  
     {
  
       mainTitle: 'евхаристии',
       preTitle: 'узнай о',
       fromNT: 'Это есть истинная Пища и истинное Питие (Мф, 25.17)'
  
     }
  
   ]
  
  
  
  
  allPhotosArray.forEach((p, index)=>{
  
    p.style.background = `url(${urlForPhotos[index]}) top center no-repeat`
  
    p.style.backgroundSize = 'cover'
  
  })
  
  
  
  var x = 0,
  
      a = 0,
  
      c = 0,
  
      z = 0,
  
      zz = 0,

      zzz = 0
  
  
  setTimeout(()=>{pOne.style.lineHeight ='1.3'}, 100)
  
  
  var y = setInterval(toShow, 10),
  
  b = setInterval(toShowP, 20)
  
  
  var d = null
  
  
  setTimeout(()=>{
  
  d = setInterval(toShowPTwo, 10)
  
  }, 2500)
  
  
  
  
  function toShow () {
  
    x++
  
    title.style.backgroundImage = `linear-gradient(to right, rgba(255,255,255,1) ${x/4}%, rgba(0,0,0,0) ${x}%)`
  
   if (x > 250) {clearInterval(y)}
  
  }
  
  
  function toShowP () {
  
    a++
  
    pOne.style.backgroundImage = `linear-gradient( to bottom, rgba(255,255,255,1) ${a/3}%, rgba(0,0,0,0) ${a}%)`
  
   if (a > 250) {clearInterval(b)}
  
  }
  
  
  function toShowPTwo () {
  
    c++
  
    pTwo.style.backgroundImage = `linear-gradient(to bottom, rgba(255,255,255,1) ${c/4}%, rgba(0,0,0,0) ${c}%)`
  
   if (c > 250) {clearInterval(d)}
  
  }
  
  
  setTimeout(()=>{
  
    firBtn.style.top = '0px'
  
  }, 3000)
  
  
  
  firBtn.addEventListener('click', ()=>{
  
  fonForPreTitle.innerHTML = themes[0].preTitle
  fonForTitle.innerHTML = themes[0].mainTitle
  fonForFromNT.innerHTML = themes[0].fromNT
  
    firBtn.classList.add('shining')
  
  
    setTimeout(()=>{
  
      neareFon.style.visibility = 'hidden'
  
      blFon.style.visibility = 'hidden'
  
    }, 2000)
  
  
    setTimeout(()=>{
  
      allPhotosArray[0].classList.remove('noShow')
  
  allPhotosArray[1].classList.remove('noShow')
  
  allPhotosArray[1].classList.add('photo--2')
  
  
    }, 1500)
  
  
    neareFon.style.zIndex = '10'
  
  
    var e = setInterval(toHideAll, 10)
  
  
  function toHideAll () {
  
    z++
  
    neareFon.style.backgroundImage = `radial-gradient(circle at top left, rgba(0,0,0,1) ${z/2}%, rgba(0,0,0,0) ${z}%), radial-gradient(circle at bottom left, rgba(0,0,0,1) ${z/2}%, rgba(0,0,0,0) ${z}%), radial-gradient(circle at top right, rgba(0,0,0,1) ${z/2}%, rgba(0,0,0,0) ${z}%), radial-gradient(circle at bottom right, rgba(0,0,0,1) ${z/2}%, rgba(0,0,0,0) ${z}%)`
  
   if (z > 70) {clearInterval(e)}
  
  }
  
  }, false)
  





  // код слайдера
  var startx = 0, dist = 0, counter = 0, titlesCounter = 0
  
  
  mainF.addEventListener('touchstart', function(e){
  
          var touchobj = e.changedTouches[0]
  
          startx = parseInt(touchobj.clientX)
  
  
        zz = 0
  
  
  fonForPreTitle.style.backgroundImage = 'radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(0,0,0,0) 0%)'
  fonForTitle.style.backgroundImage = 'radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(0,0,0,0) 0%)'
  fonForFromNT.style.backgroundImage = 'radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(0,0,0,0) 0%)'
  
          
  
          e.preventDefault()
  
      }, false)
  
  
  mainF.addEventListener('touchmove', function(e){
  
          var touchobj = e.changedTouches[0]
  
          dist = parseInt(touchobj.clientX) - startx
  
          
  
          e.preventDefault()
  
      }, false)
  
  
      mainF.addEventListener('touchend', function(e){
  
        if(dist===0){
          allPhotosArray.forEach((p)=>{
            if(p.classList.contains('photo--1')) {
              p.style.transform = 'translateZ(0px) scale(1.3)'
            }
          })

          neareFonTwo.style.zIndex = '10'
  
          setTimeout(()=>{
            var eE = setInterval(toHideAllTwo, 10)

          function toHideAllTwo () {
  
            zzz++
          
            neareFonTwo.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,1) ${zzz/6}%, rgba(0,0,0,0) ${zzz}%), linear-gradient(to top, rgba(0,0,0,1) ${zzz/6}%, rgba(0,0,0,0) ${zzz}%), linear-gradient(to left, rgba(0,0,0,1) ${zzz/6}%, rgba(0,0,0,0) ${zzz}%), linear-gradient(to right, rgba(0,0,0,1) ${zzz/6}%, rgba(0,0,0,0) ${zzz}%)`
          
           if (zzz > 90) {clearInterval(eE)}
          
          }
          }, 1000)

        } else {
          if(dist<0 && titlesCounter<6){
  
            titlesCounter++

            fonForPreTitle.innerHTML = themes[titlesCounter].preTitle
            fonForTitle.innerHTML = themes[titlesCounter].mainTitle
            fonForFromNT.innerHTML = themes[titlesCounter].fromNT
  
          } else if(dist>0 && titlesCounter>0){
  
            titlesCounter--
  
            fonForPreTitle.innerHTML = themes[titlesCounter].preTitle
            fonForTitle.innerHTML = themes[titlesCounter].mainTitle
            fonForFromNT.innerHTML = themes[titlesCounter].fromNT
  
          } else {
  
            fonForPreTitle.innerHTML = themes[titlesCounter].preTitle
            fonForTitle.innerHTML = themes[titlesCounter].mainTitle
            fonForFromNT.innerHTML = themes[titlesCounter].fromNT
  
          }
  
  
  setTimeout(()=>{
      var eee = setInterval(toShowTitles, 10)
  
  function toShowTitles () {
    zz++
  
  fonForPreTitle.style.backgroundImage = `radial-gradient(circle, rgba(255,255,255,.9) ${zz}%, rgba(0,0,0,0) ${zz*2}%)`
  fonForTitle.style.backgroundImage = `radial-gradient(circle, rgba(255,255,255,.9) ${zz}%, rgba(0,0,0,0) ${zz*2}%)`
  fonForFromNT.style.backgroundImage = `radial-gradient(circle, rgba(255,255,255,.9) ${zz}%, rgba(0,0,0,0) ${zz*2}%)`
  
   if (zz > 120) {clearInterval(eee)}
  
  }
  
  }, 1000)
  
  
      if(counter == 0 && dist>0 || counter == -6 && dist<0){
  
        return
  
     }
  
      
  
      if(dist < 0){
  
        counter--
  
  allPhotosArray.forEach((p)=>{
  
       switch(p.classList[1]){
  
         case 'photo--6-':
  
  p.classList.remove('photo--6-')
  
  p.classList.add('photo--7-')
  
         break;
  
         case 'photo--5-':
  
  p.classList.remove('photo--5-')
  
  p.classList.add('photo--6-')
  
        break;
  
         case 'photo--4-':
  
  p.classList.remove('photo--4-')
  
  p.classList.add('photo--5-')
  
         break;
  
         case 'photo--3-':
  
  p.classList.remove('photo--3-')
  
  p.classList.add('photo--4-')
  
         break;
  
         case 'photo--2-':
  
  p.classList.remove('photo--2-')
  
  p.classList.add('photo--3-')
  
        break;
  
         case 'photo--1':
  
  p.classList.remove('photo--1')
  
  p.classList.add('photo--2-')
  
         break;
  
         case 'photo--2':
  
  p.classList.remove('photo--2')
  
  p.classList.add('photo--1')
  
        break;
  
         case 'photo--3':
  
  p.classList.remove('photo--3')
  
  p.classList.add('photo--2')
  
         break;
  
         case 'photo--4':
  
  p.classList.remove('photo--4')
  
  p.classList.add('photo--3')
  
         break;
  
         case 'photo--5':
  
  p.classList.remove('photo--5')
  
  p.classList.add('photo--4')
  
        break;
  
         case 'photo--6':
  
  p.classList.remove('photo--6')
  
  p.classList.add('photo--5')
  
         break;
  
         case 'photo--7':
  
  p.classList.remove('photo--7')
  
  p.classList.add('photo--6')
  
         break;
  
       }
  
    })
  
  } else {
  
       counter++
  
  allPhotosArray.forEach((p)=>{
  
       switch(p.classList[1]){
  
         case 'photo--7-':
  
  p.classList.remove('photo--7-')
  
  p.classList.add('photo--6-')
  
         break;
  
         case 'photo--6-':
  
  p.classList.remove('photo--6-')
  
  p.classList.add('photo--5-')
  
         break;
  
         case 'photo--5-':
  
  p.classList.remove('photo--5-')
  
  p.classList.add('photo--4-')
  
        break;
  
         case 'photo--4-':
  
  p.classList.remove('photo--4-')
  
  p.classList.add('photo--3-')
  
         break;
  
         case 'photo--3-':
  
  p.classList.remove('photo--3-')
  
  p.classList.add('photo--2-')
  
         break;
  
         case 'photo--2-':
  
  p.classList.remove('photo--2-')
  
  p.classList.add('photo--1')
  
        break;
  
         case 'photo--1':
  
  p.classList.remove('photo--1')
  
  p.classList.add('photo--2')
  
         break;
  
         case 'photo--2':
  
  p.classList.remove('photo--2')
  
  p.classList.add('photo--3')
  
        break;
  
         case 'photo--3':
  
  p.classList.remove('photo--3')
  
  p.classList.add('photo--4')
  
         break;
  
         case 'photo--4':
  
  p.classList.remove('photo--4')
  
  p.classList.add('photo--5')
  
         break;
  
         case 'photo--5':
  
  p.classList.remove('photo--5')
  
  p.classList.add('photo--6')
  
        break;
  
         case 'photo--6':
  
  p.classList.remove('photo--6')
  
  p.classList.add('photo--7')
  
         break;
  
       }
  
    })
  
  }
  
  dist = 0
          e.preventDefault()
        }
  
      }, false)
  
  
  
  }, false)
  