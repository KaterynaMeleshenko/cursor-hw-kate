// 1st function

function getMaxDigit(number) {
  const stringFromNumbers = number.toString(); // перевожу число в строку
  const split = stringFromNumbers.split('');   // разделяю строку на отдельные символы
  const arrayNumbers = split.map(Number);      // перевожу символы в числа
  const maxNumber = Math.max(...arrayNumbers); // массив превращаю в аргументы и ищу максимальное значение из
  return `Maximum value among numbers "${number}" is number ${maxNumber}.`;
}
 
document.write(`Function No 1: ${getMaxDigit(14354456464)} <br>`);
  

// 2st function
  
function putNumberInPower(num, pow) {
  let result = 1;
  if (pow > 0) {
    for (let i = 1;  i <= pow; i++) {
    result *= num;
    }
  }
  else if (pow < 0) {
    for (let i = 1;  i <= Math.abs(pow); i++) {
    result =  (1 / num) * result;
    }
  }
  else if (pow === 0) result = 1;

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

function calculateRevenue(salary, rate) {
  const taxesCoefficient = (1 - rate / 100);
  const revenue = + (salary * taxesCoefficient).toFixed(2);
  return `Total revenue from the salary in amount of ${salary} USD 
          excluding taxes of ${rate}% rate is ${revenue} USD.`;
}

document.write(`Function No 4: ${calculateRevenue(650, 19.5)} <br>`);


// 5th function

function getRandomNumber(n, m) {
  const maxNumber = Math.floor( Math.max(n, m) );
  const minNumber = Math.ceil( Math.min(n, m) );

// 1 was dded in order to include both min and max
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
      if (lettersArray[i] == letter) letterQuantity = letterQuantity + 1;
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
      return `${sumTotalNumber} is equal to ${ + (sumTotalNumber / 27).toFixed(2) } USD.`;
    }
    else if (sumSmall.indexOf('$') >= 0) {
      return `${sumTotalNumber} is equal to ${+ (sumTotalNumber *27).toFixed(2) } UAH.`;
    }
  return "Please choose $ or UAH as a currency.";
}

document.write(`Function No 7: ${convertCurrency('650 uah')} <br>`);


// 8th function

function getRandomPassword(numbers = 8) {
  const randomNumber = Math.trunc(Math.random() * 10);
  let password = randomNumber;
    for (let i = 2; i <= numbers; i++) {
    password += ( Math.trunc(Math.random() * 10) ).toString();
    }
    return `Your randomly created password is ${password}.`;
}

document.write(`Function No 8: ${getRandomPassword(6)} <br>`);


// 9th function

function deleteLetter(letter, word) {
  const letterNumber = word.split(letter).length - 1;
  let newWord = word;
  for (let i = 1; i <= letterNumber; i++) {
    const position = newWord.indexOf(letter);
    newWord = newWord.slice(0, position) + newWord.slice(position + 1);
  }
  return `The word "${word}" without letter "${letter}" is "${newWord}".`;
}

document.write(`Function No 9: ${deleteLetter("o", "godprogrammer")} <br>`);


// 10th function

function isPalyndrom(expression) {
  const newExpression = ( expression.toLowerCase().split(' ').join('') ).split('');
    function reverse(newExpression) {
    let array = [];
    for (let i = 0; i <= newExpression.length-1; i++) {
      array[i] = newExpression[(newExpression.length-1)-i];
      }
      return array;
    }
  if (newExpression.join('') == reverse(newExpression).join('')) {
    return `The expression "${expression}" is a polyndrom.`; 
  }
    return `The expression "${expression}" isn't a polyndrom.`; 
} 

document.write(`Function No 10: ${isPalyndrom("kololok")} <br>`);