// Haalt HTML element naar JavaScript 
let interaction = document.querySelector('a:nth-of-type(12)')



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
