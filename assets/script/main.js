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


// document.queryselector haalt het derde a element uit de HTML op , deze kan ik hierdoor gebruiken in javascript

let and = document.querySelector('a:nth-of-type(3)')

// Dit zorgt ervoor dat er een click wordt toegevoegd aan het HTML element.
and.addEventListener('click', Endhandler)
// dit zorgt ervoor dat de functie met de naam endhandler kan worden uitgevoerd
function Endhandler() {
  body.classList.toggle('en')
}


// document.queryselector haalt het vierde a element uit de HTML op , deze kan ik hierdoor gebruiken in javascript

let development = document.querySelector('a:nth-of-type(4)')

// Dit zorgt ervoor dat er een mouseover event wordt toegevoegd aan het HTML element.

development.addEventListener('mouseover' , dedevelopment)


// Nu gebeurt er iets met het element als de muis er overheen gaat, en ook met een toggle zodat het uit gaat.

function dedevelopment(){
  development.classList.toggle('d')
}


// document.queryselector haalt het vijfde a element uit de HTML op , deze kan ik hierdoor gebruiken in javascript

let sprint = document.querySelector('a:nth-of-type(5)')

// dit zorgt ervoor dat er een keydown event aan het html element wordt gekoppeld
sprint.addEventListener('keydown', sprint5)

// dit zorgt ervoor dat er een keydown event wordt uitgevoerd als de gebruiker op de kleine letter s klikt
function sprint5(e){
  if (e.key === 's') {
    sprint.classList.toggle('sprinter');
  }
}


// document.queryselector haalt het zesde a element uit de HTML op , deze kan ik hierdoor gebruiken in javascript
let fix = document.querySelector('a:nth-of-type(6)')


// dit zorgt ervoor dat er een keypress event aan het html element wordt gekoppeld

fix.addEventListener('keypress', fixxed)

// dit zorgt ervoor dat er een keypress event wordt uitgevoerd als de gebruiker op de letter o klikt, dit mag zowel hoofd als kleine letter zijn

function fixxed(e){
  if (e.key === 'o') {
    fix.classList.toggle('fixxen');
  }
}





// document.queryselector haalt het zevende a element uit de HTML op , deze kan ik hierdoor gebruiken in javascript

let thet = document.querySelector('a:nth-of-type(7)')

// dit zorgt ervoor dat er een keyup event aan het html element wordt gekoppeld
thet.addEventListener('keyup' , thets)
// dit zorgt ervoor dat er een keyup event wordt uitgevoerd als de gebruiker op de hoofdletter M klikt, dit werkt dus niet als de kleine letter wordt geklikt.

function thets(e){
  if (e.key == 'M') {
    thet.classList.toggle('ded');
  }
}

// document.queryselector haalt het achtste a element uit de HTML op , deze kan ik hierdoor gebruiken in javascript

let floo = document.querySelector('a:nth-of-type(8)')

// dit zorgt ervoor dat er een mouseleave event aan het html element wordt gekoppeld

floo.addEventListener('mouseleave', floomuis)

// dit zorgt ervoor dat het mouseleave event door middel van een toggle werkt, dus als de gebruiker van het element af hoverd dan wordt de css class uitgevoerd


function floomuis() {
  floo.classList.toggle('floos')
}


// document.queryselector haalt het negende a element uit de HTML op , deze kan ik hierdoor gebruiken in javascript

let gefocus = document.querySelector('a:nth-of-type(9)')
// dit zorgt ervoor dat er een focus event aan het html element wordt gekoppeld
gefocus.addEventListener('focus', oesj)

// dit zorgt ervoor dat er de css class wordt uitgevoerd als de gebruiker met TAB over het element heen gaat
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

