// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let dy = 4;
let dx= 4;
let cordX = 200;
let cordY =200;
let pSpeed = 50;
let p1x= 0;
let p1y = 10;
let p2x = 690;
let p2y = 10;

function keyPressed() {
  if (key === "s" && keyIsPressed && p1y!==windowHeight) {
    p1y += pSpeed;

  }
  else if (key==='w'&& keyIsPressed&& p1y!==0){
    p1y -=pSpeed;

  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function circ1(){
  circle(windowWidth/2,windowHeight/2,70);
  fill("white");
}
function draw() {
  background(220);
  circ1();
  fill(0);
  rect(p1x,p1y,10,80);
  // keyIsPressed();
  

  
  line(windowWidth/2,0,windowWidth/2,windowHeight);

  


  
  rect(p2x,p2y,10,80);
  ellipse(cordX,cordY,10,10);
  noFill();




  
  if (cordX>=width-10||cordX===20){
    dx = -dx;
  }
  if (cordY>=height-10||cordY===20){
    dy = -dy;
    
  }
  cordX+=dx;
  cordY+=dy;

}

