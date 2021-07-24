import _ from 'lodash';

// Functions from previous homeworks
import {
  maxFromPrices, sumOfYorNumbers, withoutExactLetter, getPairs,
  filterEvenNumbers, calculateWordLetters, ukraine, getMyTaxes, Student, 
  ostap, randomColor, getCharacter, getPlanets, createIdGenerator
} from "./homeworks.js";

console.log("Function from HW-1:", +maxFromPrices(15, 20, 40));

console.log("Function from HW-2:", sumOfYorNumbers(5, 10, true));

console.log("Function from HW-3:", withoutExactLetter("o", "word"));

console.log("Function from HW-4:", getPairs());

console.log("Function from HW-5:", filterEvenNumbers(7, -3, 6, 2, 8.5, 9, 8, -6, 6, 1, 7));

console.log("Function from HW-6:", calculateWordLetters("wood"));

console.log("Function from HW-7:", getMyTaxes.call(ukraine, 2500));

console.log("Function from HW-8:", ostap.getInfo());

console.log("Function from HW-9:", randomColor());

console.log("Function from HW-11:", getCharacter());

//HW-12 function call
getPlanets();

console.log("Function from HW-13:", createIdGenerator().next().value);

// CSS compilation 
import "../../HW-13/styles.css";
import "../../HW-12/styles.css";

// Image import
import "../../HW-12/background.jpeg";





