const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';

let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const container = document.getElementById("grid-container");
const clearBtn = document.getElementById("clearBtn");
const resizeBtn = document.getElementById("resize-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorBtn = document.getElementById("color-btn");
const paintBtn = document.getElementById("paint-btn")
const colorPicker = document.getElementById("color-picker");
const input = document.getElementById("new-size");

//Buttons/input
colorBtn.addEventListener("click", function() {
    currentMode = 'color';
});

clearBtn.addEventListener("click", function() {
    clearGrid();
    createGrid(currentSize);
});

resizeBtn.addEventListener("click", function() {
    const newSize = document.getElementById("new-size").value;
    resizeGrid(newSize);
    clearText();
});

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("resize-btn").click();
    }
});

eraserBtn.addEventListener("click", function() {
    currentMode = "eraser";
});

paintBtn.addEventListener("click", function() {
    document.getElementById("color-picker").click();
    clearGrid();
    createGrid(currentSize);
});

colorPicker.onchange = (e) => setCurrentColor(e.target.value);

function setCurrentColor(newColor) {
    currentColor = newColor;
};

function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
};

//Accept only inputs <= 100
function handleChange(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 100) input.value = 100;
};

//Clear input box
function clearText() {
    document.getElementById("new-size").value = "";
};

function changeColor(e) {
    if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#f7f7e2';
    }
};

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.addEventListener('mouseover', changeColor);
        container.appendChild(box).className = "grid-item";
    };
};

function resizeGrid(newSize) {
    currentSize = newSize;
    clearGrid();
    createGrid(newSize);
};

function clearGrid() {
    container.innerHTML = "";
};

window.onload = () => {
    createGrid(DEFAULT_SIZE);
};