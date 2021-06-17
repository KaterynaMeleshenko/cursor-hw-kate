// function #1

function getRandomArray(length, min, max) {
  let randomArray = [];

  for (let i = 0; i < length; i++) {
    randomArray.push( Math.trunc(Math.random() * (max - min + 1) + min) )
  }

  return `Random array of ${length} elements with ${min} as a minimum
    element and ${max} as a maximum element is [${randomArray}].`;
}

document.write(`Function #1: ${getRandomArray(8, 5, 20)} <br>`);


// function 2

function getModa(...numbers) {
  const numbersArray = Array.from(numbers).sort();
  const filteredArray = numbersArray.filter(number => Number.isInteger(number))  
  let allModes = [];
  let firstModeFrequency = 1;
  let i = 0;

  while (i < filteredArray.length){
    if (filteredArray[i] === filteredArray[i+1]) {
      let modeFrequency = filteredArray.lastIndexOf(filteredArray[i]) - filteredArray.indexOf(numbersArray[i]);
      
      if (modeFrequency >= firstModeFrequency) {
        firstModeFrequency = modeFrequency;
        allModes.push(filteredArray[i])
        i++;
      }             
    } else{
      i++;
    }  
    i++;  
  }
      
  for (i = 0; i < allModes.length; i++) {
    if (allModes[i] == allModes[i+1]) {
      allModes.splice(i+1);
    }
  }

  return `Mode(s) of the numbers [${numbers}] is(are) ${allModes}.`;
}
     
document.write(`Function #2: ${getModa(1, 2, 3, 4, 5, 6, 2, 8, 7, 8, 3, 2)} <br>`); 


// function #3

function getAverage(...numbers) {
  const numbersArray = Array.from(numbers);
  const filteredArray = numbersArray.filter(number => Number.isInteger(number));
  let sum = 0;
  
  for (let i = 0; i < filteredArray.length; i++) {
    sum = sum + filteredArray[i];
  }
     
  return `Average element in the array [${numbersArray}] is 
    ${+(sum / filteredArray.length).toFixed(2)}.`;
}

document.write(`Function #3: ${getAverage(1, 5, -3, 6, 5, 8.5, 9, 5, 7, 6)} <br>`); 


// function #4
  
function getMedian(...numbers) {
  const numbersArray = Array.from(numbers);
  const filteredArray = numbersArray.filter((number) => Number.isInteger(number));
  const sortedArray = filteredArray.sort((a, b) => a - b);
  let median = null;
  let index = null;
    
  if (sortedArray.length % 2 === 0 ) {
    index = sortedArray.length / 2;
    median = (sortedArray[index] + sortedArray[index + 1]) / 2;
  } else {
    index = Math.trunc(sortedArray.length / 2);
    median = sortedArray[index];
    }
    
  return `Median in the array[${numbersArray}] is ${median}. `;
}

document.write(`Function #4: ${getMedian(1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7)} <br>`); 


// function #5

function filterEvenNumbers(...numbers) {
  const numbersArray = Array.from(numbers);
  const newArray = numbersArray.filter(number => number % 2 === 0);

  return `New array of even numbers transformed from the attay [${numbersArray}] 
    is [${newArray}].`;
}

document.write(`Function #5: ${filterEvenNumbers(1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7)} <br>`); 


// function #6

function countPositiveNumbers(...numbers) {
  const numbersArray = Array.from(numbers);
  let sum = 0;

  numbersArray.forEach(number => number > 0 ? sum++ : sum);

  return `The quantity of all positive elements in the array [${numbersArray}] is ${sum}.`;
}

document.write(`Function #6: ${countPositiveNumbers(4, 0, -5, 3, 7)} <br>`); 


// function #7

function getDividedByFive(...numbers) {
  const numbersArray = Array.from(numbers);
  const newArray = numbersArray.filter((number) => number % 5 === 0);

  return `New array of numbers divided by 5 from the array [${numbersArray}] is [${newArray}].`;
}

document.write(`Function #7: ${getDividedByFive(-5, 10, 0, 3, 7, 20)} <br>`); 

    
// function #8
  
function replaceBadWords(string) {
  const expressionArray = string.split(' ');
  const badWordsArray = ['fuck', 'shit'];
  const changedExpression = [].concat(expressionArray);
    
  expressionArray.forEach( (word, index) => {
    for (let i = 0; i < badWordsArray.length; i++) {
      if ( (word.toString()).includes(badWordsArray[i]) ) {
        changedExpression[index] = (word.toString()).replace(badWordsArray[i], '****')
      }   
    }
  })
    
  return `Polite version of the "${string}" is "${changedExpression.join(' ')}"`;
  }
  
document.write(`Function #8: ${replaceBadWords('You are fucking stupid bullshit!')} <br>`);


// function #9

function divideByThree(word) {
  const syllables =[];
  
  for (let i = 0; i< word.length; i +=3) {
    let oneSyllable = word.slice(i, i+3);
    
    syllables.push(oneSyllable);
    }
  
  return `Three letters syllables of the word "${word}" are [${syllables}].`;
}
  
document.write(`Function #9: ${divideByThree('abrakadabra')} <br>`);


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

return `The set of combinations from the letters contained in the word "${word}" is ${recursion(word)}.`
}
   
document.write(`Function #10: ${generateCombinations('wood')} <br>`);