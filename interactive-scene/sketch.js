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
let p2x;
let p2y = 10;

function keyPressed() {
  if (keyCode === 83 && keyIsPressed&& p2y!==0) {
    p1y +=pSpeed;


  }
  else if (keyCode === 87 && keyIsPressed&& p2y!==0) {
    p1y -=pSpeed;

  }
  else if (keyCode === DOWN_ARROW && keyIsPressed&& p2y!==0) {
    p2y +=pSpeed;

  }
  else if (keyCode === UP_ARROW && keyIsPressed&& p2y!==windowHeight){
    p2y -=pSpeed;

  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  p2x = windowWidth-10;
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




  
  if (cordX>=windowWidth-10||cordX<10){
    dx = -dx;
  }
  if (cordY>=windowHeight-10||cordY<10){
    dy = -dy;
    
  }
  cordX+=dx;
  cordY+=dy;

}

