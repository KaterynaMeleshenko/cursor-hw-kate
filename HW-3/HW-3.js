// 1st function

function getMaxDigit(number) {
  const stringFromNumbers = number.toString(); 
  const split = stringFromNumbers.split('');   
  const arrayNumbers = split.map(Number);      
  const maxNumber = Math.max(...arrayNumbers);
  return `Maximum value among numbers "${number}" is number ${maxNumber}.`;
}
 
document.write(`Function No 1: ${getMaxDigit(14354456464)} <br>`);
  

// 2st function
  
function putNumberInPower(num, pow) {
  let result = 1;
  if (pow === 0) result = 1;
  else {
    for (let i = 1;  i <= Math.abs(pow); i++) {
      if (pow > 0) result *= num;
      else if (pow < 0) result =  (1 / num) * result;
    }
  }
  return `Number ${num} in power ${pow} is equal to ${result}.`;
}

document.write(`Function No 2: ${putNumberInPower(2, -3)} <br>`);
  
  
// 3rd function
  
function correctName(name) {
  const smallLetters = name.toLowerCase();
  const firstCapitalLetter =name[0].toUpperCase();
  const fullName = firstCapitalLetter + smallLetters.substring(1);
  return `Correct spelling of the name "${name}" is "${fullName}".`;
}
  
document.write(`Function No 3: ${correctName('kaTya')} <br>`);


// 4th function

const calculateRevenue = (salary, rate) => {
  return `Total revenue from the salary in amount of ${salary} USD 
         excluding taxes of ${rate}% rate is 
         ${parseInt(salary * (1 - rate / 100)).toFixed(2)}`;
}

document.write(`Function No 4: ${calculateRevenue(650, 19.5)} <br>`);


// 5th function

function getRandomNumber(n, m) {
  const maxNumber = Math.floor( Math.max(n, m) );
  const minNumber = Math.ceil( Math.min(n, m) );
  const randomNumber = Math.random() * (maxNumber- minNumber + 1) + minNumber 
  return `Random number between ${minNumber} and ${maxNumber} is ${Math.trunc(randomNumber)}.`;
}

document.write(`Function No 5: ${getRandomNumber(-500, 400)} <br>`);


// 6th function

function countLetter(letter, word) {
  const lettersArray = word.split('');
  const lettersNumber = word.length;
  let letterQuantity = 0;
    for (let i = 0; i < lettersNumber; i++) {
      if (lettersArray[i] == letter) letterQuantity += 1;
      }
    return `${letterQuantity} letter(s) "${letter}" exist(s) in the word "${word}".`;
}

document.write(`Function No 6: ${countLetter('o', 'godprogrammer')} <br>`);


// 7th function

function convertCurrency(sum) {
  const sumSmall = sum.toLowerCase();
  const sumTotal = sum.match(/\d+/g); // number pattern
  const sumTotalNumber = sumTotal.map(Number);
    if (sumSmall.indexOf('uah') >= 0) {
      return `${sumTotalNumber} UAH is equal to ${ + (sumTotalNumber / 27).toFixed(2) } USD.`;
    }
    else if (sumSmall.indexOf('$') >= 0) {
      return `${sumTotalNumber} USD is equal to ${+ (sumTotalNumber *27).toFixed(2) } UAH.`;
    }
  return "Please choose $ or UAH as a currency.";
}

document.write(`Function No 7: ${convertCurrency('650 uah')} <br>`);


// 8th function

function getRandomPassword(numbers = 8) {
  let password = "";
    for (let i = 1; i <= numbers; i++) {
    password += ( Math.trunc(Math.random() * 10) ).toString();
    }
    return `Your randomly created password is ${password}.`;
}

document.write(`Function No 8: ${getRandomPassword(6)} <br>`);


// 9th function

const deleteLetter = (letter, word) => {
  return `The word "${word}" without letter "${letter}"
          is "${word.split(letter).join('')}".`;
}

document.write(`Function No 9: ${deleteLetter("m", "godprogrammer")} <br>`);


// 10th function

function isPalindrome(expression) {
  const newExpression = expression.toLowerCase().split(' ').join('');
  const arrayFromExpression = newExpression.split('');
  const reverseExpression = ((arrayFromExpression.reverse() ).join('') ).toString();
  if (newExpression == reverseExpression) {
    return `The expression "${expression}" is a palindrome.`; 
  }
    return `The expression "${expression}" isn't a palindrome.`; 
} 

document.write(`Function No 10: ${isPalindrome("Dogma I am God")} <br>`);


// 11th function

function deleteDublicateLetter(expression) {
  let newExpression = '';
  for (let i = 0; i < expression.length; i++) {
    if (expression.lastIndexOf(expression[i]) == expression.indexOf(expression[i])) {
    newExpression += expression[i];
    }
  }
  return `Non-dublicated letter(s) in the expression "${expression}" is (are) "${newExpression}".`;
}
  
document.write(`Function No 11: ${deleteDublicateLetter("bhbjhvkjvnlskcmlnb")} <br>`);