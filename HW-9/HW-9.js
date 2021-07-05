// BASIC
const squares = prompt('Please type the required number of squares');
const rows = Math.ceil( Math.sqrt(squares) );

document.body.innerHTML = `<div id="blocks" style="display: flex; flex-wrap: wrap; 
  width: ${rows * 50}px; margin: auto"></div>`
const area = document.getElementById('blocks'); 


const randomColor = () => {
  const firstRandomNumber = Math.trunc( (Math.random() * 256) );
  const secondRandomNumber = Math.trunc( (Math.random() * 256) );
  const thirdRandomNumber = Math.trunc( (Math.random() * 256) );
  
  return `rgb(${firstRandomNumber}, ${secondRandomNumber}, ${thirdRandomNumber})`;
}

function generateBlocks(squares) {
  area.insertAdjacentHTML('afterbegin', `<div style="width: ${rows * 50}px; height:100px">BASIC TASK RESULT</div>`);

  for (let i = 0; i < squares; i++) {
    const blockInfo = `<div class="fixedBlock" style="width: 50px; height: 50px; background-color: 
      ${randomColor()}"></div>`;

    area.insertAdjacentHTML('afterbegin', blockInfo);   
    }
}

generateBlocks(squares);


// ADVANCED 

function generateBlocksInterval(squares) {
  for (let i = 0; i < squares; i++) {
    const blockInfo = `<div class="changableBlock" style="width: 50px; height: 50px;"></div>`;
    area.insertAdjacentHTML('beforeend', blockInfo);
    let newBlock = Array.from(document.getElementsByClassName('changableBlock'));
    
    setInterval(() => {
      newBlock.forEach (block => {
      block.style.backgroundColor = randomColor();
      })
    }, 1000);
  }

  area.insertAdjacentHTML('beforeend', `<div style="width: ${rows * 50}px; height:100px">ADVANCED TASK RESULT</div>`);
}

generateBlocksInterval(squares);