// HW-1
function maxFromPrices(priceRing, priceEarrings, priceBraсelet) {

  return Math.max(priceRing, priceEarrings, priceBraсelet);  
}

// HW-2
function sumOfYorNumbers(firstNum, secondNum, evenSkip) {
  const initialNum = Math.min(firstNum, secondNum);
  const lastNum = Math.max(firstNum,secondNum);
    
  let total = 0;

  for (let i = initialNum; i <= lastNum; i++) {
    if (!evenSkip || i % 2 ) {
      total += i;
    }
  }

  return total;
}

// HW-3
function withoutExactLetter(letter, word) {
  
  return `The word 
    "${word}" without letter "${letter}"
    is "${word.replaceAll(letter, "")}".`;
}

// HW-4
function getPairs() {
  const students = ["Oleksandr", "Ihor", "Olena", "Ira", "Oleksiy", "Svitlana"];
  const allPairs = [];

  allPairs.push([students[0], students[2]], [students[1], students[3]], [students[4], students[5]]);

  return allPairs;
}

// HW-5
function filterEvenNumbers(...numbers) {
  const oddNumbers = numbers.filter(number => number % 2 !== 0);
  
  return oddNumbers;
  }
  
// HW-6
function calculateWordLetters(word) {
  const arrayFromWord = word.split('');
  let wordObject = {};
    
  arrayFromWord.forEach(letter => {
    wordObject[letter] = wordObject[letter] + 1 || 1;
  })
    
  return wordObject;
}

// HW-7
const ukraine = { 
        tax: 0.195, 
        middleSalary: 1789, 
        vacancies: 11476, 
  };
function getMyTaxes(salary) {
  
  const myTax = salary * this.tax;
    
  return + myTax.toFixed(2);
}

// HW-8
class Student {
  constructor(university, course, fullName, allMarks, isStillStudent) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.allMarks = allMarks;
    this.isStillStudent = isStillStudent;
    }
  
  getInfo() {
    if (this.isStillStudent) {
      return `Student of the ${this.course} course of ${this.university}, ${this.fullName}`;
    } else {
      return "This student is not studying here anymore";
    }
  };
}

const ostap = new Student("Hight school of the psychteraphy, Odessa", "first", "Ostap Rodomanskiy Bender", [5, 4, 4, 5], true);

// HW-9
function randomColor() {
  const firstRandomNumber = Math.trunc( (Math.random() * 256) );
  const secondRandomNumber = Math.trunc( (Math.random() * 256) );
  const thirdRandomNumber = Math.trunc( (Math.random() * 256) );
  
  return `rgb(${firstRandomNumber}, ${secondRandomNumber}, ${thirdRandomNumber})`;
}

//HW-10
//No separate functions

//HW-11
function getCharacter() {
  const now = Date.now().toString();
  const sign = + now.slice(now.length-5, now.length);
  const character = String.fromCharCode(sign);
  return character;
}

//HW-12
function getPlanets() {
  document.body.insertAdjacentHTML('beforeend', `<div id="info"></div>`);
  const mainBlock = document.getElementById('info');
  
  axios.get(`https://swapi.dev/api/planets/?page=1`)
    .then(res => {
      const planets = res.data.results;
        
      planets.forEach(planet => {
      mainBlock.insertAdjacentHTML('beforeend', `<div class="planet-info">
        ${planet.name}</div>`)
      })
    });
};

//HW-13
function* createIdGenerator(){
  for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}

export {maxFromPrices, sumOfYorNumbers, withoutExactLetter, getPairs,
  filterEvenNumbers, calculateWordLetters, ukraine, getMyTaxes, Student, 
  ostap, randomColor, getCharacter, getPlanets, createIdGenerator
}

console.log("Function from HW-13:", createIdGenerator().next().value);