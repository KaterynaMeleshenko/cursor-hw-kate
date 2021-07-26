import _ from 'lodash';

import {
  maxFromPrices, sumOfYorNumbers, withoutExactLetter, getPairs,
  filterEvenNumbers, calculateWordLetters, ukraine, getMyTaxes, Student, 
  ostap, randomColor, getCharacter, getPlanets, createIdGenerator
} from "./homeworks.js";

console.log("Function from HW-1: maxFromPrices is ",+maxFromPrices(15, 20, 40));

console.log("Function from HW-2: sumOfYourNumbers is ", sumOfYorNumbers(5, 10, true));

console.log("Function from HW-3: wordWithoutExactLetter is ", withoutExactLetter("o", "word"));

console.log("Function from HW-4: the pairs are ", getPairs());

console.log("Function from HW-5: filtered even numbers are ", filterEvenNumbers(7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7));

console.log("Function from HW-6: number of letters in the word is ", calculateWordLetters("wood"));

console.log("Function from HW-7: my taxes in Ukraine are ", getMyTaxes.call(ukraine, 2500));

console.log("Function from HW-8: info about Oastap is ", ostap.getInfo());

console.log("Function from HW-9: random colour is ", randomColor());

console.log("Function from HW-11: random character is ", getCharacter());

//HW-12 function call
getPlanets();

const idGenerator = createIdGenerator();
console.log("Function from HW-13: first step of generator is ", idGenerator.next().value);

import "../../HW-13/styles.css";
import "../../HW-12/styles.css";

import "../../HW-12/background.jpeg";





