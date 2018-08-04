const b = document.getElementById('bapt')
const t = document.getElementById('test')

window.onload = function () {
    this.setTimeout(toBegin, 200)
}

function toBegin() {
    b.style.transform = 'translateZ(-60px) translateY(5px) translateX(0px)'
    b.style.filter = 'blur(0px)'
    t.style.transform = 'translateZ(-130px) translateY(5px) translateX(300px)'
    t.style.filter = 'blur(3px)'
}

var last_known_scroll_position = 0;
var ticking = false;
function doSomething() {
    b.style.transform = 'translateZ(-130px) translateY(5px) translateX(-300px)'
    b.style.filter = 'blur(1px)'
    t.style.transform = 'translateZ(-60px) translateY(5px) translateX(0px)'
    t.style.filter = 'blur(0px)'
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollX;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething();
      ticking = false;
    });
     
    ticking = true;
  }
});