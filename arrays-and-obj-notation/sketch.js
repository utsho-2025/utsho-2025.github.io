// Snake racing simulator
// Utsho Bhattacharjee
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// I will be changing my snakes assignemnt to something easier and more managable
let snakes;
let finishLine;
let winners;
let width = 800;
let height = 500;
let gamestate = "start";

function setup() {
  createCanvas(800, 500);
  finishLine = width - 70;
  racer();
}
function draw(){ //shows screen according to the gamestate
  background(220);
  if (gamestate === "start") {
    welcomeScreen();
  }
  if (gamestate === "play") {
    startGame();
  }
  
}
function mousePressed() {//changes states so the game can start
  if (gamestate === "start") {
    gamestate = "play";
  }
}
function welcomeScreen() {//simple welcome screen
  background(220);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("Snake race", width / 2, height / 2);
  textSize(15);

  textAlign(CENTER, CENTER);
  text("click anywhere to start", width / 2, height / 2 + 30);
}

function startGame() {
  stroke(0);
  line(finishLine, 0, finishLine, height);
  for (let snake of snakes) {//makes the snake itself
    fill(snake.color);
    noStroke();

    // rect(snake.x, snake.y, 50,10);
    for (let i = 0; i < 5; i++) {
      ellipse(snake.x + i * 30, snake.y, 50, 10);// makes it look like a snake(barely)
    }

    snake.x += random(1, 10);

    // winner function
    if (snake.x >= finishLine) {
      scores[snake.color]++; //adds a point if a snake wins

      winners = snake.color; //declares the winner snake color
      noLoop(); // makes it so that there is not infinitely many winners
      console.log(winners);

      gamestate = "winner";
    }
    if (gamestate === "play") {
      // basically text for tracking score
      textAlign(LEFT, TOP);
      textSize(10);
      text("red: " + scores.red, 50, 10);

      text("blue: " + scores.blue, 50, 30);

      text("yellow: " + scores.yellow, 50, 50);

      text("black: " + scores.black, 50, 70);
    }

    if (gamestate === "winner") {
      //announces the winner
      background(220);
      textAlign(CENTER, CENTER);
      textSize(20);

      text(winners + " wins", width / 2, height / 2);
      textSize(15);
      text("press any key to restart", width / 2, height / 2 + 30);
      noLoop();
    }
  }
}
function racer() {
  // the whole array for snake objects
  snakes = [];
  snakes.push({
    x: 50,
    y: 100,
    color: "red",
  });

  snakes.push({
    x: 50,
    y: 200,
    color: "blue",
  });

  snakes.push({
    x: 50,
    y: 300,
    color: "yellow",
  });

  snakes.push({
    x: 50,
    y: 400,
    color: "black", 
  });
  winners = null;// not assigning anything for now, value will change depending on the winner
}
function resetGame() {
  //resets the game if you press any key after someone wins
  racer();
  loop();//this makes it so that game still can be played after a key press. helps gamestate function properly
  gamestate = "play";
}

//press a key on the winner screen to restart
function keyPressed() {
  if (gamestate === "winner") {
    resetGame();
  }
}
let scores = {
  //initializes the scores
  red: 0,
  blue: 0,
  yellow: 0,
  black: 0,
};
