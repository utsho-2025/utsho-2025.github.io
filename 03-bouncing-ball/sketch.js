// Bouncing Ball Object Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall();
}

function draw() {
  background(220);
  moveBalls();
  displayBall();


}

function mousePressed() {
  spawnBall();
}

function spawnBall() {
  let someBall = {
    x: random(width),
    y: random(height),
    radius: random(15, 40),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  ballArray.push(someBall);
}
function moveBalls(){
  for (let ball of ballArray) {
    //move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    //teleport around edge of screen
    if (ball.x - ball.radius> width) {
      //off right side
      ball.x  = -ball.radius;
    }
    else if (ball.x +ball.radius< 0) {
      ball.x = width+ ball.radius;
    }
    if (ball.y -ball.radius> height) {
      //fell off the bottom
      ball.y = -ball.radius;

    }
    else if (ball.y+ball.radius < 0) {
      //off top
      ball.y = height+ ball.radius;
    }


  }
}
function displayBall(){
  //display ball
  fill("red");
  circle(ball.x, ball.y, ball.radius * 2);  
  
}