// function 1

function getRandomArray(length, min, max) {
    let randomArray = [];
        for (let i = 0; i < length; i++) {
            randomArray.push( Math.trunc(Math.random() * (max - min + 1) + min) )
        }
        return randomArray;
}

console.log(getRandomArray(8, 5, 20));


// // function 2

// function getModa(...numbers) {
//     let numbersArray = Array.from(numbers);
//     let repeatedNumbers = [];
//     for (let i = 0; i < numbersArray.length; i++) {
//         if (numbersArray[i].isInteger && la)
//     }
//     return console.log(numbersArray);

// }

// console.log(getModa(1, 2, 3))


// function 2

// function getModa(...numbers) {
//     let numbersArray = Array.from(numbers);
//     const sortedArray = numbersArray.sort((a, b) => a - b);
//     console.log(sortedArray);
//     for (let i = 0; i < sortedArray.length; i++) {
//         let count = 1;
//         let newArray = [];
//             if (sortedArray[i] == sortedArray[i + 1] && sortedArray[i + 1] !== sortedArray[i + 2]) {
//                 count += 1;
//                 newArray.push([i, count]);
//                 console.log(i, count, sortedArray[i]);
//             } else if 
//               (sortedArray[i] == sortedArray[i + 1] && sortedArray[i + 1] !== sortedArray[i + 2]) {
//                 count += 1;
//                 newArray.push([i, count]);
//                 console.log(i, count, sortedArray[i]);
            
//             else if (sortedArray[i] < sortedArray[i + 1]) {
//                 continue;
//             }
//         //return newArray;
//     }

// }
// console.log(getModa(1, 5, -3, 6, 5, 8, 9, 5, 6, 5));

// function 2 

function getModa(...numbers) {
   let numbersArray = Array.from(numbers);
   let filteredArray = numbersArray.filter((number) => Number.isInteger(number) );
   let repetition = [];
   let result = filteredArray.forEach(number => repetition[number] ? repetition[number]++ : repetition[number] = 1);
   return console.log(repetition);

}
console.log(getModa(1, 5, -3, 6, 5, 8.7, 9, 5, 6, 5));

