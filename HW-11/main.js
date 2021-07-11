const length = prompt('Please press the quantity of Chineese characters');

function getCharacter() {
    const now = Date.now().toString();
    const sign = + now.slice(now.length-5, now.length);
    const character = String.fromCharCode(sign);
    return character;
  }

async function getRandomChinese(length) {
    let chineseCharacters = '';
    let i = 0;
    
    while (i < length) {
       const promise = new Promise (function(resolve, reject) {
              setTimeout(() => resolve(getCharacter()), 1000);
              i++;
       });

       chineseCharacters += await promise;
    }

    return chineseCharacters;
}

const promise = getRandomChinese(length);

promise.then(
result => console.log(result)
).catch (error => {
    console.log(`It's unable to find chineese characters`)
})