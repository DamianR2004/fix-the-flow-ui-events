// Haalt HTML element naar JavaScript 
let interaction = document.querySelector('a:nth-of-type(12)')

const body = document.querySelector('body')



interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}



// document.queryselector haalt het eerste a element uit de HTML op , deze kan ik hierdoor gebruiken in javascript

let frontend = document.querySelector('a:nth-of-type(1)')

// dit zorgt ervoor dat er een dubbelclick event wordt toegevoegd aan het HTML element

frontend.addEventListener('dblclick' ,

// dit zorgt ervoor dat de functie kan worden uitgevoerd. En dat hij een window met een link opent

function () {
  window.open('https://tenor.com/nl/view/walter-dog-bull-terrier-cute-shake-gif-17789956',
      'width=400,height=400 top=200,left=600');
});






// document.queryselector haalt het tweede a element uit de HTML op , deze kan ik hierdoor gebruiken in javascript

let design = document.querySelector('a:nth-of-type(2)')

// Dit zorgt ervoor dat er een click en een animationend wordt toegevoegd aan het HTML element.
// Nu wordt het zo mogelijk dat er iets gebeurd als er geklikt wordt, daarnaast eindig de animatie

design.addEventListener('click', designhandler)
design.addEventListener('animationend', designhandler)


// dit zorgt ervoor dat de functie met de naam designhandler kan worden uitgevoerd. nu wordt de css samengevoegd met een toggle functie

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







let thet = document.querySelector('a:nth-of-type(7)')

thet.addEventListener('keyup' , thets)

function thets(e){
  if (e.key == 'm') {
    thet.classList.toggle('ded');
  }
}


let floo = document.querySelector('a:nth-of-type(8)')



floo.addEventListener('mouseleave', floomuis)
function floomuis() {
  floo.classList.toggle('floos')
}




let gefocus = document.querySelector('a:nth-of-type(9)')

gefocus.addEventListener('focus', oesj)
function oesj(){
  gefocus.classList.toggle('focussen')
}



let evenement = document.querySelector('a:nth-of-type(10)')
 
evenement.addEventListener("click", moveWithMouse, false); // wanneer de sprint 5 button is ingeklikt volgd de button de muis
 
window.onmousemove = function (e) { // voor het volgen van de muis op de pagina
  var x = e.pageX,
   y = e.pageY;
  evenement.style.top = (y) + 'px';
  evenement.style.left = (x) + 'px';
};

function moveWithMouse() {
  this.classList.add('absolute');
  this.innerHTML = "Interface";
  console.log('hi')
}

