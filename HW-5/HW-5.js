// function #1

function getRandomArray(length, min, max) {
  let randomArray = [];

  for (let i = 0; i < length; i++) {
    randomArray.push( Math.trunc(Math.random() * (max - min + 1) + min) )
  }

  return `Random array of ${length} elements with ${min} as a minimum
    element and ${max} as a maximum element is [${randomArray}].`;
}

//console.log(getRandomArray(8, 5, 20));
document.write(`Function #1: ${getRandomArray(8, 5, 20)} <br>`);


// // function 2

// function getModa(...numbers) {
//     let numbersArray = Array.from(numbers);
//     let repeatedNumbers = [];
//     for (let i = 0; i < numbersArray.length; i++) {
//         if (numbersArray[i].isInteger && la)
//     }
//     return console.log(numbersArray);

// }

// console.log(getModa(1, 2, 3))


// function 2

// function getModa(...numbers) {
//     let numbersArray = Array.from(numbers);
//     const sortedArray = numbersArray.sort((a, b) => a - b);
//     console.log(sortedArray);
//     for (let i = 0; i < sortedArray.length; i++) {
//         let count = 1;
//         let newArray = [];
//             if (sortedArray[i] == sortedArray[i + 1] && sortedArray[i + 1] !== sortedArray[i + 2]) {
//                 count += 1;
//                 newArray.push([i, count]);
//                 console.log(i, count, sortedArray[i]);
//             } else if 
//               (sortedArray[i] == sortedArray[i + 1] && sortedArray[i + 1] !== sortedArray[i + 2]) {
//                 count += 1;
//                 newArray.push([i, count]);
//                 console.log(i, count, sortedArray[i]);
            
//             else if (sortedArray[i] < sortedArray[i + 1]) {
//                 continue;
//             }
//         //return newArray;
//     }

// }
// console.log(getModa(1, 5, -3, 6, 5, 8, 9, 5, 6, 5));

// function 2 

// function getModa(...numbers) {
//    let numbersArray = Array.from(numbers);
//    let filteredArray = numbersArray.filter((number) => Number.isInteger(number) );
//    let repetition = [];
//    let result = filteredArray.forEach(number => repetition[number] ? repetition[number]++ : repetition[number] = 1);
//    return console.log(repetition);

// }
// console.log(getModa(1, 5, -3, 6, 5, 8.7, 9, 5, 6, 5));


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

//console.log(getAverage(1, 5, -3, 6, 5, 8.5, 9, 5, 5, 7, 6));
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

//console.log(getMedian(1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7));
document.write(`Function #4: ${getMedian(1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7)} <br>`); 


// function #5

function filterEvenNumbers(...numbers) {
  const numbersArray = Array.from(numbers);
  const newArray = numbersArray.filter(number => number % 2 === 0);

  return `New array of even numbers transformed from the attay [${numbersArray}] 
    is [${newArray}].`;
}

//console.log(filterEvenNumbers(1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7));
document.write(`Function #5: ${filterEvenNumbers(1, 7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7)} <br>`); 


// function #6

function countPositiveNumbers(...numbers) {
  const numbersArray = Array.from(numbers);
  let sum = null;

  numbersArray.forEach(number => number > 0 ? sum += number : sum);

  return `Sum of all positive elements in the array [${numbersArray}] is ${sum}.`;
}

//console.log(countPositiveNumbers(-5, 3, 7));
document.write(`Function #6: ${countPositiveNumbers(-5, 3, 7)} <br>`); 


// function #7

function getDividedByFive(...numbers) {
  const numbersArray = Array.from(numbers);
  const newArray = numbersArray.filter((number) => number % 5 === 0);

  return `New array of numbers divided by 5 from the array [${numbersArray}] is [${newArray}].`;
}

//console.log(getDividedByFive(-5, 10, 3, 7, 20));
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
  
  //console.log(replaceBadWords('You are fucking stupid bullshit!'));
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
  
  //console.log(divideByThree('abrakadabra')); 
  document.write(`Function #9: ${divideByThree('abrakadabra')} <br>`);


// function #10

function generateCombinations(word) {
  const letters = word.split('');
  return letters;
}

console.log(generateCombinations('word'));