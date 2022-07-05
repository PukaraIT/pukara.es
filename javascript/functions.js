
const panels = document.querySelectorAll('.slider');

let interval;
let regex = /[0-9]/g;
let i = 0;
let number = 0;

const panelShow = (event) => {
  if (event != undefined) {
    number = event.target.id.match(regex);
    clearInterval(interval);
    interval = setInterval(panelShow, 5000);
  }

  while (i < panels.length) {
    if (panels[i].getAttribute('class').match('show-slider')) {
      panels[i].classList.toggle('show-slider');
      panels[i].classList.toggle('hide-slider');
      if (event == undefined) number = i;
    }
    i++;
  }

  i = 0;
}


interval = setInterval(panelShow, 5000);

let video = document.querySelector('#puk-video');

window.addEventListener('load',() => {
  video.classList.toggle('invisible');
});