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
let p1x= 0;
let p1y = 10;
let p2x = 690;
let p2y = 10;

function keyIsPressed(){
  if (key=== 's'){
    p1y = p1y-dx;
    }
function setup() {
  createCanvas(700, 500);
}

function circ1(){
  circle(350,250,70);
  fill("white");
}
function draw() {

background(220);
circ1();
rect(p1x,p1y,10,80);
keyIsPressed();
  

  }
  line(350,0,350,width);
  


  
  rect(p2x,p2y,10,80)
  ellipse(cordX,cordY,10,10)
  noFill();
  
  if (cordX>=width-10||cordX===20){
    dx = -dx;
  }
  if (cordY>=height-10||cordY===20){
    dy = -dy;
    
  }
  cordX+=dx
  cordY+=dy

  
}