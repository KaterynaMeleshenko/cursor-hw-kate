// 1st function

function getMaxDigit(number) {
    let stringFromNumbers = number.toString(); // перевожу число в строку
    let split = stringFromNumbers.split('');   // разделяю строку на отдельные символы
    let arrayNumbers = split.map(Number);      // перевожу символы в числа
    let maxNumber = Math.max(...arrayNumbers); // массив превращаю в аргументы и ищу максимальное значение из
    return maxNumber;
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

      return result;
  }
  
document.write(`Function No 2: ${putNumberInPower(2, -3)} <br>`);
  
  
// 3rd function
  
function correctName(name) {
    let smallLetters = name.toLowerCase();
    let firstCapitalLetter =name[0].toUpperCase();
    let fullName = firstCapitalLetter + smallLetters.substring(1);
    return fullName;
}
  
document.write(`Function No 3: ${correctName('kaTya')} <br>`);

// 4th function

function calculateRevenue(salary, rate) {
  let taxesCoefficient = (1 - rate / 100);
  let revenue = salary * taxesCoefficient;
  return revenue;
}

document.write(`Function No 4: ${calculateRevenue(650, 19.5)} <br>`);

// 5th function

function getRandomNumber(n, m) {
  let maxNumber = Math.floor( Math.max(n, m) );
  let minNumber = Math.ceil( Math.min(n, m) );

  // 1 added in order to include both min and max
  let randomNumber = Math.random() * (maxNumber- minNumber + 1) + minNumber 
  return Math.trunc(randomNumber);
}

document.write(`Function No 5: ${getRandomNumber(-500, 400)} <br>`);

// 6th function

function countLetter(letter, word) {
  let letters = word.split('');
  let lettersNumber = word.length;
  let letterQuantity = 0;
    for (let i = 0; i < lettersNumber; i++) {
      if (letters[i] == letter) letterQuantity = letterQuantity + 1;
      }
    return console.log(letterQuantity);
}

document.write(`Function No 6: ${countLetter('b', 'abrakadabra')} <br>`);
