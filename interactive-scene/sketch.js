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
let p1x = 0;
let p1y = 10;
let p2x;
let p2y = 10;
let gameState = "start";
let scoreVar1 = 0;
let scoreVar2 = 0;


function keyPressed() {//controls for the paddles
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
function showText(){
  textSize(50);
  text(scoreVar1,0,0,windowWidth/2,windowHeight/2);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  p2x = windowWidth-10;
}

function circ1(){//the midfield circle
  circle(windowWidth/2,windowHeight/2,100);
  fill("white");
}
function draw() {
  background(220);
  circ1();
  fill(0);
  rect(p2x,p2y,10,80);//paddle 2
  rect(p1x,p1y,10,80);//paddle 1

  showText();
  

  
  line(windowWidth/2,0,windowWidth/2,windowHeight);//line going through the middle

  


  

  ellipse(cordX,cordY,10,10);//the ball itself
  noFill();




  
  if (cordX>=windowWidth-5||cordX<6){//horizontal boundaries
    dx = -dx;
    
  }
  if (cordY>=windowHeight-5||cordY<5){//vertical boundaries
    dy = -dy;
    
  }
  // Paddle collision check for p1
  if (cordX >= p1x && cordX <= p1x + 10 && cordY >= p1y && cordY <= p1y + 80) {
    dx = -dx;
    dy = map(cordY - (p1y + 40), -40, 40, -4, 4); // used for balls bounce if the ball hits the side of the paddles
  }
  
  // Paddle collision check for p2
  if (cordX >= p2x - 10 && cordX <= p2x && cordY >= p2y && cordY <= p2y + 80) {
    dx = -dx;
    dy = map(cordY - (p2y + 40), -40, 40, -4, 4); // this remaps the dy variable so that if the ball hits the corner of the paddle it shoots off differently
  }
  
  //movement
  cordX += dx;
  cordY += dy;

}

