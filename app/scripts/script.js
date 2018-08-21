addEventListener('load', function(e){


  var title = document.getElementsByTagName('h4')[0],
  
  pOne = document.getElementsByTagName('p')[0],
  
  pTwo = document.getElementsByTagName('p')[1],
  
  firBtn = document.getElementById('firstBtn'),
  
  neareFon = document.getElementById('nearFon'),

  forHolyFathers = document.getElementById('forHolyFathers'),

  neareFonTwo = document.getElementById('nearFonTwo'),
  
  fonForTitle = document.getElementById('spanTitle'),

  fonForPreTitle = document.getElementById('spanPreTitle'),

  fonForFromNT = document.getElementById('spanFromNT'),
  
  blFon = document.getElementById('blackFon'),
  
  mainF = document.getElementById('mainFrame'),
  bottomNavigation = document.getElementById('bottomNavigation'),
  bottomNavigationTitle = document.getElementById('bottomNavigationTitle'),
  
  allPhotos = document.getElementsByClassName('photo')
  
  
  var allPhotosArray = [
  
    allPhotos[0],
  
    allPhotos[1],
  
    allPhotos[2],
  
    allPhotos[3],
  
    allPhotos[4],
  
    allPhotos[5],
    allPhotos[6],
  
    allPhotos[7],
  
    allPhotos[8],
  
    allPhotos[9],
  
    allPhotos[10],
  
    allPhotos[11],
  
    allPhotos[12],
    allPhotos[13]
  
   ]
  
  
  const urlForPhotos = [
    './images/priest.jpg',
    './images/priest_b&w.jpg',
    './images/priest.jpg',
    './images/priest_b&w.jpg',
    './images/priest.jpg',
    './images/priest_b&w.jpg',
    './images/venchanie.jpg',
    './images/venchanie_b&w.jpg',
    './images/priest.jpg',
    './images/priest_b&w.jpg',
    './images/priest.jpg',
    './images/priest_b&w.jpg',
    './images/evharistia.jpg',
    './images/evharistia_b&w.jpg'
   ]
  
  
  var themes = [
  
     {
  
       mainTitle: 'крещении',
       fathersTitle: `<h4 class='noto toupper'>крещение</h4></br></br>`,
       preTitle: 'узнай о',
       fromNT: 'Идите, научите все народы, крестя их во имя Отца и Сына и Святаго Духа (Мф, 28.19)',
       holyFathersAbout: `Так как человек состоит из души и тела, то и очищение двоякое: бестелесное для бестелесного, а телесное для тела,– вода очищает тело, а Дух запечатлевает душу, чтобы нам приступить к Богу с сердцем окропленным и телом, омытым чистою водою.</br></br>св. Кирилл Иерусалимский`
  
     },
  
     {
  
       mainTitle: 'миропомазании',
       fathersTitle: `<h4 class='noto toupper'>миропомазание</h4></br></br>`,
       preTitle: 'узнай о',
       fromNT: 'Когда же приидет Он, Дух истины, то наставит вас на всякую истину (Ин, 16.13)',
       holyFathersAbout: `Ибо как Христос после Крещения и наития Святого Духа поборол диавола, так и вы, после священного Крещения и таинственного Помазания, облекшись во всеоружие Святого Духа, противостаньте силе противника и побеждайте ее, говоря: «Все могу в укрепляющем меня Иисусе Христе» (Флп. 4, 14). </br></br>св. Кирилл Иерусалимский`
  
     },
  
     {
  
       mainTitle: 'покаянии',
       fathersTitle: `<h4 class='noto toupper'>покаяние</h4></br></br>`,
       preTitle: 'узнай о',
       fromNT: 'Покайтесь и веруйте в Евангелие (Мк, 1.15)',
       holyFathersAbout: `Как человек, крещаемый человеком, то есть священником, просвещается благодатью Духа Святого, так и исповедующий в Покаянии грехи свои приемлет оставление их через священника благодатью Иисуса Христа.</br></br>св. Афанасий Великий`
  
     },
  
     {
  
       mainTitle: 'браке',
       fathersTitle: `<h4 class='noto toupper'>брак</h4></br></br>`,
       preTitle: 'узнай о',
       fromNT: 'Что Бог сочетал, того человек да не разлучает (Мф, 19.6)',
       holyFathersAbout: `Лучше всего, если Сам Христос присутствует на браке, потому что где Христос, там все обретает достоинство, и вода претворяется в вино, то есть все изменяется к лучшему.</br></br>св. Григорий Богослов`
  
     },
  
     {
  
       mainTitle: 'священстве',
       fathersTitle: `<h4 class='noto toupper'>священство</h4></br></br>`,
       preTitle: 'узнай о',
       fromNT: 'Кому простите грехи, тому простятся; на ком оставите, на том останутся (Ин, 20.23)',
       holyFathersAbout: `То, что вручено священнику, может даровать только Бог, и чего бы ни достигла человеческая мудрость, она окажется меньше, чем благодать.</br></br>св. Иоанн Златоуст`
  
     },
  
     {
  
       mainTitle: 'соборовании',
       fathersTitle: `<h4 class='noto toupper'>соборование</h4></br></br>`,
       preTitle: 'узнай о',
       fromNT: 'И многих больных мазали маслом и исцеляли (Мк, 6.13)',
       holyFathersAbout: `Имея какую-нибудь телесную болезнь, мы всеми силами стараемся освободиться от нее, а тяжко страдая от болезней душевных, мы медлим... Потому мы не избавляемся и от телесных болезней, что необходимое для нас считаем маловажным, а маловажное – необходимым и, оставив самый источник зол (грехи и страсти), хотим очистить потоки (болезни телесные).</br></br>св. Иоанн Златоуст`
  
     },
  
     {
  
       mainTitle: 'евхаристии',
       fathersTitle: `<h4 class='noto toupper'>евхаристия</h4></br></br>`,
       preTitle: 'узнай о',
       fromNT: 'Ибо Плоть Моя истинно есть пища, и Кровь Моя истинно есть питие (Ин, 6.55)',
       holyFathersAbout: `Мы приемлем
       Евхаристию не как простой хлеб и не как простое питие, но каким образом Иисус Христос-Спаситель наш, воплотившись Словом Божиим, имел для спасения нашего Плоть и Кровь, таким же образом и Пища эта, над которой произнесено благодарение молитвой Слова Его, по преложении питающая нашу кровь и плоть, есть Плоть и Кровь Того же воплотившегося Иисуса Христа.</br></br>св. Иустин Философ`
  
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
      allPhotosArray[2].classList.remove('noShow')
      allPhotosArray[3].classList.remove('noShow')
      allPhotosArray[2].classList.add('photo--2')
      allPhotosArray[3].classList.add('photo--2')
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
          fonForFromNT.style.visibility = 'hidden'
          fonForPreTitle.style.visibility = 'hidden'
          fonForTitle.style.visibility = 'hidden'

          allPhotosArray.forEach((p, index)=>{
            if(p.classList.contains('photo--1') && index%2===1) {
              p.style.transform = 'translateZ(0px) scale(1.3)'
              p.style.opacity = '0'
            } else if(p.classList.contains('photo--1')) {
              p.style.transform = 'translateZ(0px) scale(1.3)'
            } else {
              p.style.transform = 'translateZ(-1000px)'
            }
          })
  
          setTimeout(()=>{
            var eE = setInterval(toHideAllTwo, 10)
            function toHideAllTwo () {
              zzz++
              mainF.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,1) ${zzz/6}%, rgba(0,0,0,0) ${zzz}%), linear-gradient(to top, rgba(0,0,0,1) ${zzz/6}%, rgba(0,0,0,0) ${zzz}%), linear-gradient(to left, rgba(0,0,0,1) ${zzz/6}%, rgba(0,0,0,0) ${zzz}%), linear-gradient(to right, rgba(0,0,0,1) ${zzz/6}%, rgba(0,0,0,0) ${zzz}%)`
              if (zzz > 90) {
                clearInterval(eE)
              }
            }
          }, 1000)

          setTimeout(()=>{

            var fathers = setInterval(toShowHolyFathers, 40), counterFathers = 0   
            forHolyFathers.style.visibility = 'visible'
            forHolyFathers.style.backgroundImage = 'black'
            mainF.style.backgroundImage = 'rgba(0,0,0,.5)'
            forHolyFathers.innerHTML += themes[titlesCounter].fathersTitle
            forHolyFathers.innerHTML += themes[titlesCounter].holyFathersAbout
            

            function toShowHolyFathers () {
              counterFathers++
              forHolyFathers.style.backgroundImage = `radial-gradient(circle at top left, rgba(255,255,255,1) ${counterFathers/3}%, rgba(0,0,0,0) ${counterFathers}%), radial-gradient(circle at top right, rgba(255,255,255,1) ${counterFathers/3}%, rgba(0,0,0,0) ${counterFathers}%)`
              if (counterFathers > 190) {
                clearInterval(fathers)
              }
            }
          }, 1500)

          setTimeout(()=>{
            var fathersDone = setInterval(toHideHolyFathers, 10), counterFathers = 300

            function toHideHolyFathers () {
              counterFathers--
              forHolyFathers.style.backgroundImage = `linear-gradient(to top, rgba(255,255,255,1) ${counterFathers/3}%, rgba(0,0,0,0) ${counterFathers}%)`
              if (counterFathers === 0) {
                clearInterval(fathersDone)
              }
            }
          }, 10000)

          setTimeout(()=>{
            bottomNavigationTitle.innerHTML = themes[titlesCounter].fathersTitle
            bottomNavigation.style.visibility = 'visible'
            mainF.innerHTML = ''
            mainF.style.background = 'rgba(45,45,45,1)'
          }, 15500)



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
  