// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//I am still brainstorming and coming up with what i should do
// snake game
const boardwidth=100;
const boardheight=100;

let gridSize = {
  x : 100,
  y: 100,
  amountX : 100,
  amountY : 100,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawGrid();
}


function drawGrid(){
  for (let x  =  0 ; x<gridSize.x;x++){
    for (let y =0; y<gridSize.y;y++){
      rect(x*gridSize.amountX, y*gridSize.amountY, gridSize.x, gridSize.y);
    }
  }
}