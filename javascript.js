const gridValue = document.querySelector('.grid-size')
const sketchContainer = document.querySelector('.sketch.container')
const blackBtn = document.querySelector('#black')
const greenBtn = document.querySelector('#green')
const redBtn = document.querySelector('#red')
const blueBtn = document.querySelector('#blue')
const eraserBtn = document.querySelector('#eraser')


let size = 0;
gridValue.addEventListener('click', e => {
    // while (sketchContainer.firstChild) {
    //     sketchContainer.firstChild.remove()
    // }
    size = prompt("What grid size do you want? E.g. 10 = 100 x 100 grid")
    if (size <= 100) {
        size = size * 10
        drawGrid(size, size);
        makeSmallGrids(size);
    } else alert("Entered value has to a number and lower than 100")
   
})

function drawGrid(width, height) {
    width = sketchContainer.style.width = size + "px"
    height = sketchContainer.style.height = size + "px"
    newGrid = width * height;
}
 
function makeSmallGrids(value) {
    const div = document.createElement('div')
    div.classList.add('smallDivs')
    let i = 0;
    while (i < value) {
        sketchContainer.appendChild(div.cloneNode(true))
        i++;
        }
}

//     const div = document.createElement('div')
//     div.classList.add('sketchBox')
    
//     let i = 0;
//     while (i < size) {
//         sketchContainer.appendChild(div.cloneNode(true))
//         i++
//     }
// }






// const colors = {
//         black: 'black',
//         green: 'green',
//         red: 'red',
//         blue: 'blue',
//         eraser: 'eraser'
//     }
// function pickedColor () {
//     switch(color) {
//         case blackBtn.addEventListener('click'):
//             color = colors.black
//             break;
        
//     }
//     let currentColor = ''
//     e.target.style.backgroundColor = colors[currentColor];
// }

// sketchBox.addEventListener('mouseover', pickedColor);