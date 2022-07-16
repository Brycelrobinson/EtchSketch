const blockCtn = document.querySelector('#block-container');
const setGrid = document.querySelector('#setGrid');
const eraseBtn = document.querySelector('#erase');

let gridSize = 16;


setGrid.addEventListener('click', ()=> {
    gridSize = prompt('Select Grid size 1-100');
    pixelAmount(gridSize);
})

eraseBtn.addEventListener('click', () => {
    erase();
})

//Creates grid
function Grid(gridSize){
    let gridNumber = (gridSize * gridSize)
    blockCtn.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    blockCtn.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for(let i = 0; i < ((gridNumber)); i++){
        const blocks = document.createElement('div');
        blocks.classList.add('blocks');
        blockCtn.appendChild(blocks);
    }

    const block = document.querySelectorAll('.blocks');

    block.forEach(box => {
        box.addEventListener('mouseover', ()=>{
            box.classList.add('blocksClicked');
        })
    })
}


function pixelAmount(gridSize){
    const gridPixels = blockCtn.querySelectorAll('div');
    gridPixels.forEach(gridPixels => gridPixels.remove());
    Grid(gridSize)
}

function erase(){
    const gridPixels = blockCtn.querySelectorAll('div');
    gridPixels.forEach(gridPixels => gridPixels.remove());
    Grid(gridSize)
}

Grid(gridSize);