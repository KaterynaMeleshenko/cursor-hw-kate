const ukraine = { 
  tax: 0.195, 
  middleSalary: 1789, 
  vacancies: 11476, 
};
const latvia = { 
  tax: 0.25, 
  middleSalary: 1586, 
  vacancies: 3921, 
};
const litva = { 
  tax: 0.15, 
  middleSalary: 1509, 
  vacancies: 1114, 
};

// Function #1

function getMyTaxes(salary) {
  const myTax = salary * this.tax;
  
  return + myTax.toFixed(2);
}

const result_1 = getMyTaxes.call(latvia, 4000);

console.log(`My taxes from 4000 USD would be ${result_1} USD in Latvia.`);


// Function #2

function getMiddleTaxes() {
  const middleTaxes = this.middleSalary * this.tax;

  return + middleTaxes.toFixed(2);
}

const result_2 = getMiddleTaxes.call(ukraine);

console.log(`Middle taxes for IT specialists in Ukraine are ${result_2} USD.`);


// Function #3

function getTotalTaxes() {
  const totalTaxes = this.middleSalary * this.tax * this.vacancies;

  return + totalTaxes.toFixed(2);
}
  
const result_3 = getTotalTaxes.call(litva);
  
console.log(`Total taxes from IT specialists in Litva are ${result_3} USD.`);


// Function #4

function getMySalary(country) {
  function countryInfo(country) {
  const salary = + (Math.random() * 501 + 1500).toFixed(2);
  const taxes = country.tax;
  let countryInformation = {
      salary: salary,
      taxes: taxes,
      profit: + ( salary * (1 - taxes) ).toFixed(2),
      }

  return console.log(countryInformation);
 }
  countryInfo(country);
  let i = 0; 
  do {
      setTimeout(countryInfo, 3000, country);
      i++;
  } while (i < 10);
  
}

getMySalary(litva);

// function getMySalary(country) {
//     for (let i = 0; i < 10; i++) {
//     setTimeout( function() {
//         const salary = + (Math.random() * 501 + 1500).toFixed(2);
//         const taxes = country.tax;
//         let countryInfo = {
//             salary: salary,
//             taxes: taxes,
//             profit: + ( salary * (1 - taxes) ).toFixed(2),
//             }
  
//     return console.log(countryInfo);
//     }, 10000, country)
//   }
// }
//   getMySalary(litva);
  