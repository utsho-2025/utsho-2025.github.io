let cols = 6;
let rows = 2;
let gridSize = 20;
let colors = [];
let newGrid;
// first of all, to understand grids, you have to understant arrays. this makes a grid come to life and makes it reactive
//above, just so I can change colors in my grid, i made an empty array. this is used to I can add stuff to it in the future. 
// this can be done as I plug i and j in the arrays and make it  so that it can go through every column and row to change colors
function setup() {
  createCanvas(windowWidth, windowHeight);

  // for (i = 0;  i<rows; i++){
  //   colors[i]= [];
  //   for (j = 0; j<cols;j++){
    
  //   colors[i][j] = random(255);
  //   }
  // }
}

function draw() {
  background(220);
  // for (i = 0;  i<rows; i++){
  //   for (j = 0; j<cols;j++){
  //     let x = i*gridSize;
  //     let y = j*gridSize;
  //     fill(colors[i][j]);
  //     rect(x,y,gridSize,gridSize);
      
  //   }
  // }
}

//now how do I make a minesweeper from this 
//step 1: make a grid
//step2: make it interactive
// step3: make a function that pushes bombs on random spots
// do something so that if a tile is clickced, the tiles around it can indicate how close it is to a mine

// function generateGrid(cols,rows){
//   newGrid = [];
//   for(i = 0; i< cols; i++){
//     newGrid.push([]);

//     for (j  = 0; j<rows; j++){
//       newGrid.push

//     }
//   }
  

// }