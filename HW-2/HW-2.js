let firstNum;
let secondNum;
let evenSkip;

let total;

// verification of user's first тumber with alert in case of mistake and 
// promt in cycle for a new try

firstNum = prompt("Please, set the first integer number for calculation.", 0);

while (isNaN(+firstNum) || firstNum === null || !Number.isInteger(+firstNum)) {
    alert("It's not the required type of number! Please, try again.");
	firstNum = +prompt("Please, set the first integer number for calculation.", 0);
}

document.write(`Your first number is ${firstNum}.<br>`);

// verification of user's second number with alert in case of mistake and 
// promt in cycle for a new try

secondNum = prompt("Please, set the second integer number for calculation.", 0);

while (isNaN(+secondNum) || secondNum === null || !Number.isInteger(+secondNum)) {
  alert("It's not the required type of number! Please, try again.");
  secondNum = +prompt("Please, set the second integer number for calculation.", 0);
}

document.write(`Your second number is ${secondNum}.<br>`);

// to become sure that the initial number is less than the second number

let initialNum = Math.min(firstNum,secondNum);
let lastNum = Math.max(firstNum,secondNum);

// ask user either they want to skip even numbers

evenSkip = confirm("Do you want to skip even numbers in the calculation?");

total = 0;

// main calculation given the confirmation about even numbers

for (initialNum; initialNum <= lastNum; initialNum++) {
  if (evenSkip && initialNum % 2 == 0) {
    continue;
    }
  total += initialNum;
}

// set a virable for a conclusion

let decision;

if (evenSkip) {
  document.write(`You decided to skip even numbers.<br>`);
  decision = "excluding even numbers";
}
else {
  document.write(`You decided not to skip even.<br>`);
  decision = "including even numbers";
  }

document.write(`Total sum of all numbers between ${firstNum} and ${secondNum} (${decision}) is ${total}.`);