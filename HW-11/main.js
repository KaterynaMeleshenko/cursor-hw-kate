const length = prompt('Please press the quantity of Chineese characters');

function getCharacter() {
  const now = Date.now().toString();
  const sign = + now.slice(now.length - 5, now.length);
  const character = String.fromCharCode(sign);

  return character;
}

async function getRandomChinese(length) {
  let chineseCharacters = '';
    
  for (let i = 0; i < length; i++) {
    const promise = new Promise (function(resolve, reject) {
      setTimeout(() => resolve(getCharacter()), 50);
    });

  chineseCharacters += await promise;
  }

  return chineseCharacters;
}

const promise = getRandomChinese(length);

promise.then(
  result => console.log(result)
).catch (error => {
  console.log(`It's unable to find chineese characters`);
})