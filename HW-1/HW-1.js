// Задаю переменные 
const priceRing = 15.678;
const priceEarrings = 123.965;
const priceBraсelet = 90.2345;

// Нахожу максимальную и минимальную цены
const maxFromPrices = Math.max(priceRing, priceEarrings, priceBraсelet);
const minFromPrices = Math.min(priceRing, priceEarrings, priceBraсelet);

// Нахожу общую сумму всех товаров
const sumOfPrices = priceRing + priceEarrings + priceBraсelet;

// Нашла сумму всех товаров (с откинутыми цифрами после запятой) и округлила ее до сотен по правилам математики
const sumOfFloorPrices = Math.floor(priceRing) + Math.floor(priceEarrings) + Math.floor(priceBraсelet);
const roundSum = Math.round(sumOfFloorPrices / 100) * 100;

// Суммирую цены и общую сумму округляю в меньшую сторону. 
//Полученную сумму проверяю на четность и нечетность
const floorSum = Math.floor(sumOfPrices);
const isEven = floorSum % 2 === 0;

// рассчитываю сдачу с 500 грн
const pay = 500;
const change = pay - sumOfPrices;

// Нахожу среднее арифметическое из полученных цен  
//(с учетом, что количество цен - фиксированное) и округляю его до 2го знака после запятой
const meanSum = sumOfPrices / 3
const roundMeanSum = + meanSum.toFixed(2);

// Рассчитываю сумму с учетом скидки, округленную до 2ух знаков после запятой
const discount = Math.random(); 
const payWithDiscount = sumOfPrices * (1 - discount);
const roundPayWithDiscount = + payWithDiscount.toFixed(2);

// Расчитываю чистую прибыль
let revenue = + (roundPayWithDiscount - sumOfPrices / 2).toFixed(4);

//Base level
console.warn("BASE")
console.log('maxFromPrices: ' + maxFromPrices);
console.log('minFromPrices: ' + minFromPrices);
console.log('sumOfPrices: ' + sumOfPrices);
console.log('roundSum: ' + roundSum);
console.log('isEven: ' + isEven);
console.log('change: ' + change);
console.log('roundMeanSum: ' + roundMeanSum);
console.log('roundPayWithDiscount: ' + roundPayWithDiscount);
console.log('revenue: ' + revenue);

//Advanced
document.writeln("<b>ADVANCED </b> <br>")
document.writeln(`1) Максимальная цена: ${maxFromPrices}; <br> 
  2) Минимальная цена: ${minFromPrices}; <br> 
  3) Общая сумма всех товаров: ${sumOfPrices}; <br>
  4) Сумма товаров без копеек, округленная до сотен (по правилам математики): ${roundSum}; <br>
  5) Сумма товаров, округленная в меньшую сторону: ${isEven}; <br>
  6) Сдача с 500 грн (без округлений): ${change}; <br>
  7) Среднее значение суммы всех товаров, округленное до 2го знака после запятой: ${roundMeanSum}; <br>
  8) Сумма к оплате (с учетом скидки), округленная до 2го знака после запятой: ${roundPayWithDiscount}; <br>
  9) Чистая прибыль от продажи товара (со скидкой): ${revenue}; <br>`)


