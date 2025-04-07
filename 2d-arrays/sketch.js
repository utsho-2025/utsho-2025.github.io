// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let cellSize;
const SQUARE_DIMENSIONS = 10;
let grid;
let thePlayer = {
  x:0,
  y:0,
};
const PLAYER = 1;
let cols;
let rows;
let snake = [{
  x:0,
  y:0,
}]
let DIRECTIONSTATE = "right";

// let x;
// let y;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //make the largest square that fits
  if (height > width) {
    cellSize = width / SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height / SQUARE_DIMENSIONS;
  }
  grid = generateGrid(SQUARE_DIMENSIONS, SQUARE_DIMENSIONS);
  // grid[thePlayer.y][thePlayer.x] = PLAYER;


}

function draw() {
  background(220);

  displayGrid();
  // shiftPositions();
  moveSnake();

}

// function keyPressed() {

//   if (key ==="e"){
//     grid = generateGrid(SQUARE_DIMENSIONS,SQUARE_DIMENSIONS);
//     [thePlayer.y][thePlayer.x] = PLAYER;
//   }
//   if (key === "w") {
//     //move up
//     shiftPositions(thePlayer.x, thePlayer.y - 1);
//   }
//   if (key === "s") {
//     //move down
//     shiftPositions(thePlayer.x, thePlayer.y + 1);
//   }
//   if (key === "a") {
//     //move left
//     shiftPositions(thePlayer.x - 1, thePlayer.y);
//   }
//   if (key === "d") {
//     //move right
//     shiftPositions(thePlayer.x + 1, thePlayer.y);
//   }
// }

function displayGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (snakeId(x,y)){
        fill("black");
      }
      else{
        fill("white")


      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);


    }
      
  }
}


function generateGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

// function shiftPositions(x,y){
//   if (x >= 0 && x < SQUARE_DIMENSIONS && y >= 0 && y <= SQUARE_DIMENSIONS && grid[y][x] === 0){
//     if(grid[y][x]===0){
//       grid[thePlayer.y][thePlayer.x]===0;
    
//       thePlayer.x = x;
//       thePlayer.y = y;
  
//       grid[oldY][oldX] = 0;
  
//       grid[thePlayer.y][thePlayer.x] = PLAYER;

//     }
    


//   }
// }
function moveSnake(){
  let snakeHead = {...snake[0]};// added this so in future if i add something complex to my object it wont throw an error
  if (DIRECTIONSTATE=== "right"){
    snakeHead.x +=1

  }
  if (DIRECTIONSTATE=== "left"){
    snakeHead.x -=1

  }
  if (DIRECTIONSTATE=== "up"){
    snakeHead.y +=1

  }
  if (DIRECTIONSTATE=== "down"){
    snakeHead.y -=1

  } 

  snake.unshift(snakeHead);

  snake.pop();


}
function keyPressed(){
  if ( key=== "d" && DIRECTIONSTATE !== "left"){
    DIRECTIONSTATE = "right"

  }

  if ( key=== "a" && DIRECTIONSTATE !== "right"){
    DIRECTIONSTATE = "left"

  }
  
  if ( key=== "w" && DIRECTIONSTATE !== "down"){
    DIRECTIONSTATE = "up"

  }
  
  if ( key=== "s" && DIRECTIONSTATE !== "up"){
    DIRECTIONSTATE = "down"

  }

}
function snakeId(x,y){
  for (let i = 0; i<snake.length; i++){
    if (snake[i].x===x&&snake[i].y ===y){
      return true;

    }
    

  }
  return false; 
  
}