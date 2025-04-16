// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);
  push();//saving the transformation matrix
  translate(width/2,height/2);
  rotate(mouseX);
  fill("red");
  rect(0,0,200,75);
  pop();//resettitng it
  fill("green");
  rect(200,height-100,width*2,200);
}
