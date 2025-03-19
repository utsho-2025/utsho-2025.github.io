// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//I am still brainstorming and coming up with what i should do
let winner;
let snakes;
let finishLine;
let width = 800;
let height = 600;
let gameState = "Start";



// snake game
// const boardwidth=100;
// const boardheight=100;
// let width  = 700;
// let height  = 600;
// let startScreen = "start";
// gamestate = "strt";
// let gameEnd = false;


// let gridSize = {
//   x : 17,
//   y: 15,
//   amountX : width/17,
//   amountY : height/15,
// };

function setup() {
  createCanvas(width, height);
  finishLine = width - 50;
  line(finishLine,0,finishLine,200);
}
// }
// function mousePressed(){
//   if (startScreen==="start"){
//     gameState = "Startscreenw";
//   }
//   if (startScreen === "play"){
    
//     drawGrid();
//   }
// }
// function game(){

// }

function draw() {
  background(220);
  finishLine = width - 20;
  line(finishLine,0,finishLine,height);
}
function snakeShape(){
  rect();
}

// function drawGrid(){
//   for (let x  =  0 ; x<gridSize.x;x++){
//     for (let y =0; y<gridSize.y;y++){
//       rect(x*gridSize.amountX, y*gridSize.amountY, gridSize.amountX, gridSize.amountY);
//     }
//   }
// }
// function drawStartScreen(){
//   background('red');
//   textSize(70);
//   textAlign(CENTER);
//   // textFont()
//   text("Pong", windowWidth/2,windowHeight/2-50);
//   textSize(35);

//   text("Click anywhere to start",windowWidth/2,windowHeight/2);



  

// }
function winnerSnakes(){
  snakes = [
    {x:7, y: height/4, color:"blue"},
    {x:7, y: height/2, color:"red"},
    {x:7, y: height, color:"black"},
  ];
  winner = null;
}