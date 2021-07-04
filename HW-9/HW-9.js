// // BASIC
document.body.innerHTML = '<div id="fixedBlocks"></div>'

const setFixedColors = () => {
    let randomColorsNumber = () => {
        const randomNumber = Math.trunc( (Math.random() * 256) );
        return randomNumber;
    }
    return `rgb(${randomColorsNumber()}, ${randomColorsNumber()}, ${randomColorsNumber()})`;
}

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const blockInfo = '<span class="fixedBlock" style="padding: 50px 50px; background-color:' + setFixedColors() + '"><span>';
        const area = document.getElementById('fixedBlocks');
        area.insertAdjacentHTML('afterend', blockInfo);     
    }
}

generateBlocks();


// ADVANCED 
// document.body.innerHTML = '<div id="changableBlocks"></div>'

// const setChangableColors = () => {
    
// setInterval(() => setFixedColors, 1000);

// }

// console.log(setChangableColors());
// // function generateBlocksInterval() {
// //     for (let i = 0; i < 25; i++) {
// //         const blockInfo = '<span class="changableBlock" style="margin: 1px; padding: 50px 50px; border: solid black; background-color:' + setChangableColors() + '"><span>';
// //         const area = document.getElementById('changableBlocks');
// //         area.insertAdjacentHTML('afterend', blockInfo);     
// //     }
// // }

// //generateBlocksInterval();