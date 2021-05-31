// Задаю переменные 
let priceRing = 15.678;
let priceEarrings = 123.965;
let priceBraсelet = 90.2345;

// Нахожу максимальную и минимальную цены
let maxFromPrices = Math.max(priceRing, priceEarrings, priceBraсelet);
let minFromPrices = Math.min(priceRing, priceEarrings, priceBraсelet);

// Нахожу общую сумму всех товаров
let sumOfPrices = priceRing + priceEarrings + priceBraсelet;

// Нашла сумму всех товаров (с откинутыми цифрами после запятой) и округлила ее до сотен по правилам математики
let sumOfFloorPrices = Math.floor(priceRing) + Math.floor(priceEarrings) + Math.floor(priceBraсelet);
let roundSum = Math.round(sumOfFloorPrices/100)*100;


// Суммирую цены и общую сумму округляю в меньшую сторону. Полученную сумму проверяю на четность и нечетность
let floorSum = Math.floor(sumOfPrices);

if (floorSum % 2 === 0) {
	let isSumEven = "четная";
} else {
	isSumEven = "нечетная";
};

// рассчитываю сдачу с 500 грн
const pay = 500;
let change = pay - (sumOfPrices);

// Нахожу среднее арифметическое из полученных цен  (с учетом, что количество цен - фиксированное) и округляю его до 2го знака после запятой
let meanSum = (sumOfPrices)/3
let roundMeanSum = meanSum.toFixed(2);

// Рассчитываю сумму с учетом скидки, округленную до 2ух знаков после запятой
let discount = Math.random(); 
let payWithDiscount = sumOfPrices*(1-discount);
let roundPayWithDiscount = payWithDiscount.toFixed(2);

// Расчитываю чистую прибыль
let revenue = roundPayWithDiscount - sumOfPrices/2;


//Base level

console.log(maxFromPrices);
console.log(minFromPrices);
console.log(sumOfPrices);
//console.log(sumOfFloorPrices);
console.log(roundSum);
//console.log(floorSum);
console.log(isSumEven);
console.log(change);
console.log(roundMeanSum);
//console.log(discount);
console.log(roundPayWithDiscount);
console.log(sumOfPrices/2);
console.log(revenue);

//Advanced

document.writeln(`Максимальная цена: ${maxFromPrices}; <br> 
				  Минимальная цена: ${minFromPrices}; <br> 
				  Общая сумма всех товаров: ${sumOfPrices}; <br>
				  Сумма товаров без копеек, округленная до сотен (по правилам математики): ${roundSum}; <br>
				  Сумма товаров, округленная в меньшую сторону: ${isSumEven}; <br>
				  Сдача с 500 грн (без округлений): ${change}; <br>
				  Среднее значение суммы всех товаров, округленное до 2го знака после запятой: ${roundMeanSum}; <br>
				  Сумма к оплате (с учетом скидки), округленная до 2го знака после запятой: ${roundPayWithDiscount}; <br>
				  Чистая прибыль от продажи товара (со скидкой): ${revenue.toFixed(4)}; <br>`)

