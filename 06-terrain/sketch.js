// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let terrain  = [];
const NUMBER_OF_RECTS = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain(width/NUMBER_OF_RECTS);

  
}
function generateTerrain(widthOfRect){
  let time = 0;
  let deltaTime = 0.01;
  for (let i = 0; i< NUMBER_OF_RECTS;i++){
    let theHeight = noise(time)*height;
    terrain.push(spawnRect(i*widthOfRect,random(height),widthOfRect));
    time+=deltaTime;
  }
}

function draw() {
  background(220);
  noStroke();
  fill("green");
  for (let someRect of terrain){
    rect(someRect.x,someRect.y,someRect.w,someRect.h);
  }
}
function spawnRect(leftside,rectHeight, rectWidth){
  let theRect = {
    x: leftside,
    y: height-rectHeight,
    w:rectWidth,
    h:rectHeight,


  };
  return theRect;
}