// Haalt HTML element naar JavaScript 
let interaction = document.querySelector('a:nth-of-type(12)')

const body = document.querySelector('body')



interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}




let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('dblclick' ,

function () {
  window.open('https://tenor.com/nl/view/walter-dog-bull-terrier-cute-shake-gif-17789956',
      'width=400,height=400 top=200,left=600');
});







let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', designhandler)
design.addEventListener('animationend', designhandler)
function designhandler() {
  design.classList.toggle('designen')
}


let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click', Endhandler)
function Endhandler() {
  body.classList.toggle('en')
}



let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('mouseover' , dedevelopment)

function dedevelopment(){
  development.classList.toggle('d')
}

let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('keydown', sprint5)

function sprint5(e){
  if (e.key === 's') {
    sprint.classList.toggle('sprinter');
  }
}

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('keypress', fixxed)

function fixxed(e){
  if (e.key === 'o') {
    fix.classList.toggle('fixxen');
  }
}