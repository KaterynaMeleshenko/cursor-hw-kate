// Basic
// Infinite generator of identificators
console.warn("BASE LEVEL")

function* createTdGenerator(){
  for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}

const idGenerator = createTdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


// Advanced 
//Fontsize generator
console.warn("ADVANCED LEVEL")
const initialSize = 14;

function* newFontGenerator(size) {
  let result = yield size;
    
  for (let i = 1; i < Infinity; i++) {
    if (result === 'up') {
      size = size + 2;
      result = yield size;
    } else if (result === 'down') {
      size = size - 2;
      result = yield size;
    } else {
      size = size;
      result = yield size;;
    }
  }
}

const fontGenerator = newFontGenerator(initialSize);
console.log(fontGenerator.next('up').value); //14
console.log(fontGenerator.next('up').value); //16
console.log(fontGenerator.next('up').value); //18
console.log(fontGenerator.next().value); //18
console.log(fontGenerator.next('down').value); //16
console.log(fontGenerator.next('down').value); //14
console.log(fontGenerator.next('down').value); //12
console.log(fontGenerator.next().value); //12


//Buttons
document.getElementById("text").style.fontSize = `${initialSize}px`

const buttonSmall = document.getElementById("small")

buttonSmall.addEventListener('click', () => {
  let fontSize = fontGenerator.next('down').value;
  document.getElementById("text").style.fontSize = `${fontSize}px`;
})

const buttonBig = document.getElementById("big")

buttonBig.addEventListener('click', () => {
  let fontSize = fontGenerator.next('up').value;
  document.getElementById("text").style.fontSize = `${fontSize}px`;
})