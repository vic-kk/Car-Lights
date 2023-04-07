var left,right;

document.addEventListener('DOMContentLoaded',function () {
  left = document.getElementsByClassName('left')[0],
  right = document.getElementsByClassName('right')[0],
  left = left.getElementsByTagName('i'),
  right = right.getElementsByTagName('i');

  lightItUp(left,'white',1);
  lightItUp(right,'white',1);
  setTimeout(function () {
    lightItUp(left,'orange',1);
    lightItUp(right,'orange',1);
  },2000)
  setInterval(function () {
    lightItUp(left,'white',1);
    lightItUp(right,'white',1);
    setTimeout(function () {
      lightItUp(left,'orange',1);
      lightItUp(right,'orange',1);
    },2000)
  },4000);
})

function lightItUp(mass,color,time) {
  var ticks = mass.length-1;
  time *= 1000;
  var ticker = setInterval(function () {
    mass[ticks].classList.add(color);
    off(mass[ticks],color,time/2);
    ticks == 0 ? (function () {
      clearInterval(ticker);
      setTimeout(function () {
        for (var i = 0; i < mass.length; i++) {mass[i].classList.value = '';}
      },time);
    })() : --ticks;
  }, time/ticks);
}


function off(el,color,time) {
  setTimeout(function () {
    el.classList.remove(color);
  },time)
}
