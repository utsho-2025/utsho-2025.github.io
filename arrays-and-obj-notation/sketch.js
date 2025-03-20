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
  finishLine = width - 50;
  racer();
}
function draw() {
   background(220);
  if (gamestate==="start"){
    welcomeScreen();
  }
  if (gamestate === "play"){
   
    startGame(); 
  }
  // startGame(); 
}
function mousePressed(){
  if (gamestate==="start"){
    gamestate  = "play";
  }
}
function welcomeScreen(){
  background(220);
  textSize(25);
  textAlign(CENTER,CENTER);
  text("Snake race",width/2,height/2);
  textSize(15);
  
  textAlign(CENTER,CENTER);
  text("click anywhere to start",width/2,height/2+30);

}

function startGame(){
  stroke(0);
  line(finishLine,0,finishLine,height);
  for (let snake of snakes){
    fill(snake.color);
    noStroke();

    // rect(snake.x, snake.y, 50,10);
    for (let i = 0; i<5; i++){
      ellipse(snake.x +i*12,snake.y,50,10);
    }

    snake.x += random(1,10);

    // winner function
    if (snake.x>=finishLine ){
      scores[snake.color]+=1;
      
      winners = snake.color;
      noLoop();
      gamestate = "winner"
      
      

    }
    if (gamestate === "play");{
      textAlign(LEFT,TOP);
      textSize(10);
      text("red: "+scores.red,50,10);
      
      text("blue: "+scores.blue,50,30);
      
      text("yellow: "+scores.yellow,50,50);
      
      text("black: "+scores.black,50,70);

    }
    
    if (gamestate === "winner"){
      background(220);
      textAlign(CENTER,CENTER);
      textSize(20);

      text(winners + " wins", width/2, height/2);
      textSize(15);
      text("press any key to restart",width/2,height/2+30);
      noLoop();

    }

  }

}
function racer(){
  snakes = [];
  snakes.push({
    x : 50, 
    y: 100, 
    color :"red"
  });
  
  snakes.push({
    x : 50, 
    y: 200, 
    color :"blue"
  });
  
  snakes.push({
    x : 50,
    y: 300, 
    color :"yellow"
  });
  
  snakes.push({
    x : 50, 
    y: 400, 
    color :"black"
  });
  winners = null;

}
function resetGame(){
  racer();
  loop();
  gamestate = "play";
}
function keyPressed(){
  if (gamestate==="winner"){
    resetGame();

    
  }
}
let scores = {
  red:0,
  blue:0,
  yellow:0,
  black:0,
};
