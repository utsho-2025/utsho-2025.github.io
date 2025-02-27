// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let waitTime = 2000;
let lastSwitchtime = 0;
let stateVar = "green";
const GREEN_LIGHT_DURATION = 3000;
const YELLOW_LIGHT_DURATION  = 1000;
const RED_LIGHT_DURATION = 4000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  displayCorrecLight();
  changeStateIfNeeded();


}
function displayCorrecLight(){
  if (stateVar==="green"){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50);
  }
  else if (stateVar === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle

  }
  else if (stateVar ==="red") {
    fill("yellow");
    ellipse(width/2, height/2 - 65, 50, 50);
  }

  
}
function changeStateIfNeeded() {
  if (lightState === "green" && millis() > lastSwitchedTime + GREEN_LIGHT_DURATION) {
    lightState = "yellow";
    lastSwitchedTime = millis();
  }
  else if (lightState === "yellow" && millis() > lastSwitchedTime + YELLOW_LIGHT_DURATION) {
    lightState = "red";
    lastSwitchedTime = millis();
  }
  else if (lightState === "red" && millis() > lastSwitchedTime + RED_LIGHT_DURATION) {
    lightState = "green";
    lastSwitchedTime = millis();
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
function allOfTheLights(){
  if (millis() > waitTime+lastSwitchtime){
    lastSwitchtime = millis();

    stateVar === "green";

  }
}

