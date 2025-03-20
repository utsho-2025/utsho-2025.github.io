const boardwidth=100;
const boardheight=100;
let width  = 700;
let height  = 600;
let startScreen = "start";
gamestate = "strt";
let gameEnd = false;


let gridSize = {
  x : 17,
  y: 15,
  amountX : width/17,
  amountY : height/15,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function mousePressed(){
  if (startScreen==="start"){
    gameState = "strt";
  }
  if (startScreen === "play"){
    
    drawGrid();
  }
}
function game(){

}

function draw() {
  background(220);
  drawGrid();
}


function drawGrid(){
  for (let x  =  0 ; x<gridSize.x;x++){
    for (let y =0; y<gridSize.y;y++){
      rect(x*gridSize.amountX, y*gridSize.amountY, gridSize.amountX, gridSize.amountY);
    }
  }
}
function drawStartScreen(){
  background('red');
  textSize(70);
  textAlign(CENTER);
  // textFont()
  text("Pong", windowWidth/2,windowHeight/2-50);
  textSize(35);

  text("Click anywhere to start",windowWidth/2,windowHeight/2);



  

}