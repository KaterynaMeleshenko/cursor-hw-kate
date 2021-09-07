// Setting variables
const priceRing = 15.678;
const priceEarrings = 123.965;
const priceBraсelet = 90.2345;

// Max and min prices
const maxFromPrices = Math.max(priceRing, priceEarrings, priceBraсelet);
const minFromPrices = Math.min(priceRing, priceEarrings, priceBraсelet);

// Total price of all items
const sumOfPrices = priceRing + priceEarrings + priceBraсelet;

// Rounding total price
const sumOfFloorPrices = Math.floor(priceRing) + Math.floor(priceEarrings) + Math.floor(priceBraсelet);
const roundSum = Math.round(sumOfFloorPrices / 100) * 100;

// Checking if even
const floorSum = Math.floor(sumOfPrices);
const isEven = floorSum % 2 === 0;

// Calculation of charge
const pay = 500;
const change = pay - sumOfPrices;

// Calculation of average
const meanSum = sumOfPrices / 3
const roundMeanSum = + meanSum.toFixed(2);

// Sum considering a discount
const discount = Math.random(); 
const payWithDiscount = sumOfPrices * (1 - discount);
const roundPayWithDiscount = + payWithDiscount.toFixed(2);

// Calculation of profit
const revenue = + (roundPayWithDiscount - sumOfPrices / 2).toFixed(4);

//Base level
console.warn("INPUT DATA:");
console.log("Ring, price: ", priceRing);
console.log("Earrings, price: ", priceEarrings);
console.log("Bracelet, price: ", priceBraсelet);
console.warn("BASE RESULTS:")
console.log('maxFromPrices: ', + maxFromPrices);
console.log('minFromPrices: ', + minFromPrices);
console.log('sumOfPrices: ', + sumOfPrices);
console.log('roundSum: ', + roundSum);
console.log('isEven: ', isEven);
console.log('change: ', + change);
console.log('roundMeanSum: ', + roundMeanSum);
console.log('roundPayWithDiscount: ', + roundPayWithDiscount);
console.log('revenue: ', + revenue);

document.writeln(`<div class="result"> <h3>RESULT FOR BASE LEVEL:</h3> Please, look at console. </div>`)

//Advanced
document.writeln(`<div class="result"> <h3>RESULT FOR ADVANCED LEVEL: </h3> 1) Maximum price: ${maxFromPrices} units; <br> 
  2) Minimum price: ${minFromPrices} units; <br> 
  3) Total price of all items: ${sumOfPrices} units; <br>
  4) Sum of items without coins, rounded to hundreds (as per math rules): ${roundSum} units;  <br>
  5) If even sum of items rounded down: ${isEven}; <br>
  6) Charge from 500 units (without rounding): ${change} units; <br>
  7) Average sum of all items rounded to 2nd decimal: ${roundMeanSum} units; <br>
  8) Sum to be paid (considering the discount) rounded to 2nd decimal: ${roundPayWithDiscount} units; <br>
  9) Profit from sales (considering the discount): ${revenue} units. <br> </div>`)