const mainGrid = document.getElementById('main-grid');

const gridRows = 20;
const gridCols = 32;

for (let i = 0; i < gridRows * gridCols; i++) {
    const cell = document.createElement('div');
    cell.classList.add('canvas-cell');
    cell.addEventListener("mouseover", triggerMouse)
    mainGrid.appendChild(cell);
}

let selectedColor;
let isDrawing = false;
let clickClear = document.getElementsByClassName("button")[0]
clickClear.addEventListener("click", clearEverything)

let palette = document.getElementsByClassName("color-swatch")
for (let i=0; i < palette.length; i++) {
    palette[i].addEventListener("click", clickOnPalette)
}

function clickOnPalette(e){
    const styles = window.getComputedStyle(e.target)
    selectedColor = styles.backgroundColor
    console.log(selectedColor)
}


mainGrid.addEventListener("mousedown", mousePressed)
window.addEventListener("mouseup", mouseReleased)

function mousePressed (e) {
    isDrawing = true;
    e.target.style.backgroundColor = selectedColor;
    console.log(isDrawing)
}

function mouseReleased (e) {
    isDrawing = false;
    console.log(isDrawing)
}

function triggerMouse (e) {
    if (isDrawing === true){
        e.target.style.backgroundColor = selectedColor
    }
}

function clearEverything (e) {
    allCells = document.getElementsByClassName("canvas-cell")
    for (cell of allCells){
        cell.style.backgroundColor = "white"
    }
}