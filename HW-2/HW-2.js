let firstNum = null;
let secondNum = null;

// verification of user's first тumber with alert in case of mistake and 
// promt in cycle for a new try

do {firstNum = prompt("Please, set the first integer number for calculation.", 0)
  }
while (isNaN(+firstNum) || firstNum === null || !Number.isInteger(+firstNum));

document.write(`Your first number is ${firstNum}.<br>`);

// verification of user's second number with alert in case of mistake and 
// promt in cycle for a new try

do {secondNum = prompt("Please, set the second integer number for calculation.", 0);
}
while (isNaN(+secondNum) || secondNum === null || !Number.isInteger(+secondNum)) {
  
}

document.write(`Your second number is ${secondNum}.<br>`);

// to become sure that the initial number is less than the second number

const initialNum = Math.min(firstNum,secondNum);
const lastNum = Math.max(firstNum,secondNum);

// ask user either they want to skip even numbers

const evenSkip = confirm("Do you want to skip even numbers in the calculation?");

let total = 0;

// main calculation given the confirmation about even numbers

for (let i = initialNum; i <= lastNum; i++) {
  if (!evenSkip || i % 2 ) {
  total += 1;
  }
}

// set a virable for a conclusion

let decision = "";

if (evenSkip) {
  document.write(`You decided to skip even numbers.<br>`);
  decision = "excluding even numbers";
} else {
  document.write(`You decided not to skip even.<br>`);
  decision = "including even numbers";
  }

document.write(`Total sum of all numbers between ${firstNum} and ${secondNum} (${decision}) is ${total}.`)