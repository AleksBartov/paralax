addEventListener('load', function(e){


  const title = document.getElementsByTagName('h4')[0],
  
  pOne = document.getElementsByTagName('p')[0],
  
  pTwo = document.getElementsByTagName('p')[1],
  
  firBtn = document.getElementById('firstBtn'),
  
  neareFon = document.getElementById('nearFon'),
  
  blFon = document.getElementById('blackFon')
  
  
  let x = 0,
  
      a = 0,
  
      c = 0,
  
      z = 0
  
  
  setTimeout(()=>{pOne.style.lineHeight ='1.3'}, 100)
  
  
  const y = setInterval(toShow, 10),
  
  b = setInterval(toShowP, 20)
  
  
  let d = null
  
  
  setTimeout(()=>{
  
  d = setInterval(toShowPTwo, 10)
  
  }, 1500)
  
  
  
  
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
  
    firBtn.classList.add('shining')
  
  
    setTimeout(()=>{
  
      neareFon.style.visibility = 'hidden'
  
      blFon.style.visibility = 'hidden'
  
    }, 2000)
  
  
    neareFon.style.zIndex = '10'
  
  
    const e = setInterval(toHideAll, 10)
  
  
  function toHideAll () {
  
    z++
  
    neareFon.style.backgroundImage = `radial-gradient(circle at top left, rgba(0,0,0,1) ${z/2}%, rgba(0,0,0,0) ${z}%), radial-gradient(circle at bottom left, rgba(0,0,0,1) ${z/2}%, rgba(0,0,0,0) ${z}%), radial-gradient(circle at top right, rgba(0,0,0,1) ${z/2}%, rgba(0,0,0,0) ${z}%), radial-gradient(circle at bottom right, rgba(0,0,0,1) ${z/2}%, rgba(0,0,0,0) ${z}%)`
  
   if (z > 70) {clearInterval(e)}
  
  }
  
  
  }, false)
  
  
  }, false)
  