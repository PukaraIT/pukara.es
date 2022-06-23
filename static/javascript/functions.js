const slider = document.querySelectorAll('.dots');
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
      slider[i].classList.toggle('dots-active');
      if (event == undefined) number = i;
    }
    i++;
  }

  i = 0;

  if(event == undefined && number >= panels.length - 1) number = -1;

  slider[event != undefined ? number - 1 : number + 1].classList.toggle('dots-active');
  panels[event != undefined ? number - 1 : number + 1].classList.toggle('hide-slider');
  panels[event != undefined ? number - 1 : number + 1].classList.toggle('show-slider');
}

while (i < slider.length) {
  if (i == 0) {
    panels[i].classList.toggle('show-slider');
    panels[i].classList.toggle('hide-slider');
    slider[i].classList.toggle('dots-active');
  }

  panels[i].setAttribute('id', 'panel-' + [i + 1])
  slider[i].setAttribute('id', 'dot-' + [i + 1]);
  slider[i].addEventListener('click', panelShow);
  i++;
}

i = 0;

interval = setInterval(panelShow, 5000);

let video = document.querySelector('#puk-video');

window.addEventListener('load',(e) => {
  video.classList.toggle('invisible');
});

document.querySelectorAll(".cgroup").forEach((chbx)=>{
  chbx.addEventListener("change",(e)=>{
      if(!e.target.checked) return;
      var checkedbox = Array.from(document.querySelectorAll(".cgroup")).find(chbx=>chbx!=e.target&&chbx.checked)
      if(checkedbox){
          e.target.checked = false
          message()
      }
  })
})