const container = document.getElementById("container");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function() {
    startButton();
});

function startButton () {
    clearGrid();

    let userInput = prompt("What size sides would you like for your grid?");
    createGrid(userInput, userInput);
};

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(let i = 0; i < (rows * cols); i++) {
        let box = document.createElement("div");
        //box.innerText = (i + 1);
        container.appendChild(box).className = "grid-item";
    };
};

function clearGrid() {
    container.innerHTML = "";
};

createGrid(16, 16);