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
}];
let DIRECTIONSTATE = "right";
let fps = 60;
// function moveSnake2(){
//   snake.x++;

// }
// let loop = setInterval(moveSnake2, 1000/fps);
// // let x;
// // let y;


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


}

function draw() {
  background(220);

  displayGrid();
  // if (snakeId() && frameCount % fps === 0) {
  //   grid = generateGrid();



  // }
  moveSnake();
  // let x = frameCount % 100;
  // if (snakeId(x,y)){
  //   frameRate(10);
    

  // }
  function keyPressed(){
    if ( key=== "d" && DIRECTIONSTATE !== "left"){
      DIRECTIONSTATE = "right";
  
    }
  
    if ( key=== "a" && DIRECTIONSTATE !== "right"){
      DIRECTIONSTATE = "left";
  
    }
    
    if ( key=== "w" && DIRECTIONSTATE !== "down"){
      DIRECTIONSTATE = "up";
  
    }
    
    if ( key=== "s" && DIRECTIONSTATE !== "up"){
      DIRECTIONSTATE = "down";
  
    }
  
  }
  function moveSnake(){
    let snakeHead = {...snake[0]};// added this so in future if i add something complex to my object it wont throw an error
    if (DIRECTIONSTATE=== "right"){
      snakeHead.x +=1;
  
    }
    if (DIRECTIONSTATE=== "left"){
      snakeHead.x -=1;
  
    }
    if (DIRECTIONSTATE=== "up"){
      snakeHead.y +=1;
  
    }
    if (DIRECTIONSTATE=== "down"){
      snakeHead.y -=1;
  
    } 
    snake.pop();
  
    snake.unshift(snakeHead);
  

  
  
  }
}

function displayGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (snakeId(x,y)){
        fill("black");
      }
      else{
        fill("white");


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




function snakeId(x,y){
  for (let i = 0; i<snake.length; i++){
    if (snake[i].x===x&&snake[i].y ===y){
      return true;

    }
    

  }
  return false; 
  
}