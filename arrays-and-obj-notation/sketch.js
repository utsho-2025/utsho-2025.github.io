// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//I am still brainstorming and coming up with what i should do
// I will be changing my snakes assignemnt to something easier and more managable
let snakes;
let finishLine;
let winners;
let width = 600;
let height = 600;


function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(220);
  startGame();



}

function startGame(){
  stroke(0);
  line(width-50,0,width-50,height);

}
function racer(){
  snakes = [
    {x : 50, y: 100, color :"red"},
    {x : 50, y: 200, color :"blue"},
    {x : 50, y: 300, color :"green"},
    {x : 50, y: 400, color :"black"},
  ];
  winners  = null;//not assigning rn
}