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
  
  function powerForNumber(num, pow) {
    let result = 1;
    for (let i = 1;  i <= pow; i++) {
      result *= num;
    }
      return result;
  }
  
  document.write(`Function No 2: ${powerForNumber(6, 4)} <br>`);
  
  
  // 3rd function
  
  function correctName(name) {
    let smallLetters = name.toLowerCase();
    let firstCapitalLetter =name[0].toUpperCase();
    let fullName = firstCapitalLetter + smallLetters.substring(1);
    return fullName;
  }
  
  document.write(`Function No 3: ${correctName('kaTya')} <br>`);