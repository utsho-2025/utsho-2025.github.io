// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//I am still brainstorming and coming up with what i should do
// snake game
const boardwidth=10;
const boardheight=10;

let gridSize = {
  x : 200,
  y: 200,
  amountX : width/200,
  amountY : height/200,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawGrid();
}


function drawGrid(){
  for (let x  =  0 ; x<gridSize.amountX;x++){
    for (let y =0; y<gridSize.amountY;y++){
      rect(x*gridSize.x, y*gridSize.y, gridSize.x, gridSize.y);
    }
  }
}