// BASIC

document.body.innerHTML = `<div id="blocks" style="display: flex; flex-wrap: wrap; 
  width: 250px; margin: auto"></div>`
const area = document.getElementById('blocks'); 


const randomColor = () => {
  const firstRandomNumber = Math.trunc( (Math.random() * 256) );
  const secondRandomNumber = Math.trunc( (Math.random() * 256) );
  const thirdRandomNumber = Math.trunc( (Math.random() * 256) );
  
  return `rgb(${firstRandomNumber}, ${secondRandomNumber}, ${thirdRandomNumber})`;
}

function generateBlocks() {
  area.insertAdjacentHTML('afterbegin', '<div style="width: 250px; height:100px">BASIC TASK RESULT</div>');

  for (let i = 0; i < 25; i++) {
    const blockInfo = `<div class="fixedBlock" style="width: 50px; height: 50px; background-color: 
      ${randomColor()}"></div>`;

    area.insertAdjacentHTML('afterbegin', blockInfo);   
    }
}

generateBlocks();


// ADVANCED 

function generateBlocksInterval() {
  for (let i = 0; i < 25; i++) {
    const blockInfo = `<div class="changableBlock" style="width: 50px; height: 50px;"></div>`;
    area.insertAdjacentHTML('beforeend', blockInfo);
    let newBlock = Array.from(document.getElementsByClassName('changableBlock'));
    
    setInterval(() => {
      newBlock.forEach (block => {
      block.style.backgroundColor = randomColor();
      })
    }, 1000);
  }

  area.insertAdjacentHTML('beforeend', '<div style="width: 250px; height:100px">ADVANCED TASK RESULT</div>');
}

generateBlocksInterval();