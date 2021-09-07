// function #1

const getRandomNumber = (min, max) => {
  return Math.trunc(Math.random() * (max - min + 1) + min);
}

const getRandomArray  = (length, min, max) => {
  return new Array(length).fill(null).map(el => getRandomNumber(min, max) )
}

document.write(`<div class="info">`)
document.write(`Function #1: A random array of 8 digits length and of numbers from 5 to 20 is [${getRandomArray(8, 5, 20)}]. <br>`);


// function 2

const getModa = (...numbers) => {
  const objectValues = {};

  numbers.forEach(item => {
    objectValues[item] = objectValues[item] + 1 || 1;
  })

  let moda = [];
  let countDigits = 1;

  for (let key in objectValues) {
    if (objectValues[key] > countDigits) {
      moda = [key];
      countDigits = objectValues[key];
    } else if (objectValues[key] === countDigits) {
      moda.push(key);
    }
  }

  return moda;
}
     
document.write(`Function #2: Mode of numbers "1, 2, 3, 4, 5, 6, 2, 8, 7, 8, 3, 2, 3" is/are ${getModa(1, 2, 3, 4, 5, 6, 2, 8, 7, 8, 3, 2, 3)}. <br>`); 


// function #3

const getAverage = (...numbers) => {
  const integerNumbers = numbers.filter(el => Number.isInteger(el))
  const sumNumbers = integerNumbers.reduce((acc, el) => acc + el)

  return +(sumNumbers / integerNumbers.length).toFixed(2);
}

document.write(`Function #3: Average of numbers "1, 5, -3, 6, 5, 8.5, 9, 5, 7, 6" is ${getAverage(1, 5, -3, 6, 5, 8.5, 9, 5, 7, 6)}. <br>`); 


// function #4
  
function getMedian(...numbers) {
  const integerNumbers = numbers.filter((number) => Number.isInteger(number));
  const sortedArray = integerNumbers.sort((a, b) => a - b);
  let median = null;
  let index = null;
    
  if (sortedArray.length % 2 === 0 ) {
    index = sortedArray.length / 2;
    median = (sortedArray[index] + sortedArray[index + 1]) / 2;
  } else {
    index = Math.trunc(sortedArray.length / 2);
    median = sortedArray[index];
    }
    
  return median;
}

document.write(`Function #4: Median of numbers "1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7" is ${getMedian(1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7)}. <br>`); 


// function #5

function filterEvenNumbers(...numbers) {
  const oddNumbers = numbers.filter(number => number % 2 !== 0);

  return oddNumbers;
}

document.write(`Function #5: Odd numbers among numbers "1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7" are ${filterEvenNumbers(1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7)}. <br>`); 


// function #6

function countPositiveNumbers(...numbers) {
  const positiveNumbers = numbers.filter((number) => number > 0)

  return positiveNumbers.length; 
}

document.write(`Function #6: Quantity of positive numbers among numbers "4, 0, -5, 3, 7" is ${countPositiveNumbers(4, 0, -5, 3, 7)}. <br>`); 


// function #7

function getDividedByFive(...numbers) {
  const numbersDividedByFive = numbers.filter((number) => number % 5 === 0);

  return numbersDividedByFive;
}

document.write(`Function #7: Numbers divided to five among numbers "-5, 10, 0, 3, 7, 20" are ${getDividedByFive(-5, 10, 0, 3, 7, 20)}. <br>`); 

    
// function #8
  
const replaceBadWords = sentence => {
  const badWords = ['shit', 'fuck'];
  let formattedSentence = sentence;

  for (let i = 0; i < badWords.length; i++) {
    formattedSentence = formattedSentence.replaceAll(
      badWords[i], '*'.repeat(badWords[i].length)
    );
  }

  return formattedSentence;
}
  
document.write(`Function #8: Censored phrase of "You are fucking stupid bullshit!" is "${replaceBadWords('You are fucking stupid bullshit!')}". <br>`);


// function #9

function divideByThree(word) {
  const syllables =[];
  
  for (let i = 0; i< word.length; i +=3) {
    let oneSyllable = word.slice(i, i+3);
    
    syllables.push(oneSyllable);
    }
  
  return syllables;
}
  
document.write(`Function #9: Syllables of the world "abrakadabra" are ${divideByThree('abrakadabra')}.<br>`);


// function #10

function generateCombinations(word) {
  
  function recursion(word) {
  const letters = word.split('');
  let combinations = [];
     
  if (letters.length === 0) return "not exist";
  if (letters.length === 1) return letters.join(' ');
  if (letters.length > 10) return "unable to be counted";
    
  for (let i = 0; i < letters.length; i++) {
    const firstLetter = letters[i];
    const restLetters = letters.slice(0, i).concat(letters.slice(i + 1));
    const restLettersCombinations = recursion(restLetters.join(''));
       
  for (let j = 0; j < restLettersCombinations.length; j++) {
    const combinationArray = [firstLetter].concat(restLettersCombinations[j]);
    let newWord = combinationArray.join('')
    if ( combinations.includes(newWord) ) continue;
    else combinations.push(newWord);
      } 
  }
   
  return combinations;
 }

return recursion(word);
}
   
document.write(`Function #10: The set of combinations from the word "wood" is ${generateCombinations('wood')}.<br>`);
document.write(`</div>`)